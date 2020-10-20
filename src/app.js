if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/src/app.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
  self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('pwa-calc').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/style.css',
          '/src/app.js',
          '/src/calc.js'
        ]);
      })
    );
   });
   self.addEventListener('fetch', event => {
    event.respondWith(
      caches.open(cacheName)
        .then(cache => cache.match(event.request, {ignoreSearch: true}))
        .then(response => {
        return response || fetch(event.request);
      })
    );
  });