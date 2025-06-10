# 感悟

> 测试一号三号7788

```ts
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

```

`高亮`



- 1
- 2
- 3
- 4
- 5

1. 2
2. 3
3. 4
4. 5
5.



<img src="http://qiniu.xuanxiaoqian.com/图片/image-20250608235029835.png"/>
<img src="http://qiniu.xuanxiaoqian.com/图片/1749144933635-612efc3e-4749-4ab6-8e61-36ec677edfbd.png"/>

