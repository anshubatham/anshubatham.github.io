import { readFileSync, existsSync } from 'node:fs';

const files = ['public/index.html', 'public/privacy.html'];
let failures = 0;
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    const ref = match[1];
    if (/^(https?:|mailto:)/.test(ref)) continue;
    const path = new URL(ref, `file://${process.cwd()}/${file}`).pathname;
    if (!existsSync(path)) { console.error(`${file}: missing ${ref}`); failures++; }
  }
}
if (failures) process.exitCode = 1;
else console.log(`Validated ${files.length} HTML files: local links resolve.`);
