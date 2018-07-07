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
    "revision": "3e1af643dba01692ab37ade588aa17e0"
  },
  {
    "url": "assets/css/0.styles.4529d7e7.css",
    "revision": "516da71797ec679c948583505a57d1ec"
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
    "url": "assets/js/1.193bb40d.js",
    "revision": "9d096f9425751797519d0e513f39f251"
  },
  {
    "url": "assets/js/10.6078c4b4.js",
    "revision": "938cb35f496652f06eac43210f7f7fd9"
  },
  {
    "url": "assets/js/11.aad6f29e.js",
    "revision": "8c3fd89aaea2a9a02ba42de622dce48e"
  },
  {
    "url": "assets/js/12.90b66245.js",
    "revision": "2202407a0b0710e1da8a4d82d1bc847d"
  },
  {
    "url": "assets/js/13.1d48c347.js",
    "revision": "d595429415ebe967973cdb07cd0515d2"
  },
  {
    "url": "assets/js/14.9be4d25b.js",
    "revision": "08ec61ec8f9ebc461800ce5823cb4ff5"
  },
  {
    "url": "assets/js/15.c702d9af.js",
    "revision": "108cfb3562bfcbb02e64069c06aa738f"
  },
  {
    "url": "assets/js/16.7f8e1dd2.js",
    "revision": "46356725d887c05e192adc8347749743"
  },
  {
    "url": "assets/js/17.226f56eb.js",
    "revision": "364bcf1c6ddf0670e6cd6271612a423f"
  },
  {
    "url": "assets/js/18.890e9a98.js",
    "revision": "48b8106c694faf3259199bda0d1d89df"
  },
  {
    "url": "assets/js/19.59094501.js",
    "revision": "5883cfdd3c9bd9d04782176dc2cef372"
  },
  {
    "url": "assets/js/2.4272c675.js",
    "revision": "672ab74f9b6bce3ac409e05098964b9a"
  },
  {
    "url": "assets/js/3.f9889f9c.js",
    "revision": "bf3ff905afeb84baa1b839a5ab72e76b"
  },
  {
    "url": "assets/js/4.da565a3e.js",
    "revision": "f5d5c8735cf6a66c2adfb48c01e6a230"
  },
  {
    "url": "assets/js/5.ae3a0354.js",
    "revision": "c124d187a01110d6ef14bba858b901b8"
  },
  {
    "url": "assets/js/6.18d541c4.js",
    "revision": "9b0faf9dd8445a6b64e3151604418e68"
  },
  {
    "url": "assets/js/7.b5e665a7.js",
    "revision": "bdd2198281b110b38cdf9af11a121546"
  },
  {
    "url": "assets/js/8.dd2bc649.js",
    "revision": "c338ed72a9c8372ebaf437d4e595c72a"
  },
  {
    "url": "assets/js/9.de1b3dee.js",
    "revision": "cdefa03bea1125c655b8d84fdd004db0"
  },
  {
    "url": "assets/js/app.b07636d6.js",
    "revision": "ce791e63f31d394d80f50cc05c45569e"
  },
  {
    "url": "aufgaben/index.html",
    "revision": "0ba423b3df27c7debfc2b6de7099d025"
  },
  {
    "url": "erweitert/boxplot.html",
    "revision": "00c3564371ea330f48e7cde851bf84c4"
  },
  {
    "url": "grundlagen/index.html",
    "revision": "a557ba3d854db977eb412596dd993da1"
  },
  {
    "url": "grundlagen/lageparameter.html",
    "revision": "33363de81ec6341ceb53bcc373748de3"
  },
  {
    "url": "grundlagen/streuungsparameter.html",
    "revision": "01fe1ec7e89c9a8d3b34565b4966bfb5"
  },
  {
    "url": "grundlagen/verteilungen.html",
    "revision": "5d1320af9d1f705655dd1f9696426a52"
  },
  {
    "url": "grundlagen/zufallsvariablen.html",
    "revision": "38dadb2dd2faddc024e98074b892b54a"
  },
  {
    "url": "index.html",
    "revision": "5159bd5e538a89cf290f9ddedaef5f8c"
  },
  {
    "url": "logo.svg",
    "revision": "b2492d7b7ea478c3912c8ecf18910347"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
