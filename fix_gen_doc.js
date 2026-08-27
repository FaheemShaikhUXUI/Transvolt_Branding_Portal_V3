const fs = require('fs');
const path = require('path');

const filePath = path.join('apps', 'web', 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const targetRegex = /<!-- Top Full-Width Card: General Document -->[\s\S]*?(?=<!-- 2-Column Grid for Company 1 to 6 Cards -->)/;

const replacement = `<!-- Top Full-Width Card: General Document -->
      <div class="asset-section-card">
        <div class="lh-card-header">
          <div class="lh-title-wrapper">
            <h3 class="lh-title">General Document</h3>
          </div>
        </div>

        <div class="lh-row-split">
          <!-- Header Asset -->
          <div class="lh-asset-box" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-page);">
            <div class="lh-asset-preview" style="height: 140px; background: var(--bg-input); display: flex; align-items: center; justify-content: center; cursor: pointer; border-bottom: 1px solid var(--border-color);" onclick="window.openLightbox('https://placehold.co/1200x800/png?text=Asset+Preview')">
              <img src="https://placehold.co/400x200/png?text=Asset+Preview" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt="Header (JPG - Image)" />
            </div>
            <div style="padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
              <span class="lh-asset-label" style="font-size: 0.85rem; font-weight: 600; color: var(--title-color); flex: 1;">Header (JPG - Image)</span>
              <div class="lh-asset-actions" style="display: flex; gap: 0.5rem;">
                <button class="action-btn btn-hold lh-hold-btn" title="Hold Asset" aria-label="Hold">
                  <svg class="svg-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
                </button>
                <button class="action-btn btn-replace lh-replace-btn" onclick="window.openEditDigitalAsset(this, 'Header (JPG - Image)')" title="Replace Asset" aria-label="Replace">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                </button>
                <button class="action-btn btn-info lh-preview-btn" data-title="General Document - Header" data-src="/Letterhead/Assets/General_Document_Header.svg" data-download="./Letterhead/Assets/General_Document_Header.jpg" title="Preview Asset" aria-label="Preview">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
                <a href="/Letterhead/Assets/General_Document_Header.jpg" download="General_Document_Header.jpg" class="action-btn btn-download lh-download-btn" data-asset="General Document - Header" title="Download Asset" aria-label="Download">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Footer Asset -->
          <div class="lh-asset-box" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-page);">
            <div class="lh-asset-preview" style="height: 140px; background: var(--bg-input); display: flex; align-items: center; justify-content: center; cursor: pointer; border-bottom: 1px solid var(--border-color);" onclick="window.openLightbox('https://placehold.co/1200x800/png?text=Asset+Preview')">
              <img src="https://placehold.co/400x200/png?text=Asset+Preview" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt="Footer (JPG - Image)" />
            </div>
            <div style="padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
              <span class="lh-asset-label" style="font-size: 0.85rem; font-weight: 600; color: var(--title-color); flex: 1;">Footer (JPG - Image)</span>
              <div class="lh-asset-actions" style="display: flex; gap: 0.5rem;">
                <button class="action-btn btn-hold lh-hold-btn" title="Hold Asset" aria-label="Hold">
                  <svg class="svg-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
                </button>
                <button class="action-btn btn-replace lh-replace-btn" onclick="window.openEditDigitalAsset(this, 'Footer (JPG - Image)')" title="Replace Asset" aria-label="Replace">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                </button>
                <button class="action-btn btn-info lh-preview-btn" data-title="General Document - Footer" data-src="/Letterhead/Assets/General_Document_Footer.svg" data-download="./Letterhead/Assets/General_Document_Footer.jpg" title="Preview Asset" aria-label="Preview">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
                <a href="/Letterhead/Assets/General_Document_Footer.jpg" download="General_Document_Footer.jpg" class="action-btn btn-download lh-download-btn" data-asset="General Document - Footer" title="Download Asset" aria-label="Download">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </a>
              </div>
            </div>
          </div>
        </div> <!-- End lh-row-split -->

        <!-- Word Document Asset -->
        <div class="lh-asset-box lh-box-full">
          <div class="word-file-meta">
            <div class="ms-word-icon" title="Microsoft Word Document (.docx)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#EBF3FC" stroke="#2B579A" stroke-width="1.5"/>
                <path d="M14 2V8H20" fill="#BCCEE7"/>
                <line x1="12" y1="13" x2="17" y2="13" stroke="#2B579A" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="12" y1="16" x2="17" y2="16" stroke="#2B579A" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="12" y1="19" x2="15" y2="19" stroke="#2B579A" stroke-width="1.5" stroke-linecap="round"/>
                <rect x="2" y="10" width="10" height="10" rx="2" fill="#2B579A"/>
                <text x="7" y="17.5" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="8px" text-anchor="middle">W</text>
              </svg>
            </div>
            <div class="word-file-texts">
              <span class="word-file-title">Word File</span>
              <span class="word-file-desc">MS Word Template (.docx)</span>
            </div>
          </div>
          <div class="lh-asset-actions">
            <button class="action-btn btn-hold lh-hold-btn" title="Hold Asset" aria-label="Hold">
              <svg class="svg-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
            </button>
            <button class="action-btn btn-replace lh-replace-btn" onclick="window.openEditDigitalAsset(this, 'Word File Template')" title="Replace Asset" aria-label="Replace">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
            </button>
            <a href="/Letterhead/Assets/General_Document.docx" download="General_Document.docx" class="action-btn btn-download lh-download-btn" data-asset="General Document - Word File" title="Download Asset" aria-label="Download">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </div>
      
      `;

if (targetRegex.test(content)) {
  content = content.replace(targetRegex, replacement);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Fixed General Document HTML successfully!');
} else {
  console.log('Regex did not match General Document section!');
}
