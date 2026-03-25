#!/usr/bin/env node

/**
 * Script de verificación pre-deploy para Vercel
 * 
 * Este script verifica que todos los archivos críticos estén configurados correctamente
 * antes de desplegar en Vercel.
 */

const fs = require('fs');
const path = require('path');

// Root directory is parent of scripts directory
const ROOT_DIR = path.resolve(__dirname, '..');

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

const checks = [];
let hasErrors = false;

function checkFile(filePath, description) {
  const fullPath = path.join(ROOT_DIR, filePath);
  const exists = fs.existsSync(fullPath);
  
  checks.push({
    file: filePath,
    description,
    exists,
    critical: true
  });
  
  if (!exists) {
    hasErrors = true;
    console.log(`${RED}✗${RESET} ${description}: ${filePath}`);
  } else {
    console.log(`${GREEN}✓${RESET} ${description}: ${filePath}`);
  }
  
  return exists;
}

function checkFileContent(filePath, searchFor, description) {
  const fullPath = path.join(ROOT_DIR, filePath);
  
  if (!fs.existsSync(fullPath)) {
    checks.push({
      file: filePath,
      description,
      exists: false,
      critical: true
    });
    hasErrors = true;
    console.log(`${RED}✗${RESET} ${description}: ${filePath} (archivo no encontrado)`);
    return false;
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  const found = content.includes(searchFor);
  
  checks.push({
    file: filePath,
    description,
    exists: found,
    critical: true
  });
  
  if (!found) {
    hasErrors = true;
    console.log(`${RED}✗${RESET} ${description}`);
  } else {
    console.log(`${GREEN}✓${RESET} ${description}`);
  }
  
  return found;
}

console.log(`${BLUE}╔═══════════════════════════════════════════════════════════╗${RESET}`);
console.log(`${BLUE}║     ERP ZENITH - Verificación Pre-Deploy para Vercel     ║${RESET}`);
console.log(`${BLUE}╚═══════════════════════════════════════════════════════════╝${RESET}`);
console.log('');

console.log(`${YELLOW}📁 Verificando archivos críticos...${RESET}`);
console.log('');

// Archivos de configuración principales
checkFile('vercel.json', 'Vercel config (raíz)');
checkFile('apps/frontend/vercel.json', 'Vercel config (frontend)');
checkFile('package.json', 'Package.json (raíz)');
checkFile('apps/backend/package.json', 'Package.json (backend)');
checkFile('apps/frontend/package.json', 'Package.json (frontend)');
checkFile('turbo.json', 'Turborepo config');

console.log('');
console.log(`${YELLOW}🔧 Verificando configuración...${RESET}`);
console.log('');

// Verificar contenido de vercel.json
checkFileContent('vercel.json', '"framework": "nextjs"', 'Vercel framework configurado como Next.js');
checkFileContent('vercel.json', '"installCommand": "cd ../.. && npm install"', 'Install command correcto');
checkFileContent('vercel.json', '"buildCommand": "cd ../.. && npm run build"', 'Build command correcto');

// Verificar API route
checkFile('apps/frontend/src/app/api/[[...path]]/route.ts', 'API Route de NestJS');
checkFileContent('apps/frontend/src/app/api/[[...path]]/route.ts', 'AppModule', 'API route importa AppModule');

// Verificar backend
checkFile('apps/backend/src/main.ts', 'Backend main.ts');
checkFile('apps/backend/src/app.module.ts', 'Backend app.module.ts');
checkFile('apps/backend/prisma/schema.prisma', 'Prisma schema');

console.log('');
console.log(`${YELLOW}📦 Verificando dependencias...${RESET}`);
console.log('');

// Verificar dependencias críticas
const rootPackage = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf8'));
const backendPackage = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'apps/backend/package.json'), 'utf8'));
const frontendPackage = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'apps/frontend/package.json'), 'utf8'));

const requiredDeps = {
  'root': ['turbo', '@supabase/supabase-js'],
  'backend': ['@nestjs/common', '@nestjs/core', '@prisma/client', 'prisma'],
  'frontend': ['next', 'react', 'react-dom']
};

function checkDependency(type, name) {
  let pkg;
  if (type === 'root') {
    pkg = rootPackage;
  } else if (type === 'backend') {
    pkg = backendPackage;
  } else {
    pkg = frontendPackage;
  }
  
  const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
  const exists = allDeps[name] !== undefined;
  
  if (!exists) {
    hasErrors = true;
    console.log(`${RED}✗${RESET} Dependencia ${type}/${name}`);
  } else {
    console.log(`${GREEN}✓${RESET} Dependencia ${type}/${name}: v${allDeps[name]}`);
  }
  
  return exists;
}

console.log('Raíz:');
requiredDeps.root.forEach(dep => checkDependency('root', dep));

console.log('Backend:');
requiredDeps.backend.forEach(dep => checkDependency('backend', dep));

console.log('Frontend:');
requiredDeps.frontend.forEach(dep => checkDependency('frontend', dep));

console.log('');
console.log(`${YELLOW}🔐 Verificando variables de entorno...${RESET}`);
console.log('');

// Verificar .env.example
const envExamplePath = path.join(ROOT_DIR, '.env.example');
if (fs.existsSync(envExamplePath)) {
  console.log(`${GREEN}✓${RESET} .env.example existe`);
} else {
  console.log(`${YELLOW}⚠${RESET} .env.example no encontrado (opcional)`);
}

console.log('');
console.log(`${YELLOW}⚠️  Recordatorio: Variables de Entorno en Vercel${RESET}`);
console.log('');
console.log('   Asegúrate de configurar en Vercel Dashboard:');
console.log(`   ${GREEN}•${RESET} DATABASE_URL`);
console.log(`   ${GREEN}•${RESET} JWT_SECRET`);
console.log(`   ${GREEN}•${RESET} JWT_EXPIRES_IN`);
console.log(`   ${GREEN}•${RESET} FRONTEND_URL`);
console.log(`   ${GREEN}•${RESET} NEXT_PUBLIC_API_URL`);
console.log('');

// Resumen
console.log('═══════════════════════════════════════════════════════════');
console.log('');

if (hasErrors) {
  console.log(`${RED}❌ Se encontraron errores que deben corregirse antes del deploy${RESET}`);
  console.log('');
  process.exit(1);
} else {
  console.log(`${GREEN}✅ ¡Todo está listo para el deploy en Vercel!${RESET}`);
  console.log('');
  console.log(`${BLUE}Siguientes pasos:${RESET}`);
  console.log('');
  console.log('   1. Ejecutar: npm install');
  console.log('   2. Ejecutar: npm run build (verificar build local)');
  console.log('   3. Configurar variables de entorno en Vercel Dashboard');
  console.log('   4. Ejecutar: vercel (o hacer push a GitHub)');
  console.log('');
  console.log(`${BLUE}Documentación completa:${RESET} VERCEL_DEPLOY_GUIDE.md`);
  console.log('');
  process.exit(0);
}
