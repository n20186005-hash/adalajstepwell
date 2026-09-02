const CACHE = 'adalaj-stepwell-v1';
const PRECACHE = ['/', '/manifest.webmanifest', '/favicon.svg', '/favicon-32.png', '/favicon-16.png', '/apple-touch-icon.png', '/icons/icon-192.png', '/icons/icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).then((r) => { const c = r.clone(); caches.open(CACHE).then((cc) => cc.put(e.request, c)); return r; }).catch(() => caches.match(e.request).then((m) => m || caches.match('/'))));
    return;
  }
  e.respondWith(caches.match(e.request).then((m) => m || fetch(e.request).then((r) => { if (r && r.ok) { const c = r.clone(); caches.open(CACHE).then((cc) => cc.put(e.request, c)); } return r; })));
});
