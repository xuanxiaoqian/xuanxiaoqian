import { DefaultTheme } from 'vitepress'

export const navConfig: DefaultTheme.NavItem[] = [
  {
    text: "demo",
    link: "/pages/demo/demo2",
    activeMatch: "/pages/demo/"
  },
  {
    text: "xuan-note-master",
    items: [
      {
        text: "2",
        items: [
          {
            text: "JavaScript",
            link: "/pages/xuan-note-master/2/JavaScript/README",
            activeMatch: "/pages/xuan-note-master/2/JavaScript/"
          },
          {
            text: "LeetCode",
            link: "/pages/xuan-note-master/2/LeetCode/README",
            activeMatch: "/pages/xuan-note-master/2/LeetCode/"
          },
          {
            text: "MySQL",
            link: "/pages/xuan-note-master/2/MySQL/README",
            activeMatch: "/pages/xuan-note-master/2/MySQL/"
          },
          {
            text: "NoteLink",
            link: "/pages/xuan-note-master/2/NoteLink/README",
            activeMatch: "/pages/xuan-note-master/2/NoteLink/"
          },
          {
            text: "Regexp",
            link: "/pages/xuan-note-master/2/Regexp/README",
            activeMatch: "/pages/xuan-note-master/2/Regexp/"
          }
        ]
      },
      {
        text: "Android",
        link: "/pages/xuan-note-master/Android/Android",
        activeMatch: "/pages/xuan-note-master/Android/"
      },
      {
        text: "AutoJS",
        link: "/pages/xuan-note-master/AutoJS/AutoJs",
        activeMatch: "/pages/xuan-note-master/AutoJS/"
      },
      {
        text: "Git",
        link: "/pages/xuan-note-master/Git/Git",
        activeMatch: "/pages/xuan-note-master/Git/"
      },
      {
        text: "Jwt",
        link: "/pages/xuan-note-master/Jwt/Jwt",
        activeMatch: "/pages/xuan-note-master/Jwt/"
      },
      {
        text: "MySQL",
        link: "/pages/xuan-note-master/MySQL/MySQL",
        activeMatch: "/pages/xuan-note-master/MySQL/"
      },
      {
        text: "Redis",
        link: "/pages/xuan-note-master/Redis/Redis",
        activeMatch: "/pages/xuan-note-master/Redis/"
      },
      {
        text: "TypeScript",
        link: "/pages/xuan-note-master/TypeScript/TypeScript",
        activeMatch: "/pages/xuan-note-master/TypeScript/"
      }
    ]
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
      },
      {
        text: "她说",
        link: "/pages/小说/她说/1-她",
        activeMatch: "/pages/小说/她说/"
      }
    ]
  }
]