# xuanxiaoqian.com

## 1. 介绍

> 轩小浅官网





## 2.使用

scripts文件夹下有自动生成`nav.ts`和`sidebar.ts`，每次dev和build都会自动生成，创建新文件的时候需要重新手动启动服务。

自动导入规则
如果文件夹里面的文件命名不以1-xxx.md命名就不会配置导航

`nav.ts`

```ts
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
```

link是根据文件夹1-xxx.md，1-开头的md文件



`sidebar.ts`

```ts
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
```

items顺序是根据1-xxx,2-xx进行排序，同时text会去掉开头


## TODO：
目前有BUG，新增文件后导航栏生成不正确，但是重启后正确，所以建议新建的时候直接导航栏搜索地址，写完后再重启。

