import assert from 'node:assert';
import './dist/main.js';
assert.strictEqual(globalThis.foo, 'from-cjs');
