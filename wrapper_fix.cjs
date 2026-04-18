const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\ET\\Documents\\GitHub\\erpzenith\\resources\\js\\Pages\\ModulosLegacy';

const oldWrapper = '<div className="legacy-view min-h-screen bg-surface">';
const newWrapper = '<div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">';

let modifiedCount = 0;

function walkDirAndPatch(currentPath) {
    if (!fs.existsSync(currentPath)) return;
    
    const files = fs.readdirSync(currentPath);

    files.forEach(file => {
        const fullPath = path.join(currentPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDirAndPatch(fullPath);
        } else if (file.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes(oldWrapper)) {
                content = content.replace(oldWrapper, newWrapper);
                fs.writeFileSync(fullPath, content, 'utf8');
                modifiedCount++;
            }
        }
    });
}

console.log("Iniciando inyección masiva de estilos de Body (Tailwind)...");
walkDirAndPatch(targetDir);
console.log(`¡Operación completada! Se han parcheado ${modifiedCount} componentes JSX de manera exitosa.`);
