import { DefaultTheme } from 'vitepress'

export const navConfig: DefaultTheme.NavItem[] = [
  {
    text: "交易",
    link: "/pages/交易/1-原则底线",
    activeMatch: "/pages/交易/"
  },
  {
    text: "交易心得",
    link: "/pages/交易心得/不考虑极端情况的系统，长期下去必然爆仓",
    activeMatch: "/pages/交易心得/"
  },
  {
    text: "写文",
    items: [
      {
        text: "四季",
        link: "/pages/写文/四季/1-第一个季节",
        activeMatch: "/pages/写文/四季/"
      }
    ]
  },
  {
    text: "轩小浅",
    link: "/pages/轩小浅/三分热度,怨天尤人",
    activeMatch: "/pages/轩小浅/"
  }
]