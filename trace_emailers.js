const fs = require('fs');
const path = require('path');

const filePath = path.join('apps', 'web', 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(filePath, 'utf-8');
content = content.replace(/<!--[\s\S]*?-->/g, '');

let lines = content.split('\n');
let divCount = 0;
let started = false;

for (let i = 1940; i < 2160; i++) {
  let line = lines[i] || '';
  if (line.includes('3) Emailer Templates')) {
    started = true;
  }
  
  if (started) {
    let opens = (line.match(/<div(\s|>)/g) || []).length;
    let closes = (line.match(/<\/div>/g) || []).length;
    
    divCount += opens;
    divCount -= closes;
    console.log(`Line ${i+1} [${opens} - ${closes} = ${divCount}]: ${line.trim()}`);
    
    if (line.includes('Business Card')) {
       break;
    }
  }
}
