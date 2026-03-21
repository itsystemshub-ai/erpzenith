import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../../modules/prisma/prisma.service';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>('permissions', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredPermissions || requiredPermissions.length === 0) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    
    if (!user || !user.id) {
      throw new ForbiddenException('Usuario no autenticado');
    }

    // Si es ADMIN, permitir todo
    if (user.role === 'ADMIN') {
      return true;
    }

    // Obtener permisos actualizados de la BD
    const userRole = await this.prisma.role.findUnique({
      where: { id: user.roleId },
      include: { 
        permissions: true,
        modules: true,
      },
    });

    if (!userRole) {
      throw new ForbiddenException('Rol de usuario no encontrado');
    }

    const userPermissions = userRole.permissions.map(
      p => `${p.module}:${p.action}`
    );

    // Verificar cada permiso requerido
    const hasAllPermissions = requiredPermissions.every(permission => {
      // Soportar wildcard: ventas:* = todas las acciones de ventas
      if (permission.endsWith(':*')) {
        const module = permission.split(':')[0];
        return userPermissions.some(p => p.startsWith(`${module}:`));
      }
      return userPermissions.includes(permission);
    });

    if (!hasAllPermissions) {
      throw new ForbiddenException(
        `Acceso denegado. Permisos requeridos: ${requiredPermissions.join(', ')}`
      );
    }

    // Verificar acceso al módulo específico
    const requestPath = context.switchToHttp().getRequest().url;
    const moduleMatch = requestPath.match(/\/api\/v1\/([^/]+)/);
    if (moduleMatch) {
      const requestedModule = moduleMatch[1];
      const hasModuleAccess = userRole.modules.some(m => 
        m.moduleName === requestedModule && m.canView
      );

      if (!hasModuleAccess) {
        throw new ForbiddenException(
          `No tienes acceso al módulo ${requestedModule}`
        );
      }
    }

    return true;
  }
}
