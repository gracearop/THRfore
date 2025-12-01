const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "src");

// ✅ Regex for <img src="/assets/..."> and <img ... image="/assets/...">
const jsxRegex = /(src|image)\s*=\s*["'](\/assets\/[^"']+)["']/g;

// ✅ Regex for JS objects like imgSrc: "/assets/..." or image: "/assets/..."
const objRegex = /(imgSrc|image)\s*:\s*["'](\/assets\/[^"']+)["']/g;

function fixFile(filePath) {
  let code = fs.readFileSync(filePath, "utf8");

  // Fix JSX <img> tags
  code = code.replace(jsxRegex, (match, attr, assetPath) => {
    return `${attr}={process.env.PUBLIC_URL + "${assetPath}"}`;
  });

  // Fix JS object properties
  code = code.replace(objRegex, (match, key, assetPath) => {
    return `${key}: process.env.PUBLIC_URL + "${assetPath}"`;
  });

  fs.writeFileSync(filePath, code, "utf8");
  console.log(`✅ Fixed: ${filePath}`);
}

function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith(".js") || fullPath.endsWith(".jsx")) {
      fixFile(fullPath);
    }
  });
}

walk(SRC_DIR);
console.log("🎉 All asset paths fixed (JSX + JS objects)!");
