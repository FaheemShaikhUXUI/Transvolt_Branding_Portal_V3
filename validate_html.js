const fs = require('fs');
const path = require('path');

const filePath = path.join('apps', 'web', 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Strip out HTML comments
content = content.replace(/<!--[\s\S]*?-->/g, '');

let lines = content.split('\n');
let divStack = [];
let sectionStack = [];
let issues = [];

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // Find all <div... and </div>
  let divMatch;
  let re = /<div(\s|>)|<\/div>/g;
  while ((divMatch = re.exec(line)) !== null) {
    if (divMatch[0].startsWith('<div')) {
      divStack.push(`line ${i+1}`);
    } else {
      if (divStack.length === 0) {
        issues.push(`Extra </div> at line ${i+1}`);
      } else {
        divStack.pop();
      }
    }
  }
}

console.log(`Final div balance: ${divStack.length}`);
if (divStack.length > 0) {
  console.log(`Unclosed divs opened at:`);
  console.log(divStack.slice(-10).join('\\n'));
}
console.log(`Issues found:\n${issues.join('\n')}`);
