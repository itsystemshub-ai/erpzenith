const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\ET\\Documents\\GitHub\\erpzenith\\resources\\js\\Pages\\ModulosLegacy';

function walkAndLink(currentPath) {
    if (!fs.existsSync(currentPath)) return;
    const files = fs.readdirSync(currentPath);

    files.forEach(file => {
        const fullPath = path.join(currentPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkAndLink(fullPath);
        } else if (file.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            // 1. Inyectar URLs reales en los botones Sidebar donde el href sea "#"
            // Inventory
            content = content.replace(/(<a[^>]*?href=)"#"([^>]*?>\s*<span[^>]*?data-icon="inventory_2"[^>]*?>.*?<\/span>\s*<span[^>]*?>Inventory<\/span>\s*<\/a>)/gi, '$1"/modulo/erp/inventario/CentroDeReportesDeInventario"$2');
            
            // Dashboard
            content = content.replace(/(<a[^>]*?href=)"#"([^>]*?>\s*<span[^>]*?data-icon="dashboard"[^>]*?>.*?<\/span>\s*<span[^>]*?>Dashboard<\/span>\s*<\/a>)/gi, '$1"/modulo/erp/dashboard/ErpDashboardForgeOps"$2');
            
            // Sales
            content = content.replace(/(<a[^>]*?href=)"#"([^>]*?>\s*<span[^>]*?data-icon="payments"[^>]*?>.*?<\/span>\s*<span[^>]*?>Sales<\/span>\s*<\/a>)/gi, '$1"/modulo/erp/ventas/DashboardDeVentasKpis"$2');

            // Purchases
            content = content.replace(/(<a[^>]*?href=)"#"([^>]*?>\s*<span[^>]*?data-icon="shopping_cart"[^>]*?>.*?<\/span>\s*<span[^>]*?>Purchases<\/span>\s*<\/a>)/gi, '$1"/modulo/erp/compras/DashboardDeComprasErp"$2');

            // Configuration
            content = content.replace(/(<a[^>]*?href=)"#"([^>]*?>\s*<span[^>]*?data-icon="settings_input_component"[^>]*?>.*?<\/span>\s*<span[^>]*?>Configuration<\/span>\s*<\/a>)/gi, '$1"/modulo/configuracion/ConfiguraciNDeParMetrosGlobales"$2');

            // 2. Mapeos de la Tienda Virtual (Nav Global del E-commerce)
            content = content.replace(/(<a[^>]*?href=)"#"([^>]*?>\s*Catálogo\s*<\/a>)/gi, '$1"/modulo/tienda_virtual/catalog/CatalogGridView"$2');
            content = content.replace(/(<a[^>]*?href=)"#"([^>]*?>\s*Nosotros[^<]*<\/a>)/gi, '$1"/modulo/tienda_virtual/nosotros_y_contacto/NosotrosYContactoECommerce"$2');
            // Nota: Para la tienda, los textos a veces estan envueltos en Spans. Lo hacemos de forma genérica para enlaces evidentes.
            
            // 3. Promover TODOS LOS <a> con href de rutas validas a <Link> para SPA real.
            content = content.replace(/<a ([^>]*?)href="(\/modulo\/[^"]*?)"([^>]*?)>([\s\S]*?)<\/a>/g, '<Link $1href="$2"$3>$4</Link>');
            content = content.replace(/<a href="(\/modulo\/[^"]*?)"([^>]*?)>([\s\S]*?)<\/a>/g, '<Link href="$1"$2>$3</Link>');

            fs.writeFileSync(fullPath, content, 'utf8');
        }
    });
}

console.log("Inyectando circuitos de interconexión en el sistema...");
walkAndLink(targetDir);
console.log("¡Todo el ERP fue Interconectado sin eliminar nada!");
