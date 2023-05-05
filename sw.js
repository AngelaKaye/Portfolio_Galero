var cacheName = 'itst-pwa';
var filesToCache = [
  '/',
  '/home_page.html',
  '/aboutme_page.html',
  '/gallery_page.html',
  '/hobbies_page.html',
  '/likes_page.html',
  '/css/page1style.css',
  '/css/page2style.css',
  '/css/page3style.css',
  '/css/page4style.css',
  '/css/page5style.css',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
