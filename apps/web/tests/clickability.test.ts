import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

function collectFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const fullPath = join(dir, name);
    if (statSync(fullPath).isDirectory()) {
      return collectFiles(fullPath);
    }
    return fullPath.endsWith('.tsx') ? [fullPath] : [];
  });
}

describe('clickability contracts', () => {
  it('all anchor tags have href and no disabled buttons exist', () => {
    const files = collectFiles(join(process.cwd(), 'app')).concat(collectFiles(join(process.cwd(), 'components')));

    for (const file of files) {
      const content = readFileSync(file, 'utf-8');
      const anchorWithoutHref = content.match(/<a\s(?![^>]*href=)[^>]*>/g);
      expect(anchorWithoutHref, `anchor without href in ${file}`).toBeNull();

      const disabledButtons = content.match(/<button[^>]*disabled/g);
      expect(disabledButtons, `disabled button in ${file}`).toBeNull();
    }
  });
});
