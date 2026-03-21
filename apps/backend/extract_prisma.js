const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../../../erp-cerebro-sistema');
const schemaPath = path.join(__dirname, 'prisma/schema.prisma');

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, filesList);
    } else if (fullPath.endsWith('.md')) {
      filesList.push(fullPath);
    }
  }
  return filesList;
}

const mdFiles = getFiles(docsDir);

let allModels = [];

for (const file of mdFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const prismaRegex = /```prisma\n([\s\S]*?)```/g;
  let match;
  while ((match = prismaRegex.exec(content)) !== null) {
    allModels.push(match[1]);
  }
}

// extract individual models and enums
const modelRegex = /(?:model|enum)\s+(\w+)\s+{[\s\S]*?}/g;
const extractedBlocks = new Map();

for (const block of allModels) {
  let match;
  while ((match = modelRegex.exec(block)) !== null) {
    extractedBlocks.set(match[1], match[0]);
  }
}

// Read current schema
let currentSchema = fs.readFileSync(schemaPath, 'utf8');
const existingModels = new Set();
let match;
while ((match = modelRegex.exec(currentSchema)) !== null) {
  existingModels.add(match[1]);
}

// Append missing
let appendText = '\n// --- NEW MODELS EXTRACTED FROM DOCS ---\n';
let addedCount = 0;
for (const [name, block] of extractedBlocks.entries()) {
  if (!existingModels.has(name)) {
    appendText += '\n' + block + '\n';
    addedCount++;
  }
}

console.log(`Adding ${addedCount} new models/enums.`);

if (addedCount > 0) {
  fs.appendFileSync(schemaPath, appendText);
  console.log('Appended to schema.prisma');
} else {
  console.log('No new models to add.');
}
