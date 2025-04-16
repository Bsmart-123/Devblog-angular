
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Bsmart-123.github.io/Devblog-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Devblog-Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 544, hash: '88c1093e2edd29c5250a215f23d0097dfaa0573d3b0c222ed58c4d0dba144711', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: '682348e6983f905f501e92ff496e23d8b4ea255a7b11566d95ab825c5dd5c5ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2194, hash: 'c64c62da0533e5e5e777c4784cecaea482513adbd2189d7ba22f0b205987b066', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
