import { DefaultTheme } from 'vitepress'

export const HEAD_PATH = '/pages'

export const navConfig: DefaultTheme.NavItem[] = [
  { text: '感悟', link: `${HEAD_PATH}/idea/why_person`, activeMatch: `${HEAD_PATH}/idea/` },
  { text: '交易', link: `${HEAD_PATH}/trade/odds`, activeMatch: `${HEAD_PATH}/trade/` },
]