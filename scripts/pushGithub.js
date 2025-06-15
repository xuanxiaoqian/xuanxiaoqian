#!/usr/bin/env zx
import 'zx/globals';

const now = new Date();
const formattedTime = `${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;

await $`npm run build`;

// 更好的目录切换方式
await $`git -C ./docs/.vitepress/dist add .`;
await $`git -C ./docs/.vitepress/dist commit -m "提交时间：${formattedTime}"`;

try {
  await $`git -C ./docs/.vitepress/dist push github pages`;
} catch (error) {
  console.error('推送失败:', error);
}
