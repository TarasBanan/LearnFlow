import { strict as assert } from 'node:assert';
import { mapDevArgs } from './dev.mjs';

assert.deepEqual(mapDevArgs([]), ['dev']);
assert.deepEqual(mapDevArgs(['--host', '0.0.0.0', '--port', '5173']), ['dev', '--hostname', '0.0.0.0', '--port', '5173']);
assert.deepEqual(mapDevArgs(['--host=127.0.0.1', '--port=4000']), ['dev', '--hostname=127.0.0.1', '--port=4000']);

console.log('dev args mapping is valid');
