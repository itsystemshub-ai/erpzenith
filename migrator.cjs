const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\ET\\Documents\\GitHub\\stitch_la_cima_repuestos';
const targetDir = 'C:\\Users\\ET\\Documents\\GitHub\\erpzenith\\resources\\js\\Pages\\ModulosLegacy';

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

function camelCase(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, c => c.toUpperCase()).replace(/\.html$/i, '');
}

function processHtmlToJsx(html) {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let content = bodyMatch ? bodyMatch[1] : html;

    content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    content = content.replace(/<!--[\s\S]*?-->/g, '{/* Comentario remanente */}');

    content = content.replace(/\bclass(\s*)=\s*"/g, 'className="');
    content = content.replace(/\bfor(\s*)=\s*"/g, 'htmlFor="');
    content = content.replace(/\bstyle\s*=\s*(['"])(.*?)\1/g, ''); 

    content = content.replace(/<(img[^\/>]*?)>/gi, '<$1 />');
    content = content.replace(/<(input[^\/>]*?)>/gi, '<$1 />');
    content = content.replace(/<(hr[^\/>]*?)>/gi, '<hr />');
    content = content.replace(/<(br[^\/>]*?)>/gi, '<br />');

    content = content.replace(/xmlns:xlink/g, 'xmlnsXlink');
    content = content.replace(/xml:space/g, 'xmlSpace');

    return content;
}

let totalMigrated = 0;

function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);

    files.forEach(file => {
        const fullPath = path.join(currentPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (file.endsWith('.html')) {
            const relativePath = path.relative(sourceDir, currentPath);
            const relativeTargetDir = path.join(targetDir, relativePath);

            if (!fs.existsSync(relativeTargetDir)) {
                fs.mkdirSync(relativeTargetDir, { recursive: true });
            }

            // CORRECCIÓN CRÍTICA: Si el archivo se llama "code.html", usamos el nombre de la carpeta padre
            let baseName = file;
            if (file.toLowerCase() === 'code.html') {
                baseName = path.basename(currentPath) + '.html';
            }

            const htmlContent = fs.readFileSync(fullPath, 'utf8');
            const jsxContent = processHtmlToJsx(htmlContent);
            
            const componentName = camelCase(baseName).replace(/[^a-zA-Z0-9]/g, '');
            const finalJsx = `import React from 'react';\nimport { Link } from '@inertiajs/react';\n\nexport default function ${componentName}() {\n    return (\n        <div className="legacy-view min-h-screen bg-surface">\n            ${jsxContent}\n        </div>\n    );\n};\n`;

            const outPath = path.join(relativeTargetDir, `${componentName}.jsx`);
            fs.writeFileSync(outPath, finalJsx, 'utf8');
            console.log(`[Migrado a JSX] ${relativePath}\\${componentName}.jsx`);
            totalMigrated++;
        }
    });
}

console.log("Iniciando Transpilación Autónoma Corregida de HTML a React (JSX)...");
walkDir(sourceDir);
console.log(`¡Éxito! Un total de ${totalMigrated} páginas fueron migradas.`);
