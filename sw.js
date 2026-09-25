// Arbeits-Zeitnachweis — Service Worker (2026-09-25, Network-First)
// Network-First fuer die eigene App-Shell (rein clientseitige PWA, kein Backend/API):
// immer frisch aus dem Netz laden, Cache nur als Offline-Fallback. Verhindert, dass
// iOS/WebKit im Standalone-Modus (Home-Bildschirm-Icon) hartnaeckig eine veraltete
// Version einfriert.
const CACHE_NAME = 'arbeitszeitnachweis-v1';
const APP_SHELL = [
  './',
  './index.html',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(APP_SHELL);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
          .map(function (key) { return caches.delete(key); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;

  var url = new URL(req.url);
  var isOwnOrigin = url.origin === self.location.origin;

  if (!isOwnOrigin) {
    // Externe Requests (z.B. html2canvas/jsPDF von cdnjs) einfach ans Netzwerk
    // durchreichen, kein Cache-Eingriff.
    event.respondWith(fetch(req));
    return;
  }

  // Network-First — zuerst frisch aus dem Netz, Antwort im Cache aktualisieren.
  // Nur bei Netzwerkfehler (z.B. offline) auf den Cache zurueckfallen.
  event.respondWith(
    fetch(req).then(function (res) {
      if (res && res.status === 200 && res.type === 'basic') {
        var resClone = res.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(req, resClone);
        });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (cached) {
        if (cached) return cached;
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
