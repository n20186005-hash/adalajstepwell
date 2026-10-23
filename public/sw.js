const CACHE='adalaj-stepwell-static-v2';
self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('adalaj-stepwell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// Keep server-rendered pages, status codes, weather and consent scripts on the network.
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin||e.request.mode==='navigate'||!/^\/(?:images|icons)\//.test(u.pathname))return;e.respondWith(fetch(e.request).then(r=>{if(r.ok)caches.open(CACHE).then(c=>c.put(e.request,r.clone())).catch(()=>{});return r;}).catch(()=>caches.match(e.request)));});
