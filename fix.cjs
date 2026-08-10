const fs = require('fs');
const files = [
  'src/components/WorkProcess/WorkProcess.jsx',
  'src/components/Services/Services.jsx',
  'src/components/WhyWorkWithMe/WhyWorkWithMe.jsx',
  'src/components/Projects/Projects.jsx',
  'src/components/Skills/Skills.jsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/\\\`\\\$\{(.*?)\}s\\\`/g, "`\\${$1}s`");
  fs.writeFileSync(f, content);
});
