import { defineConfig } from 'vitepress'
import { footerConfig } from './config/footer'
import { headConfig } from './config/head'
import { markdownConfig } from './config/markdown'
import { navConfig } from './config/nav'
import { sdeibarConfig } from './config/sidebar'

export default defineConfig({
  title: '轩小浅',
  description: '轩小浅官网',
  head: headConfig,
  themeConfig: {
    logo: '/xuanxiaoqian.webp',
    footer: footerConfig,
    siteTitle: '轩小浅',
    nav: navConfig,
    sidebar: sdeibarConfig,
  },
  markdown: markdownConfig
})
