// service-worker.js
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/myscript.js',
          '/index.html',
          '/icon.png',
          '/myscript.js',
          '/main.mp4',
          '/manifest.json',
          '/sw-toolbox.js',
          '/sw.js',
          '/icons'
          // додайте інші ресурси, які ви хочете кешувати
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  

  