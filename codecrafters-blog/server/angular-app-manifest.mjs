
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Bsmart-123.github.io/Devblog-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Devblog-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 544, hash: 'b68b0103090034b8956435cbd4d17971fbf373aecc31d6b98abbb87584012c68', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: '337ab53558c47e5f54ffe75395cfd0c27481f5d9b38d9b150e7925e1768b1d94', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2194, hash: 'a7038a50c1ff725aab8a5c2d3a61d6ee042b0bc14c36acd2005b08d3d3868124', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
