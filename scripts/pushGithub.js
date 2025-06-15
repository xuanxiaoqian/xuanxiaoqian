#!/usr/bin/env zx
import 'zx/globals';

const now = new Date();  // 创建包含当前时间的Date对象
const year = now.getFullYear();  // 2025（年份）
const month = now.getMonth() + 1;  // 6（月份需+1）:ml-citation{ref="4,7" data="citationList"}
const day = now.getDate();  // 16（日期）
const hours = now.getHours();  // 当前小时（24小时制）
const minutes = now.getMinutes();  // 当前分钟:ml-citation{ref="2,8" data="citationList"}
// 格式化为"YYYY-MM-DD HH:MM:SS"
const formattedTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`

await $`npm run build`

await $`cd ./docs/.vitepress/dist`

await $`git add .`

await $`git commit -m "提交时间： ${formattedTime}"`

try {
  await $`git push github pages`
} catch (error) {

}