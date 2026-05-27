const CACHE_NAME = 'fintrack-cache-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Menyimpan file ke memori HP saat instalasi
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Mengambil file dari memori HP (Offline Mode)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
