const fs = require('fs');
const path = require('path');

const filePath = path.join('apps', 'web', 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const targetStr = `      </div>

      <!-- Business Card -->`;
const replaceStr = `      </div>
    </div>

      <!-- Business Card -->`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replaceStr);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Added the missing 7th div');
} else {
  console.log('Target string not found!');
}
