const fs = require('fs');
const path = require('path');

const filePath = path.join('apps', 'web', 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Fix 1: Undo JS Template Literal
const badJs = `          groupCard.innerHTML = \`
            <div class="lh-card-header">
          <div class="lh-title-wrapper">
            <h3 class="lh-title">General Document</h3>
          </div>
          <a href="/Letterhead/Assets/General_Document_Package.zip" download="General_Document_Package.zip" class="btn-lh-all" data-asset="General Document Package">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span>All</span>
          </a>
        </div>

        <div class="lh-row-split">
          <div class="lh-asset-box" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-page);">
            <div class="lh-asset-preview" style="height: 140px; background: var(--bg-input); display: flex; align-items: center; justify-content: center; cursor: pointer; border-bottom: 1px solid var(--border-color);" onclick="window.openLightbox('https://placehold.co/1200x800/png?text=Asset+Preview')">
              <img src="https://placehold.co/400x200/png?text=Asset+Preview" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt="Header (JPG - Image)" />
            </div>
            <div style="padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
              <span class="lh-asset-label" style="font-size: 0.85rem; font-weight: 600; color: var(--title-color); flex: 1;">Header (JPG - Image)</span>
              <div class="lh-asset-actions" style="display: flex; gap: 0.5rem;">
                
              <button class="action-btn btn-hold lh-hold-btn" title="Hold Asset" aria-label="Hold">um}) \${targetGroup}</h3>
              </div>
            </div>
            <div class="lh-row-split"></div>
          \`;`;

const goodJs = `          groupCard.innerHTML = \`
            <div class="lh-card-header">
              <div class="lh-title-wrapper">
                <h3 class="lh-title">\${num}) \${targetGroup}</h3>
              </div>
            </div>
            <div class="lh-row-split"></div>
          \`;`;

content = content.replace(badJs, goodJs);

// Fix 2: Restore missing HTML block
const badHtml = `        <div class="lh-card-header">
          <div class="lh-title-wrapper">
            <h3 class="lh-title">General Document</h3>
              <div class="lh-asset-actions" style="display: flex; gap: 0.5rem;">
                
              <button class="action-btn btn-hold lh-hold-btn" title="Hold Asset" aria-label="Hold">`;

const goodHtml = `        <div class="lh-card-header">
          <div class="lh-title-wrapper">
            <h3 class="lh-title">General Document</h3>
          </div>
          <a href="/Letterhead/Assets/General_Document_Package.zip" download="General_Document_Package.zip" class="btn-lh-all" data-asset="General Document Package">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span>All</span>
          </a>
        </div>

        <div class="lh-row-split">
          <div class="lh-asset-box" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-page);">
            <div class="lh-asset-preview" style="height: 140px; background: var(--bg-input); display: flex; align-items: center; justify-content: center; cursor: pointer; border-bottom: 1px solid var(--border-color);" onclick="window.openLightbox('https://placehold.co/1200x800/png?text=Asset+Preview')">
              <img src="https://placehold.co/400x200/png?text=Asset+Preview" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt="Header (JPG - Image)" />
            </div>
            <div style="padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
              <span class="lh-asset-label" style="font-size: 0.85rem; font-weight: 600; color: var(--title-color); flex: 1;">Header (JPG - Image)</span>
              <div class="lh-asset-actions" style="display: flex; gap: 0.5rem;">
                
              <button class="action-btn btn-hold lh-hold-btn" title="Hold Asset" aria-label="Hold">`;

content = content.replace(badHtml, goodHtml);

// Fix 3: Remove the extra </div> on line 610 as found by the agent
// The structure was:
//               </a>
//             
//               </div>
//             </div>
//           </div>
//         </div> <!-- Extra close -->
// 
//           <div class="lh-asset-box" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-page);">
// Let's replace that specific block.

const extraDivBlock = `              </a>
            
              </div>
            </div>
          </div>
        </div>

          <div class="lh-asset-box" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-page);">`;

const correctDivBlock = `              </a>
            
              </div>
            </div>
          </div>

          <div class="lh-asset-box" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-page);">`;

content = content.replace(extraDivBlock, correctDivBlock);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixes applied successfully.');
