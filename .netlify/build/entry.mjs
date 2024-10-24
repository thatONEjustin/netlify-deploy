import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Dzn2clcC.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog.astro.mjs');
const _page2 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page3 = () => import('./pages/work.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');


const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/index.astro", _page1],
    ["src/pages/blog/[...slug].astro", _page2],
    ["src/pages/work.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "2aa0b35c-f138-4de6-9d22-ab9fb5bea345"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
