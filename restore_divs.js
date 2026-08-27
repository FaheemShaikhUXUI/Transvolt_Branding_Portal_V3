const fs = require('fs');
const path = require('path');

const filePath = path.join('apps', 'web', 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const target = `                  </a>
                </div>
        <div class="guidelines-description">`;

const replacement = `                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Official Presentation Guidelines Section -->
    <section id="tab-presentation" class="tab-pane hidden-pane">
      
      <!-- Intro Section -->
      <div class="guidelines-intro">
        <h2 class="section-title">Presentation (PowerPoint) Guidelines</h2>
        <div class="guidelines-description">`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Restored deleted lines and fixed div count!');
} else {
  console.log('Target not found!');
}
