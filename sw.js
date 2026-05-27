const CACHE_NAME = 'finance-tracker-v1';
const ASSETS_TO_CACHE = [
  'index.html',
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Menyimpan aset ke dalam cache...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Aktivasi Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker aktif.');
});

// Ambil data dari cache saat offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
