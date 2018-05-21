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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d4f4d42e9b5d1ebb1e3ce63182ae0d3d"
  },
  {
    "url": "assets/css/0.styles.2301af47.css",
    "revision": "8001a775d7927b25c29dd95278487f32"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.260b2a8a.js",
    "revision": "a39bd1311652bf71aa3b146ba1c1b580"
  },
  {
    "url": "assets/js/10.6b64461d.js",
    "revision": "0ee9c2f03924c46933e73420ae1f17b6"
  },
  {
    "url": "assets/js/11.465270c2.js",
    "revision": "70a1892f51cad01eb45d952064a95756"
  },
  {
    "url": "assets/js/12.b1edffce.js",
    "revision": "30810983e7aae49ad9413a0dbcc5f726"
  },
  {
    "url": "assets/js/13.40706743.js",
    "revision": "252e509b4c5190d979bcbbf1665270d8"
  },
  {
    "url": "assets/js/14.9fc8ded3.js",
    "revision": "d679bd743e19f85d256605fc60cf44da"
  },
  {
    "url": "assets/js/15.fc766262.js",
    "revision": "4ad1366eb8f01b2ca8341353ea860a90"
  },
  {
    "url": "assets/js/2.6179ab40.js",
    "revision": "7884d2ac69abf8ee59bb9ab228822a0d"
  },
  {
    "url": "assets/js/3.dccf0689.js",
    "revision": "83a061bebf309ea9538a21d91338a8f3"
  },
  {
    "url": "assets/js/4.608a5232.js",
    "revision": "a1c73df8c40adac7bd90f5ffe3b994ef"
  },
  {
    "url": "assets/js/5.f2818367.js",
    "revision": "2bbd03efbcb25e5a0d0359b0780d4c15"
  },
  {
    "url": "assets/js/6.f63262de.js",
    "revision": "54b2f538d09db8b7cabfc80ef6dbaba9"
  },
  {
    "url": "assets/js/7.207ff01e.js",
    "revision": "99220754a28c40d7d8d1680469d58c08"
  },
  {
    "url": "assets/js/8.f8c09588.js",
    "revision": "b6646c1e39b3db1812dd09f2e42b412a"
  },
  {
    "url": "assets/js/9.fefb9c87.js",
    "revision": "5700623cc12d820cc07af20d935d19ae"
  },
  {
    "url": "assets/js/app.18aaf178.js",
    "revision": "2b150dbe1937f11e32d5107aa2e10ef5"
  },
  {
    "url": "aufgaben/index.html",
    "revision": "9e90e12ba45a1c0b31560b2d90fb0686"
  },
  {
    "url": "grundlagen/index.html",
    "revision": "fc2830dfc801f4e666d6c70bb43ffc2c"
  },
  {
    "url": "grundlagen/lageparameter.html",
    "revision": "8b82da6ab86e99afae20e741fa1c11c7"
  },
  {
    "url": "grundlagen/streuungsparameter.html",
    "revision": "0ffc32718fd140ea905c75a89ce07aba"
  },
  {
    "url": "grundlagen/verteilungen.html",
    "revision": "8320b2b584d06d7ec5ea91818c892c18"
  },
  {
    "url": "grundlagen/zufallsvariablen.html",
    "revision": "f9f501f13f73fe1bf70c118e365d34b9"
  },
  {
    "url": "index.html",
    "revision": "fa8627f0fb82688c4bf28064a939390a"
  },
  {
    "url": "logo.svg",
    "revision": "b2492d7b7ea478c3912c8ecf18910347"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
