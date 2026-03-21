const { execSync } = require('child_process');
const fs = require('fs');

try {
  execSync('npx prisma validate', { stdio: 'pipe' });
  console.log('No errors!');
} catch (error) {
  const output = error.stdout ? error.stdout.toString() : error.stderr.toString();
  const lines = output.split('\n');

  const additions = {};

  const regex = /The relation field `(\w+)` on model `(\w+)` is missing an opposite relation field on the model `(\w+)`/g;
  let match;
  while ((match = regex.exec(output)) !== null) {
    const fieldName = match[1];
    const sourceModel = match[2];
    const targetModel = match[3];

    if (!additions[targetModel]) additions[targetModel] = [];
    
    // Create a pluralized or unique name for the reverse relation
    // e.g., session_user -> sessions
    let reverseName = sourceModel.charAt(0).toLowerCase() + sourceModel.slice(1);
    // if there's already one, make it unique
    if (additions[targetModel].some(a => a.startsWith(reverseName))) {
        reverseName = reverseName + '_' + fieldName;
    }

    additions[targetModel].push(`  ${reverseName} ${sourceModel}[] @relation("${sourceModel}To${targetModel}_${fieldName}")`);
    
    // We also need to add the relation name to the source model to avoid ambiguous relations
    console.log(`Need to map ${sourceModel}.${fieldName} to ${targetModel}.${reverseName}`);
  }

  // Instead of complex parsing, let's just use Prisma's logic. If we add the fields without relation names, Prisma format will complain if ambiguous.
  // Actually, wait: for ambiguous relations, we MUST specify a relation name on both sides.
  // Let's just fix it by script: Read the file, for each targetModel, find the end of the model block and append.
  let schema = fs.readFileSync('prisma/schema.prisma', 'utf8');

  for (const [targetModel, fields] of Object.entries(additions)) {
    const modelRegex = new RegExp(`(model\\s+${targetModel}\\s+{[\\s\\S]*?)(})`);
    schema = schema.replace(modelRegex, (match, p1, p2) => {
      // For simple fixing without relation names first (prisma format might fix them or we fix manually later)
      const newFields = fields.map(f => f.split('@')[0].replace(/_(\w+)/, '') + '[]').join('\n');
      return p1 + '\n  // Auto-added opposite relations\n' + newFields + '\n' + p2;
    });
  }

  // But we have a problem: If we just append the array fields, Prisma might still complain about ambiguous relations. 
  // We can just add "modelName modelName[]" and see.
  
  // Let's use a simpler approach. Add an array field to the target model.
  const fieldsAdded = {};
  for (const [targetModel, fieldsStr] of Object.entries(additions)) {
       const modelRegex = new RegExp(`(model\\s+${targetModel}\\s+{[\\s\\S]*?)(})`);
       let addedStr = '';
       fieldsStr.forEach(f => {
           let propName = f.match(/ (\w+) /)[1] + "s";
           // avoid duplicate prop names
           if(fieldsAdded[targetModel + propName]) {
               propName += "Other";
           }
           fieldsAdded[targetModel + propName] = true;
           addedStr += `  ${propName} ${f.match(/ (\w+)\[\]/)[1]}[]\n`;
       });
       schema = schema.replace(modelRegex, (m, p1, p2) => p1 + `\n  // Auto-added relations\n` + addedStr + p2);
  }

  fs.writeFileSync('prisma/schema.prisma', schema);
  console.log('Added opposite relations. Run npx prisma format again.');
}
