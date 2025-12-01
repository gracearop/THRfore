// listFiles.js
const fs = require("fs");
const path = require("path");

function listDir(dir, prefix = "") {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    console.log(prefix + "📁 " + file);

    if (stats.isDirectory()) {
      listDir(fullPath, prefix + "  ");
    }
  });
}

// Run on your current project folder
listDir(__dirname);
