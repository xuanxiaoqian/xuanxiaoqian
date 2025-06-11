import { DefaultTheme } from 'vitepress'

export const navConfig: DefaultTheme.NavItem[] = [
  {
    text: "demo",
    link: "/pages/demo/1-demo1",
    activeMatch: "/pages/demo/"
  },
  {
    text: "交易",
    link: "/pages/交易/1-交易理念",
    activeMatch: "/pages/交易/"
  },
  {
    text: "小说",
    items: [
      {
        text: "四季",
        link: "/pages/小说/四季/1-第一个季节",
        activeMatch: "/pages/小说/四季/"
      }
    ]
  }
]