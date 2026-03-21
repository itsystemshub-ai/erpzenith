import { Injectable, UnauthorizedException, ForbiddenException, BadRequestException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as speakeasy from 'speakeasy';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  // ───────────────────────────────────────────────────────────────────────────
  // LOGIN
  // ───────────────────────────────────────────────────────────────────────────
  
  async login(email: string, password: string, mfaToken?: string, ip?: string) {
    // 1. Buscar usuario con rol y permisos
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        role: {
          include: {
            permissions: true,
          },
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // 2. Verificar si está activo
    if (!user.isActive) {
      throw new ForbiddenException('Usuario inactivo. Contacte al administrador.');
    }

    // 3. Verificar si está bloqueado por intentos fallidos
    if (user.lockedUntil && user.lockedUntil > new Date()) {
      const minutes = Math.ceil((user.lockedUntil.getTime() - Date.now()) / 60000);
      throw new ForbiddenException(`Cuenta bloqueada por ${minutes} minutos por seguridad.`);
    }

    // 4. Validar contraseña
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      // Incrementar intentos fallidos
      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          failedAttempts: { increment: 1 },
          lockedUntil: user.failedAttempts >= 4
            ? new Date(Date.now() + 15 * 60 * 1000) // 15 minutos
            : undefined,
        },
      });
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // 5. Resetear intentos fallidos y actualizar login
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        failedAttempts: 0,
        lockedUntil: null,
        lastLogin: new Date(),
        lastLoginIP: ip,
      },
    });

    // 6. Generar tokens
    const payload = {
      sub: user.id,
      email: user.email,
      username: user.username,
      role: user.role.name,
      roleId: user.roleId,
      permissions: user.role.permissions.map(p => `${p.module}:${p.action}`),
    };

    const accessToken = this.jwt.sign(payload, {
      expiresIn: this.config.get('JWT_EXPIRES_IN', '8h'),
      secret: this.config.get('JWT_SECRET'),
    });

    const refreshToken = this.jwt.sign(
      { sub: user.id },
      {
        expiresIn: '7d',
        secret: this.config.get('JWT_REFRESH_SECRET'),
      }
    );

    // 7. Guardar sesión
    const session = await this.prisma.session.create({
      data: {
        userId: user.id,
        token: accessToken,
        refreshToken,
        ipAddress: ip,
        userAgent: '',
        expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 horas
      },
    });

    // 8. Registrar auditoría
    await this.prisma.auditLog.create({
      data: {
        userId: user.id,
        action: 'LOGIN',
        module: 'auth',
        ipAddress: ip,
      },
    });

    // 9. Retornar datos (NUNCA retornar passwordHash o mfaSecret)
    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        name: user.name,
        role: {
          id: user.role.id,
          name: user.role.name,
          color: user.role.color,
          icon: user.role.icon,
        },
      },
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // REFRESH TOKEN
  // ───────────────────────────────────────────────────────────────────────────
  
  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwt.verify(refreshToken, {
        secret: this.config.get('JWT_REFRESH_SECRET'),
      });

      const session = await this.prisma.session.findUnique({
        where: { token: refreshToken },
        include: { user: { include: { role: { include: { permissions: true } } } } },
      });

      if (!session || session.expiresAt < new Date()) {
        throw new UnauthorizedException('Sesión expirada');
      }

      // Generar nuevo access token
      const newAccessToken = this.jwt.sign(
        {
          sub: payload.sub,
          email: session.user.email,
          username: session.user.username,
          role: session.user.role.name,
          roleId: session.user.roleId,
          permissions: session.user.role.permissions.map(p => `${p.module}:${p.action}`),
        },
        {
          expiresIn: this.config.get('JWT_EXPIRES_IN', '8h'),
          secret: this.config.get('JWT_SECRET'),
        }
      );

      // Actualizar sesión
      await this.prisma.session.update({
        where: { id: session.id },
        data: { token: newAccessToken },
      });

      return { accessToken: newAccessToken };
    } catch (error) {
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }

  // ───────────────────────────────────────────────────────────────────────────
  // LOGOUT
  // ───────────────────────────────────────────────────────────────────────────
  
  async logout(userId: string, token: string) {
    await this.prisma.session.deleteMany({
      where: { token },
    });

    await this.prisma.auditLog.create({
      data: {
        userId,
        action: 'LOGOUT',
        module: 'auth',
      },
    });

    return { success: true, message: 'Sesión cerrada correctamente' };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // SETUP MFA
  // ───────────────────────────────────────────────────────────────────────────
  
  async setupMfa(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const secret = speakeasy.generateSecret({
      name: `ERP ZENITH (${user.email})`,
      length: 32,
    });

    await this.prisma.user.update({
      where: { id: userId },
      data: { mfaSecret: secret.base32 },
    });

    return {
      otpauthUrl: secret.otpauth_url,
      base32: secret.base32,
      qrCode: `otpauth://totp/${secret.otpauth_url}`,
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // ENABLE/DISABLE MFA
  // ───────────────────────────────────────────────────────────────────────────
  
  async enableMfa(userId: string, token: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const verified = speakeasy.totp.verify({
      secret: user.mfaSecret || '',
      encoding: 'base32',
      token,
      window: 1,
    });

    if (!verified) {
      throw new BadRequestException('Código MFA inválido');
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: { mfaEnabled: true },
    });

    return { success: true, message: 'MFA activado correctamente' };
  }

  async disableMfa(userId: string, token: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const verified = speakeasy.totp.verify({
      secret: user.mfaSecret || '',
      encoding: 'base32',
      token,
      window: 1,
    });

    if (!verified) {
      throw new BadRequestException('Código MFA inválido');
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        mfaEnabled: false,
        mfaSecret: null,
      },
    });

    return { success: true, message: 'MFA desactivado correctamente' };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // CAMBIAR CONTRASEÑA
  // ───────────────────────────────────────────────────────────────────────────
  
  async changePassword(userId: string, currentPassword: string, newPassword: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const isValid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!isValid) {
      throw new BadRequestException('Contraseña actual inválida');
    }

    // Validar que no sea la misma
    if (await bcrypt.compare(newPassword, user.passwordHash)) {
      throw new BadRequestException('La nueva contraseña debe ser diferente');
    }

    // Validar política de contraseñas
    this.validatePasswordPolicy(newPassword);

    const newPasswordHash = await bcrypt.hash(newPassword, 10);

    // Guardar en historial (para evitar reuso)
    await this.prisma.passwordHistory.create({
      data: {
        userId,
        hash: user.passwordHash,
      },
    });

    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash: newPasswordHash },
    });

    return { success: true, message: 'Contraseña cambiada correctamente' };
  }

  private validatePasswordPolicy(password: string): void {
    const errors: string[] = [];

    if (password.length < 10) {
      errors.push('Mínimo 10 caracteres');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Al menos una mayúscula');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Al menos una minúscula');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('Al menos un número');
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};\':"\\|,.<>\/?]/.test(password)) {
      errors.push('Al menos un carácter especial');
    }

    if (errors.length > 0) {
      throw new BadRequestException(`Política de contraseña no cumplida: ${errors.join(', ')}`);
    }
  }
}
