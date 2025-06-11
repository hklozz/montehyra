const CACHE_NAME = "monter-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",    // byt namn om du har annat css-filnamn
  "/script.js",    // byt namn om du har annat js-filnamn
  "/manifest.json",
  "/icon-192.png", // om du har en ikon med det namnet
  "/icon-512.png"  // om du har en ikon med det namnet
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
