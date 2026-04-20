const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\ET\\Documents\\GitHub\\erpzenith\\resources\\js\\revisar\\tienda';
const targetDir = 'C:\\Users\\ET\\Documents\\GitHub\\erpzenith\\resources\\js\\Pages\\Tienda';

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

function camelCase(str) {
    return str.split(/[-_]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('').replace(/\.blade\.php$/i, '').replace(/\.html$/i, '');
}

function processBladeToJsx(html) {
    // Extraer contenido de la sección 'content' si existe, si no usar el body, si no usar todo
    let content = html;
    const sectionMatch = html.match(/@section\('content'\)([\s\S]*?)@endsection/i);
    if (sectionMatch) {
        content = sectionMatch[1];
    } else {
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        if (bodyMatch) {
            content = bodyMatch[1];
        }
    }

    // Remover bloques de scripts y links css ya que se manejan diferente en React
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
    content = content.replace(/onclick/gi, 'onClick');
    
    // Replace Blade URL syntax {{ url(...) }}
    content = content.replace(/\{\{\s*url\(\s*(['"])(.*?)\1\s*(?:\.\s*(['"])(.*?)\3\s*)?\)\s*\}\}/g, function(match, p1, p2, p3, p4) {
        return (p2 || '') + (p4 || '');
    });

    // Basic Blade variable replacement {{ $var }} -> {var}
    content = content.replace(/\{\{\s*\$([a-zA-Z0-9_]+)\s*\}\}/g, '{$1}');

    return content;
}

let totalMigrated = 0;

function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);

    files.forEach(file => {
        const fullPath = path.join(currentPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (file.endsWith('.blade.php') || file.endsWith('.html')) {
            const relativePath = path.relative(sourceDir, currentPath);
            const relativeTargetDir = path.join(targetDir, relativePath);

            if (!fs.existsSync(relativeTargetDir)) {
                fs.mkdirSync(relativeTargetDir, { recursive: true });
            }

            const htmlContent = fs.readFileSync(fullPath, 'utf8');
            const jsxContent = processBladeToJsx(htmlContent);
            
            // Extraer título si existe
            const titleMatch = htmlContent.match(/@section\('title',\s*['"](.*?)['"]\)/i);
            const pageTitle = titleMatch ? titleMatch[1] : '';

            const componentName = camelCase(file).replace(/[^a-zA-Z0-9]/g, '');
            const finalJsx = `import React from 'react';
import { Head, Link } from '@inertiajs/react';
import EcommerceLayout from '../../Layouts/EcommerceLayout';

export default function ${componentName}(props) {
    const { auth } = props;

    // Nota: Las variables de Blade capturadas como {variable} deben ser pasadas como props
    return (
        <EcommerceLayout title="${pageTitle}">
            <div className="tienda-view min-h-screen bg-surface">
                ${jsxContent}
            </div>
        </EcommerceLayout>
    );
};
`;

            const outPath = path.join(relativeTargetDir, `${componentName}.jsx`);
            fs.writeFileSync(outPath, finalJsx, 'utf8');
            console.log(`[Migrado a JSX] ${relativePath}\\${componentName}.jsx`);
            totalMigrated++;
        }
    });
}

console.log("Iniciando Transpilación de Tienda...");
walkDir(sourceDir);
console.log(`¡Éxito! Un total de ${totalMigrated} páginas fueron migradas.`);
