import { execSync, spawn } from 'child_process';
import { watch } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取需要监听的目录路径
const pagesDir = path.join(__dirname, '../docs', config.pagesName);

// 防抖函数，避免频繁执行
let timeout = null;
let vitepressProcess = null;

const debounce = (func, delay) => {
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(func, delay);
};

// 执行generateNav.js的函数
const runGenerateNav = () => {
  try {
    execSync('node scripts/generateNav.js', { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error('生成导航配置时出错:', error.message);
    return false;
  }
};

// 启动vitepress服务
const startVitePress = () => {
  console.log('启动 VitePress 开发服务器...');
  const vitepress = spawn('npx', ['vitepress', 'dev', 'docs'], {
    stdio: 'inherit',
    shell: true
  });

  vitepress.on('error', (error) => {
    console.error('VitePress 启动失败:', error);
  });

  vitepress.on('close', (code) => {
    if (code !== 0) {
      console.log(`VitePress 进程退出，退出码: ${code}`);
      process.exit(code);
    }
  });

  return vitepress;
};

// 处理文件变化的函数
const handleFileChange = () => {
  // 只重新生成导航配置，不重启服务
  const navGenerated = runGenerateNav();

  if (navGenerated) {
  } else {
    console.log('配置生成失败');
  }
};

// 初始化函数
const initialize = () => {
  // 第一步：生成初始导航配置
  const navGenerated = runGenerateNav();

  if (!navGenerated) {
    console.log('初始导航配置生成失败，退出程序');
    process.exit(1);
  }

  // 第二步：启动VitePress服务（只启动一次）
  vitepressProcess = startVitePress();

};

// 设置文件监听器（只设置一次）
const setupWatcher = () => {
  watch(pagesDir, { recursive: true }, (eventType, filename) => {
    // 忽略文件内容变化，只关注文件结构变化
    if (eventType === 'rename') {
      console.log(`检测到文件结构变化: ${eventType} - ${filename}`);
      debounce(handleFileChange, 1000); // 1秒防抖
    }
  });

};

// 处理进程退出
process.on('SIGINT', () => {
  console.log('\n正在关闭服务...');
  if (vitepressProcess && !vitepressProcess.killed) {
    vitepressProcess.kill('SIGINT');
  }
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n正在关闭服务...');
  if (vitepressProcess && !vitepressProcess.killed) {
    vitepressProcess.kill('SIGTERM');
  }
  process.exit(0);
});

// 启动程序
initialize();
setupWatcher();