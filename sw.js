let cacheName = "horarios-aula-pe";
let filesToCache = ["/", "/index.html", "/css/style.css", "/js/main.js", "/pe", "/aula", "/manifest.json" ];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});