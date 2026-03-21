const fs = require('fs');

let schema = fs.readFileSync('prisma/schema.prisma', 'utf8');

// Parse all models and their fields
const modelRegex = /model\s+(\w+)\s+{([\s\S]*?)}/g;
const models = {};
let match;

while ((match = modelRegex.exec(schema)) !== null) {
  const modelName = match[1];
  const body = match[2];
  models[modelName] = { body, fields: [] };
  
  // Find relations
  const fieldRegex = /^\s*(\w+)\s+(\w+)(?:\?)?\s+(@relation\([^)]+\))/gm;
  let fieldMatch;
  while ((fieldMatch = fieldRegex.exec(body)) !== null) {
    if (!fieldMatch[3].includes('name:')) {
        models[modelName].fields.push({
        fieldName: fieldMatch[1],
        targetModel: fieldMatch[2],
        relationStr: fieldMatch[3]
        });
    }
  }
}

// Check which models need opposite relations
const additions = {};

for (const [sourceModel, info] of Object.entries(models)) {
  for (const rel of info.fields) {
    const targetModel = rel.targetModel;
    if (models[targetModel] && targetModel !== sourceModel) { // ignoring self relations for simplicity
      // Check if targetModel already has an array of sourceModel
      const hasOpposite = new RegExp(`\\b${sourceModel}\\[\\]`).test(models[targetModel].body);
      if (!hasOpposite) {
        if (!additions[targetModel]) additions[targetModel] = [];
        
        // Generate a name (camelCase sourceModel + 's')
        let propName = sourceModel.charAt(0).toLowerCase() + sourceModel.slice(1) + 's';
        
        // Deduplicate
        if (additions[targetModel].some(a => a.name === propName)) {
            propName = propName + '_' + rel.fieldName;
        }

        additions[targetModel].push({
            name: propName,
            type: sourceModel,
            sourceField: rel.fieldName
        });
      }
    }
  }
}

// Add the opposite relations to the models in the schema
for (const [targetModel, rels] of Object.entries(additions)) {
   const modelRegex = new RegExp(`(model\\s+${targetModel}\\s+{[\\s\\S]*?)(})`);
   let addedStr = '';
   
   // Group relations by type to detect ambiguities
   const typeCounts = {};
   for(const r of rels) typeCounts[r.type] = (typeCounts[r.type] || 0) + 1;
   
   rels.forEach(rel => {
       // If ambiguous, we need to add @relation("RelationName") to BOTH sides.
       // But Prisma format usually complains if we don't.
       // To do this simply, if typeCount > 1, we must modify the source side too.
       if (typeCounts[rel.type] > 1) {
           const relName = `${rel.type}To${targetModel}_${rel.sourceField}`;
           addedStr += `  ${rel.name} ${rel.type}[] @relation("${relName}")\n`;
           
           // Also modify source model's relation to include the name
           const sourceRegex = new RegExp(`(model\\s+${rel.type}\\s+{[\\s\\S]*?${rel.sourceField}\\s+${targetModel}\\??\\s+@relation\\()`);
           schema = schema.replace(sourceRegex, `$1"${relName}", `);
       } else {
           addedStr += `  ${rel.name} ${rel.type}[]\n`;
       }
   });
   
   schema = schema.replace(modelRegex, (m, p1, p2) => p1 + `\n  // Auto-added relations\n` + addedStr + p2);
}

fs.writeFileSync('prisma/schema.prisma', schema);
console.log('Relations fixed!');
