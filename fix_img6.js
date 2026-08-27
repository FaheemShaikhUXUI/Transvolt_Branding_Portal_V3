const fs = require('fs');
const path = require('path');

const filePath = path.join('apps', 'web', 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const brokenBlock = `              <button class="action-btn btn-info lh-preview-btn" title="Preview Asset" aria-label="Preview">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
        </div>
        <div class="lh-row-split">
          <div class="lh-asset-box" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-page);">
            <div class="lh-asset-preview" style="height: 140px; background: var(--bg-input); display: flex; align-items: center; justify-content: center; cursor: pointer; border-bottom: 1px solid var(--border-color);" onclick="window.openLightbox('https://placehold.co/1200x800/png?text=Asset+Preview')">
              <img src="https://placehold.co/400x200/png?text=Asset+Preview" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt="Business Card (90 x 50 mm)" />`;

const fixedBlock = `              <button class="action-btn btn-info lh-preview-btn" title="Preview Asset" aria-label="Preview">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
              <div style="position: relative; display: inline-block;">
                <button class="action-btn btn-download lh-download-btn" onclick="let m = this.nextElementSibling; m.style.display = m.style.display === 'flex' ? 'none' : 'flex';" onblur="let m = this.nextElementSibling; setTimeout(() => m.style.display = 'none', 200);" title="Download Asset" aria-label="Download">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </button>
                <div class="dl-dropdown-menu" style="display: none; position: absolute; bottom: 120%; right: 0; background: var(--bg-page); border: 1px solid var(--border-color); border-radius: 4px; padding: 4px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); z-index: 100; min-width: 80px; flex-direction: column; gap: 2px;">
                  <a href="#" download="Emailer_Quote.pdf" style="padding: 6px 12px; font-size: 0.75rem; text-decoration: none; color: var(--title-color); border-radius: 4px; transition: background 0.2s;" onmouseover="this.style.background='var(--color-brand-green)'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='var(--title-color)';">PDF</a>
                  <a href="#" download="Emailer_Quote.jpg" style="padding: 6px 12px; font-size: 0.75rem; text-decoration: none; color: var(--title-color); border-radius: 4px; transition: background 0.2s;" onmouseover="this.style.background='var(--color-brand-green)'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='var(--title-color)';">JPG</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Business Card -->
      <div class="asset-section-card" style="margin-top: 1.5rem;">
        <div class="lh-card-header">
          <div class="lh-title-wrapper">
            <h3 class="lh-title">1) Business Card</h3>
          </div>
        </div>
        <div class="lh-row-split">
          <div class="lh-asset-box" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-page);">
            <div class="lh-asset-preview" style="height: 140px; background: var(--bg-input); display: flex; align-items: center; justify-content: center; cursor: pointer; border-bottom: 1px solid var(--border-color);" onclick="window.openLightbox('https://placehold.co/1200x800/png?text=Asset+Preview')">
              <img src="https://placehold.co/400x200/png?text=Asset+Preview" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt="Business Card (90 x 50 mm)" />`;

if (content.includes(brokenBlock)) {
  content = content.replace(brokenBlock, fixedBlock);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Fixed Image 6 properly!');
} else {
  console.log('Not found! Let me see what is actually there');
  // fallback if Business card was already modified by my previous scripts
  // I need to just insert the missing divs and dropdown before the <div class="lh-row-split"> 
  // that precedes Business Card.
}
