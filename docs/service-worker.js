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
    "revision": "6041d69933eb411337f017b9c5adeb31"
  },
  {
    "url": "assets/css/0.styles.38adecc6.css",
    "revision": "2bf2dc9d1f72528a9b50d34116436913"
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
    "url": "assets/js/1.9c565cb2.js",
    "revision": "dbbf319faef9a0d70f1c294efc0698a2"
  },
  {
    "url": "assets/js/10.96fbce9a.js",
    "revision": "7b8705c3d1acd2b89d3e8ca89bf38031"
  },
  {
    "url": "assets/js/11.69f9d50f.js",
    "revision": "0f6c11e55770b8800cca734453f13739"
  },
  {
    "url": "assets/js/12.9779a770.js",
    "revision": "252a295c478d6ed3f7a2daf3be3a5e0a"
  },
  {
    "url": "assets/js/13.51b7efa8.js",
    "revision": "a568d19ba548700beec93d9e692eaae1"
  },
  {
    "url": "assets/js/14.921f6dcd.js",
    "revision": "aa13d223aa65ab0f72cb382f0e4393f8"
  },
  {
    "url": "assets/js/15.3521f7d6.js",
    "revision": "d46da06a85d67f06dcd19295a9495afd"
  },
  {
    "url": "assets/js/16.aa58e5e3.js",
    "revision": "ff0f9f55605de4f2307c4b0ed94cb611"
  },
  {
    "url": "assets/js/17.99f922e9.js",
    "revision": "1b6777becfda984cde92d78d2e4a0a42"
  },
  {
    "url": "assets/js/18.4ccf1714.js",
    "revision": "af9eb4bb6523f5ed685d853b2bdd0309"
  },
  {
    "url": "assets/js/2.17c400a1.js",
    "revision": "07c422059f4efd0032633234cd29eb8e"
  },
  {
    "url": "assets/js/3.2572da3c.js",
    "revision": "0fbf2b1a1514c1db82b6783f34bca335"
  },
  {
    "url": "assets/js/4.68544921.js",
    "revision": "e4baa87ec5b8dd855c744dd2ea8f9012"
  },
  {
    "url": "assets/js/5.2c5fe118.js",
    "revision": "8f7f71c3b5f1f0f27239ecb20e9e3f92"
  },
  {
    "url": "assets/js/6.5721e809.js",
    "revision": "c91bc2350919bc8e9fca746be8dfa6d8"
  },
  {
    "url": "assets/js/7.effdf3db.js",
    "revision": "4f52a4c54b275dca8fd406c1102fb314"
  },
  {
    "url": "assets/js/8.d40303bd.js",
    "revision": "a983a116106dda53a4e5dc1455795270"
  },
  {
    "url": "assets/js/9.6ba890c9.js",
    "revision": "0ec51d1f57d25af9ac4009602eaa5908"
  },
  {
    "url": "assets/js/app.763c5343.js",
    "revision": "1de1e4aa0eef0c12884c7248289cd4ed"
  },
  {
    "url": "aufgaben/index.html",
    "revision": "d8cdcb5cad7f446fb864e65d5aab8282"
  },
  {
    "url": "erweitert/boxplot.html",
    "revision": "d43b2e03fce5fd1873092ba1a1bdc2d9"
  },
  {
    "url": "grundlagen/index.html",
    "revision": "b0cb4be027c3b23e332b77b8043960ff"
  },
  {
    "url": "grundlagen/lageparameter.html",
    "revision": "f904f02697b0c7895ca6b5b68a293053"
  },
  {
    "url": "grundlagen/streuungsparameter.html",
    "revision": "13903755151ff8ededf78802c94e34e1"
  },
  {
    "url": "grundlagen/verteilungen.html",
    "revision": "d0dcb79c790af1277a087e7aae2398f0"
  },
  {
    "url": "grundlagen/zufallsvariablen.html",
    "revision": "f7be64995a831ba54b76d9657e1f90a4"
  },
  {
    "url": "index.html",
    "revision": "b0d5ea511182710070a23cff00864ca3"
  },
  {
    "url": "logo.svg",
    "revision": "b2492d7b7ea478c3912c8ecf18910347"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
