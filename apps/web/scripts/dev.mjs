import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export function mapDevArgs(rawArgs) {
  const nextArgs = ['dev'];

  for (let index = 0; index < rawArgs.length; index += 1) {
    const arg = rawArgs[index];

    if (arg === '--host') {
      const value = rawArgs[index + 1];
      if (value !== undefined) {
        nextArgs.push('--hostname', value);
        index += 1;
      }
      continue;
    }

    if (arg.startsWith('--host=')) {
      nextArgs.push(`--hostname=${arg.slice('--host='.length)}`);
      continue;
    }

    nextArgs.push(arg);
  }

  return nextArgs;
}

export function runDev(rawArgs) {
  const nextArgs = mapDevArgs(rawArgs);

  const child = spawn('next', nextArgs, {
    stdio: 'inherit',
    shell: true,
    env: process.env,
  });

  child.on('exit', (code, signal) => {
    if (signal !== null) {
      process.kill(process.pid, signal);
      return;
    }
    process.exit(code ?? 0);
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runDev(process.argv.slice(2));
}
