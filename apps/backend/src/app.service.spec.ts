import { Test, TestingModule } from '@nestjs/testing';

// Ejemplo de test unitario - Configurar según el módulo que se vaya a probar
describe('AppService', () => {
  let service: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [],
    }).compile();

    service = module.get('AppService');
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });
});
