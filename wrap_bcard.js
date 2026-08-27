const fs = require('fs');
const path = require('path');

const filePath = path.join('apps', 'web', 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// We need to find the <div class="lh-row-split"> right before Business Card
// and replace it with closing divs for Emailers and opening divs for Business Card.

const target = `        </div>
        <div class="lh-row-split">
          <div class="lh-asset-box" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-page);">
            <div class="lh-asset-preview" style="height: 140px; background: var(--bg-input); display: flex; align-items: center; justify-content: center; cursor: pointer; border-bottom: 1px solid var(--border-color);" onclick="window.openLightbox('https://placehold.co/1200x800/png?text=Asset+Preview')">
              <img src="https://placehold.co/400x200/png?text=Asset+Preview" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt="Business Card (90 x 50 mm)" />`;

const replacement = `        </div>
      </div>
      </div>

      <!-- Business Card -->
      <div class="asset-section-card" style="margin-top: 1.5rem;">
        <div class="lh-card-header">
          <div class="lh-title-wrapper">
            <h3 class="lh-title">Business Card</h3>
          </div>
        </div>
        <div class="lh-row-split">
          <div class="lh-asset-box" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-page);">
            <div class="lh-asset-preview" style="height: 140px; background: var(--bg-input); display: flex; align-items: center; justify-content: center; cursor: pointer; border-bottom: 1px solid var(--border-color);" onclick="window.openLightbox('https://placehold.co/1200x800/png?text=Asset+Preview')">
              <img src="https://placehold.co/400x200/png?text=Asset+Preview" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt="Business Card (90 x 50 mm)" />`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Fixed Business Card wrapper successfully!');
} else {
  console.log('Target not found!');
}
