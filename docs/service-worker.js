/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6c15b52d00e807c6d2f06ff64cf7d3ce"
  },
  {
    "url": "assets/css/0.styles.99ec8809.css",
    "revision": "18f3eca3f9df926a5422bc24857c8e7b"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d6d66d73.js",
    "revision": "f80a84abc65bc5f567d14eb8e753886b"
  },
  {
    "url": "assets/js/10.95e516fe.js",
    "revision": "93c317dd77f4fe4fbfb80730b447d8b5"
  },
  {
    "url": "assets/js/11.cf107991.js",
    "revision": "d9680150ef46d7f6e173b46795e9edba"
  },
  {
    "url": "assets/js/12.2c53660f.js",
    "revision": "aca60b19bd18cc48e9c6524ed44d9aa5"
  },
  {
    "url": "assets/js/13.7c6d2881.js",
    "revision": "97a34954f98914f8640eae8464446920"
  },
  {
    "url": "assets/js/14.cf20f84c.js",
    "revision": "6854f28adf15edfc26a5bfdef5a34c63"
  },
  {
    "url": "assets/js/15.27591f77.js",
    "revision": "cfee046d9a6dfd2abd78540f0a173b5c"
  },
  {
    "url": "assets/js/16.d87796ec.js",
    "revision": "5dde1f9a660584193854f52fcd8e7a76"
  },
  {
    "url": "assets/js/17.5c4fe3ad.js",
    "revision": "c3fb961fc090231c1febd3227b244bef"
  },
  {
    "url": "assets/js/18.1913fc97.js",
    "revision": "674440b6cc565916fb54aa063bcca7d0"
  },
  {
    "url": "assets/js/19.77c6f2c7.js",
    "revision": "d03057a55a75a0880e12a139f997f0a5"
  },
  {
    "url": "assets/js/2.d8574bf0.js",
    "revision": "a0df9f6148bc57c8b1def340bd1aeb83"
  },
  {
    "url": "assets/js/20.23645990.js",
    "revision": "d938421856ede0199110f76ae2f50fb0"
  },
  {
    "url": "assets/js/21.f21615d2.js",
    "revision": "a3134fb630bfab82f172a85252f19bce"
  },
  {
    "url": "assets/js/22.727ed04b.js",
    "revision": "0f76dd7c4439121315dca73be37f8a1f"
  },
  {
    "url": "assets/js/23.5784f3eb.js",
    "revision": "9bc0b11eea26687536bc4c099e8614ae"
  },
  {
    "url": "assets/js/24.fa4fb27b.js",
    "revision": "65c4a1dd2012ffd4508114c2ce34ed0e"
  },
  {
    "url": "assets/js/25.48e17605.js",
    "revision": "a94873939128cf9b947595461443b10c"
  },
  {
    "url": "assets/js/26.02746fc7.js",
    "revision": "88ca9b46199ddbd23e4bee0132fef72c"
  },
  {
    "url": "assets/js/3.b4e5be53.js",
    "revision": "6970350e927182007b1af3cb60b18649"
  },
  {
    "url": "assets/js/4.2da55214.js",
    "revision": "e4baa87ec5b8dd855c744dd2ea8f9012"
  },
  {
    "url": "assets/js/5.a57f19c3.js",
    "revision": "3575d64a73082c13e7e3e42e7835a306"
  },
  {
    "url": "assets/js/6.7e9928c5.js",
    "revision": "43e3d4f5f3517859eee65d41e0af6746"
  },
  {
    "url": "assets/js/7.a2ee78a8.js",
    "revision": "330f568ea57478a9c1be17e5d3cea76b"
  },
  {
    "url": "assets/js/8.db3d9f9b.js",
    "revision": "ea52b4bf13ed1383c6c9e7b0cfdda18f"
  },
  {
    "url": "assets/js/9.5a642a61.js",
    "revision": "ef0df53cca8f9b5b9694e4fddeb03001"
  },
  {
    "url": "assets/js/app.040ef1a1.js",
    "revision": "79bb437fe03523fcbbce9aea354de9cf"
  },
  {
    "url": "aufgaben/index.html",
    "revision": "a599cb3a3cbc20814a332049e2d571b3"
  },
  {
    "url": "erweitert/boxplot.html",
    "revision": "179b58effdbf61438b7851ff93e10c80"
  },
  {
    "url": "erweitert/gesetz-der-großen-zahlen.html",
    "revision": "2a6c2c6cc78dcd50282ba245cef56496"
  },
  {
    "url": "erweitert/hauptsatz-der-statistik.html",
    "revision": "37d4c9c90d76c554f9c67dfe570cbab2"
  },
  {
    "url": "erweitert/konfidenzintervalle.html",
    "revision": "35646e96a4c22e20b9641fd73e92caaf"
  },
  {
    "url": "erweitert/parameterschaetzung.html",
    "revision": "0294129fc134f41b9658f1f4db041793"
  },
  {
    "url": "erweitert/zentraler-grenzwertsatz.html",
    "revision": "3b6de49305fab7d5b3478abd7bcb1f13"
  },
  {
    "url": "grundlagen/haeufigkeitstabellen.html",
    "revision": "72dbe85e83a85b3abc5b9699563a4fb3"
  },
  {
    "url": "grundlagen/index.html",
    "revision": "9776b54c14d072dddc975d7329e887bb"
  },
  {
    "url": "grundlagen/lageparameter.html",
    "revision": "2a03ac4d6f275c39431323f6153566bd"
  },
  {
    "url": "grundlagen/streuungsparameter.html",
    "revision": "b888f6d533bcff40ab2cd39e327d45fa"
  },
  {
    "url": "grundlagen/verteilungen.html",
    "revision": "5881ed1093fce08811019912d8ea4fa1"
  },
  {
    "url": "grundlagen/zufallsvariablen.html",
    "revision": "2663490bf08b3dca7968cb1d5241030f"
  },
  {
    "url": "index.html",
    "revision": "825c70801ec2f4bc55f66cfba1e6f17b"
  },
  {
    "url": "logo.svg",
    "revision": "b2492d7b7ea478c3912c8ecf18910347"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
