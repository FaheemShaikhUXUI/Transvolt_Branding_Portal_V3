const fs = require('fs');
const path = require('path');

const filePath = path.join('apps', 'web', 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

// Find the line that has '</a>'
// Then '</div>'
// Then '<div class="guidelines-description">'

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('</a>') && lines[i+1].includes('</div>') && lines[i+2].includes('<div class="guidelines-description">')) {
    // Insert the missing divs BEFORE the <div class="guidelines-description">
    const newContent = [
      '              </div>',
      '            </div>',
      '          </div>',
      '        </div>',
      '      </div>',
      '    </section>',
      '',
      '    <!-- Official Presentation Guidelines Section -->',
      '    <section id="tab-presentation" class="tab-pane hidden-pane">',
      '      ',
      '      <!-- Intro Section -->',
      '      <div class="guidelines-intro">',
      '        <h2 class="section-title">Presentation (PowerPoint) Guidelines</h2>'
    ];
    lines.splice(i+2, 0, ...newContent);
    fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
    console.log('Restored deleted lines!');
    break;
  }
}
