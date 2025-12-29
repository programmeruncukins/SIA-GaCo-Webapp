const CACHE_NAME = "GaCoawebappCache-v1";
const urlsToCache = [
  "/",
  "/admin applications.html",
  "/admin delete account.html",
  "/admin delete success.html",
  "/admin edit profile.html",
  "/admin notifications.html",
  "/admin profile.html",
  "/admin registrated clients.html",
  "/clients applications.html",
  "/clients delete account.html",
  "/clients delete success.html",
  "/clients edit profile.html",
  "/clients notifications.html",
  "/clients profile.html",
  "/GaCo_logo_horizontal_white.png",
  "/GaCo_Logo_White_bg.png",
  "/gallery.html",
  "/home.html",
  "/index.html",
  "/info.html",
  "/intro.html",
  "/login.html",
  "/main.js",
  "/order form success.html",
  "/order form.html",
  "/registration success.html",
  "/registration.html",
  "/style.css"
];

// Instalēšana un failu kešošana
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Request apstrāde: vispirms kešs, tad tīmeklis
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// Service worker aktivizācija
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (!cacheWhitelist.includes(name)) return caches.delete(name);
        })
      )
    )
  );
});
