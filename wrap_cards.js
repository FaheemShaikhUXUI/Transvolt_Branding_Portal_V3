const fs = require('fs');
const path = require('path');

const filePath = path.join('apps', 'web', 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// The goal is to wrap Business Card and ID Card in a flex container.
// First, find "<!-- Business Card -->"
const startBC = content.indexOf('<!-- Business Card -->');
const startID = content.indexOf('<!-- ID Card -->');

if (startBC !== -1 && startID !== -1) {
    // Find the end of ID Card (it ends right before <!-- Official Vehicle Branding Section --> or </section>)
    const endID = content.indexOf('</section>', startID);
    
    if (endID !== -1) {
        let replacementBlock = content.substring(startBC, endID);
        
        // 1. Change style="margin-top: 1.5rem;" to style="margin-top: 0; flex: 1; min-width: 300px;" for both cards
        replacementBlock = replacementBlock.replace(
            /<div class="asset-section-card" style="margin-top: 1.5rem;">/g, 
            '<div class="asset-section-card" style="flex: 1; min-width: 300px; margin-top: 0;">'
        );

        // 2. Wrap everything in a flex container
        replacementBlock = `<div style="display: flex; gap: 1.5rem; margin-top: 1.5rem; flex-wrap: wrap;">\n${replacementBlock}      </div>\n    `;
        
        const newContent = content.substring(0, startBC) + replacementBlock + content.substring(endID);
        
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log('Successfully wrapped Business Card and ID Card side by side!');
    } else {
        console.log('Could not find the end of ID Card section.');
    }
} else {
    console.log('Could not find Business Card or ID Card markers.');
}
