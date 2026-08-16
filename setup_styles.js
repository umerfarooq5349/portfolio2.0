const fs = require('fs');
const path = require('path');

const htmlContent = fs.readFileSync(path.join(__dirname, 'stitch-website', 'html-source', 'home.html'), 'utf8');

// Extract tailwind config
const twConfigMatch = htmlContent.match(/tailwind\.config\s*=\s*({[\s\S]*?})\s*<\/script>/);
let colors = {};
let fonts = {};
if (twConfigMatch) {
  try {
    // Basic extraction
    const colorMatch = twConfigMatch[1].match(/"colors":\s*({[\s\S]*?})/);
    if (colorMatch) {
      colors = JSON.parse(colorMatch[1]);
    }
  } catch(e) { console.error(e); }
}

// Extract styles
const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/);
const customCss = styleMatch ? styleMatch[1] : '';

// Create globals.css
let globalsCss = `@import "tailwindcss";\n\n@theme inline {\n`;
for (const [key, value] of Object.entries(colors)) {
  globalsCss += `  --color-${key}: ${value};\n`;
}
globalsCss += `  --font-display-lg: "Playfair Display", serif;\n`;
globalsCss += `  --font-body-lg: "Inter", sans-serif;\n`;
globalsCss += `  --font-button: "Inter", sans-serif;\n`;
globalsCss += `  --font-headline-xl-mobile: "Playfair Display", serif;\n`;
globalsCss += `  --font-headline-xl: "Playfair Display", serif;\n`;
globalsCss += `  --font-display-lg-mobile: "Playfair Display", serif;\n`;
globalsCss += `  --font-headline-md: "Playfair Display", serif;\n`;
globalsCss += `  --font-body-md: "Inter", sans-serif;\n`;
globalsCss += `  --font-label-caps: "Inter", sans-serif;\n`;

globalsCss += `\n  --spacing-container-max: 1440px;\n`;
globalsCss += `  --spacing-stack-sm: 8px;\n`;
globalsCss += `  --spacing-gutter: 24px;\n`;
globalsCss += `  --spacing-stack-md: 16px;\n`;
globalsCss += `  --spacing-section-gap: 120px;\n`;
globalsCss += `  --spacing-margin-mobile: 24px;\n`;
globalsCss += `  --spacing-margin-desktop: 80px;\n`;
globalsCss += `  --spacing-stack-lg: 32px;\n`;
globalsCss += `}\n\n`;

globalsCss += customCss;

// Write globals.css
const targetPath = path.join(__dirname, 'stitch-portfolio', 'app', 'globals.css');
if (fs.existsSync(path.dirname(targetPath))) {
  fs.writeFileSync(targetPath, globalsCss);
  console.log("Wrote globals.css");
} else {
  console.log("App folder not ready yet");
}
