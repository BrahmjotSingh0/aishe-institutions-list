const fs = require('fs');
const path = require('path');

const files = [
  'colleges.json',
  'universities.json',
  'standalone.json',
  'rnd_institutes.json',
  'vidyalakshmi.json'
];

let combined = [];

files.forEach((file) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'output', file), 'utf-8'));
  combined = combined.concat(data);
});

fs.writeFileSync('institutions.json', JSON.stringify(combined, null, 2));
console.log(`✅ Merged ${files.length} files into institutions.json (${combined.length} total entries)`);
