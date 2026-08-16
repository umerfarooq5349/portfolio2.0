const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'stitch-website', 'html-source');
const targetDir = path.join(__dirname, 'stitch-portfolio', 'app');

function convertHtmlToJsx(html) {
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return '';
  let jsx = bodyMatch[1];

  // Remove script tags at the bottom
  jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Convert class to className
  jsx = jsx.replace(/class="/g, 'className="');
  
  // Convert for to htmlFor
  jsx = jsx.replace(/for="/g, 'htmlFor="');

  // Convert inline styles
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
    const styleObj = styles.split(';').reduce((acc, style) => {
      if (!style.trim()) return acc;
      let [key, value] = style.split(':');
      if (!key || !value) return acc;
      key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      value = value.trim();
      acc.push(`${key}: '${value}'`);
      return acc;
    }, []);
    return `style={{ ${styleObj.join(', ')} }}`;
  });

  // Self close tags
  const tagsToClose = ['img', 'br', 'hr', 'input', 'meta', 'link'];
  tagsToClose.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
    jsx = jsx.replace(regex, `<${tag}$1 />`);
  });

  // Convert HTML comments to JSX comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  return jsx;
}

const files = fs.readdirSync(sourceDir);
files.forEach(file => {
  if (file.endsWith('.html')) {
    const name = file.replace('.html', '');
    const html = fs.readFileSync(path.join(sourceDir, file), 'utf8');
    const jsxContent = convertHtmlToJsx(html);
    
    let pageCode = `export default function ${name.charAt(0).toUpperCase() + name.slice(1)}Page() {\n  return (\n    <>\n${jsxContent}\n    </>\n  );\n}\n`;
    
    // Write to app directory
    let routeDir = targetDir;
    if (name !== 'home') {
      routeDir = path.join(targetDir, name);
      if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'page.tsx'), pageCode);
    console.log(`Generated page for ${name}`);
  }
});
