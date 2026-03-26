// Reproduces a bug where inline const incorrectly inlines `void 0` for a CJS
// named export when the CJS entry conditionally re-exports from two files,
// and one of them (production) sets the export to `void 0`.
// This mimics the react/jsx-dev-runtime pattern.
import { jsxDEV } from './jsx-dev-runtime.js';

const show = true;
const result = show && jsxDEV('span', { children: 'hello' });
console.log(result);

import.meta.hot.accept();
