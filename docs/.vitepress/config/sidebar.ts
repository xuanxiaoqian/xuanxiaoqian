import { DefaultTheme } from 'vitepress'

export const sidebarConfig: DefaultTheme.Sidebar = {
  ['/pages/demo']: [
    {
      items: [
        {
          text: "demo",
          link: "/pages/demo/1-demo"
        },
        {
          text: "这是demo",
          link: "/pages/demo/2-这是demo"
        }
      ]
    }
  ],
  ['/pages/idea']: [
    {
      items: [
        {
          text: "idea",
          link: "/pages/idea/1-idea"
        }
      ]
    }
  ],
  ['/pages/text/1']: [
    {
      items: [
        {
          text: "邓",
          link: "/pages/text/1/1-邓"
        }
      ]
    }
  ],
  ['/pages/text/2']: [
    {
      items: [
        {
          text: "剑",
          link: "/pages/text/2/1-剑"
        }
      ]
    }
  ],
  ['/pages/text/3']: [
    {
      items: [
        {
          text: "波",
          link: "/pages/text/3/1-波"
        }
      ]
    }
  ]
}