// Cloudflare Pages Function：導向與垃圾頁處理（計畫書 §8C）
// 英文 3 篇 → 301 到中文對應頁；其餘 /en/* 與 Wix 範本 /news/* → 410 Gone
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const p = url.pathname.replace(/\/+$/, '') || '/';
  const BASE = 'https://www.88win.com.tw';

  const enMap = {
    '/en/post/88win-faq-quick-guide-1': '/post/88win-faq-quick-guide',
    '/en/post/88win-1': '/post/88win',
    '/en/post/88win-live-game-overview-1': '/post/88win-live-game-overview',
  };
  if (enMap[p]) return Response.redirect(BASE + enMap[p], 301);

  if (p === '/en' || p.startsWith('/en/') || p === '/news' || p.startsWith('/news/')) {
    return new Response('Gone', { status: 410 });
  }

  return next();
}
