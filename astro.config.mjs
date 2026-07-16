import { defineConfig } from 'astro/config';

// 正式網域：www 為 canonical。全站無尾斜線（§7 三層鎖死第 1 層）。
export default defineConfig({
  site: 'https://www.88win.com.tw',
  trailingSlash: 'never',        // 內部連結、canonical 一律無斜線
  build: { format: 'file' },     // 產出 /post/xxx.html（而非 xxx/index.html）
});
