import { DefaultTheme } from 'vitepress'

export const navConfig: DefaultTheme.NavItem[] = [
  {
    text: "demo",
    link: "/pages/demo/1-demo",
    activeMatch: "/pages/demo/"
  },
  {
    text: "idea",
    link: "/pages/idea/1-idea",
    activeMatch: "/pages/idea/"
  },
  {
    text: "text",
    items: [
      {
        text: "1",
        link: "/pages/text/1/1-邓",
        activeMatch: "/pages/text/1/"
      },
      {
        text: "2",
        link: "/pages/text/2/1-剑",
        activeMatch: "/pages/text/2/"
      },
      {
        text: "3",
        link: "/pages/text/3/1-波",
        activeMatch: "/pages/text/3/"
      }
    ]
  }
]