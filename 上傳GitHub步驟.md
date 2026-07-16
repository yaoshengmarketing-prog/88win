# 88win-site 上傳 GitHub → Cloudflare Pages（依實際 repo 狀態）

## 現況
- repo `yaoshengmarketing-prog/88win` 已存在，且**母版已在 repo 根目錄**（src/、public/、functions/、package.json…）。
- repo 目前只有母版（含 3 篇範例），**缺 270 篇文章＋圖片**。
- 本機這個 `88win-site\` 資料夾 = 母版＋270 篇＋圖片（已 build 驗證 294 頁全綠）。
- 目標：讓 repo 內容 = 本資料夾內容。

## 方式 A：git（推薦，977 檔用網頁拖拉會卡）
在本 `88win-site\` 資料夾內（Windows 端的 git，速度快）：
```
git init
git add .
git commit -m "88win 搬站：270 篇文章 + 536 圖 + 母版"
git branch -M main
git remote add origin https://github.com/yaoshengmarketing-prog/88win.git
git push -u origin main --force
```
> 用 --force 讓 repo 內容直接對齊本資料夾（母版檔相同、只是多出 270 篇＋圖）。
> 若不想 force：改 `git clone` repo → 把本資料夾的 `src/content/blog/*.md` 與 `public/images/` 複製進 clone → commit → push。

## 方式 B：GitHub Desktop
Add Local Repository → 選本 `88win-site\` 資料夾 → Commit → Publish/Push 到 yaoshengmarketing-prog/88win。

## Cloudflare Pages（你 push 完，交給 Claude）
| 項目 | 值 |
|---|---|
| Framework | Astro |
| Build command | npm run build |
| Build output | dist |
| **Root directory** | **/（根目錄，因母版在 repo 根，不是 88win-site 子夾）** |
| 環境變數 | NODE_VERSION = 20 |
