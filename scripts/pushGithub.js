#!/usr/bin/env zx
import { execSync } from 'child_process';
import 'zx/globals';

try {

  const now = new Date();
  const formattedTime = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

  execSync(`npm run build`);

  execSync(`git -C ./docs/.vitepress/dist add .`);
  execSync(`git -C ./docs/.vitepress/dist commit -m "提交时间：${formattedTime}"`);
  execSync(`git -C ./docs/.vitepress/dist push -f github pages`);

} catch (error) {
  console.error('推送失败:', error);

}
