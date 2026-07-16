// 全站共用設定 —— 要改站名、標語、網域，改這裡就好
export const SITE = {
  name: '88WIN 娛樂城',
  brand: '88WIN',
  url: 'https://www.88win.com.tw',
  blogTitle: '88WIN 娛樂誌',
  blogDesc: '88WIN 娛樂城官方部落格：新手入門、安全與合法、優惠活動、出金與紅利、體育投注、老虎機、真人娛樂與賽事分析，手把手教你玩得安心、領好領滿。',
  lang: 'zh-Hant-TW',
  // 登入／註冊的目標網址（引流 CTA）—— 先連 88win6，日後換專屬網址
  loginUrl: 'https://88win6.com/?ag_code=HB1f9879',
  registerUrl: 'https://88win6.com/?ag_code=HB1f9879',
  // 官方 LINE 客服
  lineId: '@850npyfk',
  lineUrl: 'https://line.me/R/ti/p/@850npyfk',
  // 頁首 LOGO（自架）
  logo: '/images/home/e5db31ac7737.png',
  // 版權年份
  year: 2026,
};

// 合作遊戲供應商（頁尾展示；照 mockup）
export const PROVIDERS = [
  'bbin', 'AMEBA', 'BNG', 'bet365', '完美娛樂城', 'ALLBET',
  'ifun GAME', 'KA', 'DreamGaming', 'QTech', 'SA Gaming', 'SUPER',
];

// 合法監理機構（原創介紹）＋ 牌照 logo（自架）
export const LICENSES = [
  { name: '馬爾他博弈管理局（MGA）', desc: '歐洲最具公信力的博弈監理之一，對資金隔離、遊戲公平性稽核與玩家保障有嚴格要求。', logo: '/images/home/5fef02a72a2e.png' },
  { name: '英國博弈委員會（UKGC）', desc: '以嚴謹的玩家保護、反詐防制與負責任博弈標準著稱。', logo: '/images/home/ed10e1d63154.png' },
  { name: '菲律賓娛樂博弈公司（PAGCOR）', desc: '亞洲主要的博弈監理機構，規範線上博弈之合法營運。', logo: '/images/home/7b080fcfc8a8.png' },
  { name: '英屬維京群島（BVI）', desc: '國際上常見的合法公司註冊地之一。', logo: '/images/home/d766d5abc3c5.png' },
];

// 88WIN 舊站 14 分類（順序 = 計畫書 §5 對應表；slug 一字不差沿用原站）
// 網址 = /blog/categories/{slug}
export const CATEGORY_ORDER = [
  'newbie',
  'trust',
  'promotions',
  '88win',
  'resources',
  'withdraw-bonus',
  'sports-betting',
  'slots',
  'betting-strategy',
  'live-casino',
  'match-analysis-tools',
  'casino-tech',
  'register-app-guide',
  'user-reviews-tests',
] as const;

export const CATEGORIES: Record<string, string> = {
  'newbie': '新手入門',
  'trust': '安全與合法',
  'promotions': '優惠活動',
  '88win': '平台專區',
  'resources': '資源與懶人包',
  'withdraw-bonus': '出金與紅利',
  'sports-betting': '體育投注',
  'slots': '老虎機專區',
  'betting-strategy': '投注技巧',
  'live-casino': '真人娛樂',
  'match-analysis-tools': '賽事分析與投注工具',
  'casino-tech': '娛樂城科技',
  'register-app-guide': '註冊與APP教學',
  'user-reviews-tests': '玩家評價與實測',
};

// 頁首導覽「方案1」：8 個重點平鋪，其餘 6 個收進「更多 ▾」
export const NAV_PRIMARY = [
  'newbie', 'promotions', 'trust', 'withdraw-bonus',
  'slots', 'live-casino', 'sports-betting', 'betting-strategy',
] as const;
export const NAV_MORE = [
  'resources', '88win', 'casino-tech',
  'match-analysis-tools', 'register-app-guide', 'user-reviews-tests',
] as const;

// 每個分類頁的「介紹段落」
export const CATEGORY_INTRO: Record<string, string> = {
  'newbie': '第一次玩 88WIN？這裡帶你認識平台怎麼運作、有哪些遊戲與服務、新手該從哪裡開始。看完就能快速上手，知道每個功能在哪、怎麼用。',
  'trust': '這家平台可不可信？怎麼辨識官方入口與仿冒黑網？這裡教你確認平台合法性、保護帳號與個資交易安全、評估平台信用，玩得安心不踩雷。',
  'promotions': '新會員體驗金、每日簽到、首存加碼、返水回饋…這裡教你把 88WIN 的優惠領好領滿，並看懂流水（打碼量）規則，避免領了卻用不到。',
  '88win': '想深入了解 88WIN 這個平台？這裡集中介紹品牌背景、平台特色、遊戲館別、VIP 制度與各項服務，帶你完整掌握 88WIN 娛樂城。',
  'resources': '各種懶人包、教學總整理與工具彙整都收在這裡。一次找齊你需要的資源，從入門到進階，省下自己到處查的時間。',
  'withdraw-bonus': '出金怎麼最順、紅利怎麼領最划算？這裡涵蓋提款流程、到帳時間、流水條件與紅利規則，教你避開出金卡關、把紅利用好用滿。',
  'sports-betting': '足球、籃球、棒球、電競…體育投注怎麼看盤、怎麼下注、賠率與讓分怎麼算，這裡從入門到實戰一次教會你，賽事投注更有把握。',
  'slots': '老虎機怎麼選、RTP 與爆分機制怎麼看、熱門機台與玩法攻略都在這裡。帶你從電子遊戲新手變成懂挑機台的老手。',
  'betting-strategy': '資金控管、下注節奏、風險分散與各類遊戲的實用技巧，這裡整理進階玩家的投注思維，幫你玩得更聰明、更長久。',
  'live-casino': '百家樂、輪盤、骰寶、龍虎…真人視訊怎麼玩、桌台怎麼選、規則與術語一次搞懂，帶你享受美女荷官的臨場娛樂體驗。',
  'match-analysis-tools': '賽前分析、數據比較與投注工具都在這裡。用可查證的數據與工具輔助判斷，讓每一次賽事投注更有依據。',
  'casino-tech': '金流加密、RNG 亂數、風控與 AI 應用…這裡談娛樂城背後的技術與趨勢，帶你看懂線上娛樂城如何運作與保障玩家。',
  'register-app-guide': '從註冊、手機驗證到 APP 下載與安裝，這裡把「開戶到裝好 APP」的每一步講清楚，第一次也不卡關。',
  'user-reviews-tests': '真實玩家評價與實測心得都收在這裡，含存提款實測、遊戲體驗與客服回應，讓你參考別人的經驗再決定。',
};

// 分類底下的「支柱／Hub 頁」入口（目前無，待內容搬遷後補）
export const CATEGORY_HUBS: Record<string, { label: string; href: string; desc: string }[]> = {};
