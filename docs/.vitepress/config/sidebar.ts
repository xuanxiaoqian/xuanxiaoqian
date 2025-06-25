import { DefaultTheme } from 'vitepress'

export const sidebarConfig: DefaultTheme.Sidebar = {
  ['/pages/交易/']: [
    {
      items: [
        {
          text: "原则底线",
          link: "/pages/交易/1-原则底线"
        },
        {
          text: "交易系统",
          link: "/pages/交易/2-交易系统"
        },
        {
          text: "交易库",
          link: "/pages/交易/3-交易库"
        }
      ]
    }
  ],
  ['/pages/交易心得/']: [
    {
      items: [
        {
          text: "不考虑极端情况的系统，长期下去必然爆仓",
          link: "/pages/交易心得/不考虑极端情况的系统，长期下去必然爆仓"
        },
        {
          text: "交易思维",
          link: "/pages/交易心得/交易思维"
        },
        {
          text: "交易账户对账",
          link: "/pages/交易心得/交易账户对账"
        },
        {
          text: "交易路程",
          link: "/pages/交易心得/交易路程"
        },
        {
          text: "只做能掌控的事",
          link: "/pages/交易心得/只做能掌控的事"
        }
      ]
    }
  ],
  ['/pages/写文/四季/']: [
    {
      items: [
        {
          text: "第一个季节",
          link: "/pages/写文/四季/1-第一个季节"
        }
      ]
    }
  ],
  ['/pages/轩小浅/']: [
    {
      items: [
        {
          text: "三分热度,怨天尤人",
          link: "/pages/轩小浅/三分热度,怨天尤人"
        },
        {
          text: "计划",
          link: "/pages/轩小浅/计划"
        }
      ]
    }
  ]
}