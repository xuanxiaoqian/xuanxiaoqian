import { DefaultTheme } from 'vitepress'

export const sidebarConfig: DefaultTheme.Sidebar = {
  ['/pages/demo']: [
    {
      items: [
        {
          text: "x-demo1",
          link: "/pages/demo/x-demo1"
        }
      ]
    }
  ],
  ['/pages/交易']: [
    {
      items: [
        {
          text: "交易理念",
          link: "/pages/交易/1-交易理念"
        }
      ]
    }
  ],
  ['/pages/小说/四季']: [
    {
      items: [
        {
          text: "第一个季节",
          link: "/pages/小说/四季/1-第一个季节"
        },
        {
          text: "第二个季节",
          link: "/pages/小说/四季/2-第二个季节"
        }
      ]
    }
  ]
}