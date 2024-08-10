import { DefaultTheme } from 'vitepress'
import { HEAD_PATH } from './nav'


export const sdeibarConfig: DefaultTheme.Sidebar = {
  [HEAD_PATH + '/idea']: [
    {
      items: [
        { text: '成为怎样的人', link: `${HEAD_PATH}/idea/why_person` },
      ],
    },
  ],
  [HEAD_PATH + '/trade']: [
    {
      items: [
      ],
    },
  ],
}