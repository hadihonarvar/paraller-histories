const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/data/timeline-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix missing commas: "      }\n      {" -> "      },\n      {"
const pattern = /^(      \})\n(      \{)$/gm;
const matches = content.match(pattern);
console.log(`Found ${matches ? matches.length : 0} instances of missing commas`);

content = content.replace(pattern, '$1,\n$2');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed all missing commas.');
