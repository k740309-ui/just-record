import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BTIcjQLJ.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page5 = () => import('./pages/screen/_slug_.astro.mjs');
const _page6 = () => import('./pages/screen.astro.mjs');
const _page7 = () => import('./pages/taste/_slug_.astro.mjs');
const _page8 = () => import('./pages/taste.astro.mjs');
const _page9 = () => import('./pages/thoughts/_slug_.astro.mjs');
const _page10 = () => import('./pages/thoughts.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin.astro", _page2],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page3],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page4],
    ["src/pages/screen/[slug].astro", _page5],
    ["src/pages/screen/index.astro", _page6],
    ["src/pages/taste/[slug].astro", _page7],
    ["src/pages/taste/index.astro", _page8],
    ["src/pages/thoughts/[slug].astro", _page9],
    ["src/pages/thoughts/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "39faf2e0-c0d2-40a4-9fe9-7ca7c5e54ac4"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
