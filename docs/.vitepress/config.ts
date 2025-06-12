import { defineConfig } from 'vitepress'
import { footerConfig } from './config/footer'
import { headConfig } from './config/head'
import { i18nConfig } from './config/i18n'
import { markdownConfig } from './config/markdown'
import { navConfig } from './config/nav'
import { sidebarConfig } from './config/sidebar'

export default defineConfig({
  title: '轩小浅',
  description: '轩小浅官网',
  head: headConfig,
  themeConfig: {
    logo: '/xuanxiaoqian.webp',
    footer: footerConfig,
    siteTitle: '轩小浅',
    nav: navConfig,
    sidebar: sidebarConfig,
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    ...i18nConfig
  },
  markdown: markdownConfig
})
