const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\ET\\Documents\\GitHub\\erpzenith\\resources\\js\\Pages\\ModulosLegacy';
const orphansDir = path.join(baseDir, 'stitch_la_cima_repuestos');

if (!fs.existsSync(orphansDir)) {
    console.log("No hay archivos desorganizados para reparar.");
    process.exit(0);
}

const folders = fs.readdirSync(orphansDir);

const mapping = {
    'tienda_virtual': ['search', 'catalog', 'e_commerce', 'home', 'nosotros', 'order', 'processing', 'product', 'cart'],
    'auth': ['account', 'login', 'password', 'acceso', 'registro'],
    'erp/inventario': ['inventario', 'kardex', 'producto', 'activos'],
    'erp/ventas': ['venta', 'factura', 'cliente', 'ticket', 'pos'],
    'erp/rrhh': ['n_mina', 'rrhh', 'empleado', 'prestaciones', 'comisiones'],
    'erp/compras': ['compra', 'proveedor', 'recepciones'],
    'erp/contabilidad': ['contable', 'iva', 'libro', 'impuesto', 'cierre', 'cuentas'],
    'erp/finanzas': ['balance', 'financiero', 'caja', 'rendimiento', 'resultados'],
    'configuracion': ['configuraci', 'sistema', 'aprobaci', 'roles', 'usuario', 'backup', 'base_de_datos', 'cron'],
    'erp/dashboard': ['dashboard'],
};

folders.forEach(folder => {
    const folderPath = path.join(orphansDir, folder);
    if (!fs.statSync(folderPath).isDirectory()) return;

    let targetCat = 'otros';
    for (const [cat, keywords] of Object.entries(mapping)) {
        if (keywords.some(kw => folder.toLowerCase().includes(kw.toLowerCase()))) {
            targetCat = cat;
            break;
        }
    }

    const targetDir = path.join(baseDir, targetCat);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // Mover archivos JSX
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
        if (file.endsWith('.jsx')) {
            const srcFile = path.join(folderPath, file);
            const dstFile = path.join(targetDir, file);
            fs.copyFileSync(srcFile, dstFile);
            console.log(`[Reubicado] ${file} -> ${targetCat}`);
        }
    });
});

console.log("Limpiando carpeta huérfana...");
fs.rmSync(orphansDir, { recursive: true, force: true });
console.log("¡Reestructuración Perfecta de Módulos completada!");
