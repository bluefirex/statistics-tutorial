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
    "revision": "783724ffb4218c86736965f6cc4f4c40"
  },
  {
    "url": "assets/css/0.styles.5e7b4b72.css",
    "revision": "cecf65b4d24d9ea88d67458fd0fe6dbb"
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
    "url": "assets/js/1.d3dbac5b.js",
    "revision": "892c79c42be4eb7efb9a7936b21ae306"
  },
  {
    "url": "assets/js/10.53d01069.js",
    "revision": "60130e153c17c407a0ad863d7ec52b19"
  },
  {
    "url": "assets/js/11.a743eb42.js",
    "revision": "0f6c11e55770b8800cca734453f13739"
  },
  {
    "url": "assets/js/12.be3d5b3c.js",
    "revision": "92b59ce97bf2c8c6ef2fb87abe2b262f"
  },
  {
    "url": "assets/js/13.04396e6a.js",
    "revision": "1d34482a951e8ddda075991ce55f248c"
  },
  {
    "url": "assets/js/14.35f428cb.js",
    "revision": "aa13d223aa65ab0f72cb382f0e4393f8"
  },
  {
    "url": "assets/js/15.4cd48ca3.js",
    "revision": "4b247c1b129b8d39797b9cc3614413cf"
  },
  {
    "url": "assets/js/16.3400d0ef.js",
    "revision": "23e04b745abfbc1ddfda0e235d1f1d90"
  },
  {
    "url": "assets/js/17.66426fdf.js",
    "revision": "e18e7b08e1df75e9f8a743290116f414"
  },
  {
    "url": "assets/js/18.348214e8.js",
    "revision": "c1f708836140fe799fd70ea552592e0d"
  },
  {
    "url": "assets/js/2.7b43ddd7.js",
    "revision": "72ab3b8ea918c845500a1e608da47665"
  },
  {
    "url": "assets/js/3.98a01abe.js",
    "revision": "f9a9eed90d8b5eaf9e8a6fe0add76774"
  },
  {
    "url": "assets/js/4.62d81e3a.js",
    "revision": "9ea82476a6c47862a69043ee05950855"
  },
  {
    "url": "assets/js/5.a6a6d2b7.js",
    "revision": "2262bcb278a75f957212e2d2b3e6217d"
  },
  {
    "url": "assets/js/6.ce0ad6ec.js",
    "revision": "9db2834c8edc4fe6b4d65352200097f6"
  },
  {
    "url": "assets/js/7.f9ac3bef.js",
    "revision": "9d59893009364da0ee4fcbf52f35d135"
  },
  {
    "url": "assets/js/8.e813a759.js",
    "revision": "a983a116106dda53a4e5dc1455795270"
  },
  {
    "url": "assets/js/9.de1b3dee.js",
    "revision": "cdefa03bea1125c655b8d84fdd004db0"
  },
  {
    "url": "assets/js/app.4ac333a4.js",
    "revision": "b86ab9203f84c79bd0290571d0cee688"
  },
  {
    "url": "aufgaben/index.html",
    "revision": "6545f9d4f79c8e2a348b3dc44a44d36e"
  },
  {
    "url": "erweitert/boxplot.html",
    "revision": "eae585f643e3f1faa6de647741662ec5"
  },
  {
    "url": "grundlagen/index.html",
    "revision": "cf48eab987c0a985dde530100c6ccba5"
  },
  {
    "url": "grundlagen/lageparameter.html",
    "revision": "ac6963212b06ac31366232f4e86a5ada"
  },
  {
    "url": "grundlagen/streuungsparameter.html",
    "revision": "5c0c8af56166b6add0fb687e1ff5e3be"
  },
  {
    "url": "grundlagen/verteilungen.html",
    "revision": "ebdca1b83df938968124e39537a75e9c"
  },
  {
    "url": "grundlagen/zufallsvariablen.html",
    "revision": "41a3889c712054e54fda4e8cdd3431ce"
  },
  {
    "url": "index.html",
    "revision": "fcdb10a210c1f0e6a1267d83a5eaf64e"
  },
  {
    "url": "logo.svg",
    "revision": "b2492d7b7ea478c3912c8ecf18910347"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
