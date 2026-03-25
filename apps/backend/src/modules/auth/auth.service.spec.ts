import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

// Mock de PrismaService
const mockPrismaService = {
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
  passwordResetRequest: {
    updateMany: jest.fn(),
    create: jest.fn(),
  },
  role: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
};

// Mock de JwtService
const mockJwtService = {
  sign: jest.fn(),
};

describe('AuthService', () => {
  let authService: AuthService;
  let prismaService: PrismaService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        JwtModule.register({
          secret: 'test-secret-key-for-unit-tests',
          signOptions: { expiresIn: '1h' },
        }),
      ],
      providers: [
        AuthService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    prismaService = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('debería estar definido', () => {
    expect(authService).toBeDefined();
  });

  describe('login', () => {
    it('debería lanzar UnauthorizedException si el usuario no existe', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(authService.login({ username: 'nonexistent', password: 'password' }))
        .rejects.toThrow('Credenciales inválidas');
    });

    it('debería retornar token si las credenciales son válidas', async () => {
      const hashedPassword = await bcrypt.hash('correctpassword', 10);
      const mockUser = {
        id: '1',
        username: 'testuser',
        password: hashedPassword,
        name: 'Test User',
        isActive: true,
        roles: [{ name: 'USER', permissions: [{ module: 'users', action: 'read' }] }],
      };

      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);
      mockJwtService.sign.mockReturnValue('fake-jwt-token');

      const result = await authService.login({ username: 'testuser', password: 'correctpassword' });

      expect(result).toHaveProperty('access_token');
      expect(result.user).toHaveProperty('username', 'testuser');
    });
  });

  describe('register', () => {
    it('debería lanzar ConflictException si el usuario ya existe', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue({ id: '1', username: 'existing' });

      await expect(authService.register({ username: 'existing', password: 'password', name: 'Test' }))
        .rejects.toThrow('El usuario ya está registrado');
    });
  });
});
