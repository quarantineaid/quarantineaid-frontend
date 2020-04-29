/*
// custom service-worker.js
if (workbox) {
    // adjust log level for displaying workbox logs
    workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug)

    // apply precaching. In the built version, the precacheManifest will
    // be imported using importScripts (as is workbox itself) and we can
    // precache this. This is all we need for precaching
    workbox.precaching.precacheAndRoute(self.__precacheManifest);

    // Make sure to return a specific response for all navigation requests.
    // Since we have a SPA here, this should be index.html always.
    // https://stackoverflow.com/questions/49963982/vue-router-history-mode-with-pwa-in-offline-mode
    workbox.routing.registerNavigationRoute('/index.html')

    // Setup cache strategy for Google Fonts. They consist of two parts, a static one
    // coming from fonts.gstatic.com (strategy CacheFirst) and a more ferquently updated on
    // from fonts.googleapis.com. Hence, split in two registerroutes
    workbox.routing.registerRoute(
        /^https:\/\/fonts\.googleapis\.com/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'google-fonts-stylesheets',
        })
    )

    workbox.routing.registerRoute(
        /^https:\/\/fonts\.gstatic\.com/,
        new workbox.strategies.CacheFirst({
            cacheName: 'google-fonts-webfonts',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200],
                }),
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 60 * 60 * 24 * 365,
                    maxEntries: 30,
                }),
            ],
        })
    )

    workbox.routing.registerRoute(
        /^https:\/\/stackpath\.bootstrapcdn\.com/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'fontawesome',
        })
    );
}
*/
if(workbox){
    workbox.setConfig({
        debug: false,
    });

    workbox.precaching.precacheAndRoute([]);

    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg)$/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'images',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                }),
            ],
        }),
    );

    workbox.routing.registerRoute(
        new RegExp('https://newsapi.org/v2/top-headlines(.*)'),
        workbox.strategies.networkFirst({
            cacheName: 'news-api',
        }),
    );

    workbox.routing.registerRoute(
        new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
        workbox.strategies.cacheFirst({
            cacheName: 'googleapis',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 30,
                }),
            ],
        }),
    );
}
