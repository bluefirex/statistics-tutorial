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
    "revision": "f6fa9fe3e77e7a2a4d2b2fccb93b6595"
  },
  {
    "url": "assets/css/0.styles.a6fdb001.css",
    "revision": "8001a775d7927b25c29dd95278487f32"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.7afa97cf.js",
    "revision": "9db4824d9cc568e06ef4348a8229ad55"
  },
  {
    "url": "assets/js/10.d2d03e49.js",
    "revision": "be6c8df5fe3b70243ae254a86261d8d5"
  },
  {
    "url": "assets/js/11.c17e556a.js",
    "revision": "40fbaaade67269239be5b11b00431d72"
  },
  {
    "url": "assets/js/12.e5fdf3ef.js",
    "revision": "da238fcd93073ceddb0c3c9163a8e3cb"
  },
  {
    "url": "assets/js/13.23695154.js",
    "revision": "451d73307c370386e8404003bbbbc297"
  },
  {
    "url": "assets/js/14.8b1ea592.js",
    "revision": "0a74c12810f0b4eb4654051ff341109a"
  },
  {
    "url": "assets/js/15.5ee4a5d4.js",
    "revision": "155b0ace64ad31d79b75993aec57c4fd"
  },
  {
    "url": "assets/js/16.28a3ce83.js",
    "revision": "8c9ad729b6b842338dc9366b00c01552"
  },
  {
    "url": "assets/js/2.2653b49b.js",
    "revision": "e155e766b2f56cdbae959a40b67f7b35"
  },
  {
    "url": "assets/js/3.e2b2dfac.js",
    "revision": "2787ce15b08ac12203cd11eda0e22602"
  },
  {
    "url": "assets/js/4.cde6cbd9.js",
    "revision": "90ec2a6366c7de9e4ec795c5f4604c06"
  },
  {
    "url": "assets/js/5.29220ef6.js",
    "revision": "55e740bdada677ae1c0dc936b074fdda"
  },
  {
    "url": "assets/js/6.90bcb11c.js",
    "revision": "380d0befcb22d5efa99e9cdc490a411d"
  },
  {
    "url": "assets/js/7.a77fb056.js",
    "revision": "212f5d71a4ca712fb2a965b881fbbef4"
  },
  {
    "url": "assets/js/8.1d28a885.js",
    "revision": "337b0ebc74d536d337f35e68d98fce56"
  },
  {
    "url": "assets/js/9.0550f65e.js",
    "revision": "992511e72a67c319a2250f78501563d9"
  },
  {
    "url": "assets/js/app.0474a315.js",
    "revision": "5ee36b870434d641bfe8820f0d0ff3b3"
  },
  {
    "url": "aufgaben/index.html",
    "revision": "9a105ecc79a851e5b66143b1031b9082"
  },
  {
    "url": "grundlagen/index.html",
    "revision": "483a1019a3f60c2f669c8a57bf942c80"
  },
  {
    "url": "grundlagen/lageparameter.html",
    "revision": "a2b685fce1f432b1b21fe292cef4f23b"
  },
  {
    "url": "grundlagen/streuungsparameter.html",
    "revision": "21c18890df4c40310062bb1814aaf486"
  },
  {
    "url": "grundlagen/verteilungen.html",
    "revision": "6c67229409d0974bb252ff7403185e1d"
  },
  {
    "url": "grundlagen/zufallsvariablen.html",
    "revision": "c773ca53cf16efcfc7b316ef86a23cf2"
  },
  {
    "url": "index.html",
    "revision": "30f65f4113f37392ac4b81535145bcc6"
  },
  {
    "url": "logo.svg",
    "revision": "b2492d7b7ea478c3912c8ecf18910347"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
