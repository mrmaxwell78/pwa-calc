const staticPWACalc = "pwa-calc-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/image/calculator_64x64.png",
  "/image/calculator_128x128.png",
  "/image/calculator_144x144.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticPWACalc).then(cache => {
      cache.addAll(assets)
    })
  )
})