/* coi-serviceworker — injects COOP/COEP headers so SharedArrayBuffer works
   on hosts that don't support custom response headers (e.g. GitHub Pages).
   Source: https://github.com/gzuidhof/coi-serviceworker (MIT) */

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  // Passthrough for non-GET or opaque requests that would fail
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Don't touch opaque / error responses
        if (response.status === 0) return response;

        const headers = new Headers(response.headers);
        headers.set('Cross-Origin-Opener-Policy', 'same-origin');
        headers.set('Cross-Origin-Embedder-Policy', 'require-corp');

        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers,
        });
      })
      .catch(() => fetch(event.request))
  );
});
