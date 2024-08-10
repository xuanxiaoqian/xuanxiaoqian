import { HeadConfig } from 'vitepress'


export const headConfig: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/xuanxiaoqian.webp' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['script', { id: 'pwa' }, `
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/serviceWorker.js").then(res => console.log("service worker registered")).catch(err => console.log("service worker not registered", err))
      })
    }
    `],
  [
    'meta',
    { name: 'keywords', content: '轩小浅,轩小浅 首页,xuanxiaoqian' },
  ],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'author', content: '轩小浅' }],
  ['meta', { httpEquiv: 'Content-Security-Policy', content: 'upgrade-insecure-requests' }],
]