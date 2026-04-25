import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

function collectFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const fullPath = join(dir, name);
    if (statSync(fullPath).isDirectory()) {
      return collectFiles(fullPath);
    }
    return fullPath.endsWith('.tsx') ? [fullPath] : [];
  });
}

const files = [
  ...collectFiles('apps/web/app'),
  ...collectFiles('apps/web/components')
];

const errors = [];

for (const file of files) {
  const content = readFileSync(file, 'utf-8');
  const anchorWithoutHref = content.match(/<a\s(?![^>]*href=)[^>]*>/g);
  if (anchorWithoutHref !== null) {
    errors.push(`${file}: anchor without href`);
  }

  const disabledButtons = content.match(/<button[^>]*disabled/g);
  if (disabledButtons !== null) {
    errors.push(`${file}: disabled button found`);
  }
}

if (errors.length > 0) {
  console.error('Clickability check failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Clickability check passed for ${files.length} files.`);
