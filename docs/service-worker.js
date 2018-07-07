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
    "revision": "80d2867d8c51a64a9f1ec2090ac0df7f"
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
    "url": "assets/js/10.b8a15426.js",
    "revision": "7b9b04e111544840564c03691bc9b739"
  },
  {
    "url": "assets/js/11.4d328ceb.js",
    "revision": "dc53949c4bda813ff1d00ce6dcef3f0c"
  },
  {
    "url": "assets/js/12.2faebc7e.js",
    "revision": "77472e035b49e6a923b2beac3f0b427b"
  },
  {
    "url": "assets/js/13.7d014c2a.js",
    "revision": "3153e82de8dabc15838b91dd4ce291b1"
  },
  {
    "url": "assets/js/14.a71f458b.js",
    "revision": "16c1dfc6cb9ff171a7da74141f05f877"
  },
  {
    "url": "assets/js/15.f4a43dd8.js",
    "revision": "2183449155a45cccf81fb79b55098c94"
  },
  {
    "url": "assets/js/16.146b7f47.js",
    "revision": "7fcfa771357f577ffd9a797f0213c274"
  },
  {
    "url": "assets/js/17.e152c00f.js",
    "revision": "70ec7b5558d16c4f2136f8cb1ac104c5"
  },
  {
    "url": "assets/js/18.05a1a948.js",
    "revision": "eba07d90743eee279c18c04cd3b0bbee"
  },
  {
    "url": "assets/js/19.5abe048f.js",
    "revision": "7b16cbb1bf6ee3b71fb1a23c4db8f1f7"
  },
  {
    "url": "assets/js/2.4272c675.js",
    "revision": "672ab74f9b6bce3ac409e05098964b9a"
  },
  {
    "url": "assets/js/20.b84d3bef.js",
    "revision": "12404a512f5366f52f703ce1b53be272"
  },
  {
    "url": "assets/js/21.3c505aaa.js",
    "revision": "02d5a9c2323ea6d3b3fdfe9916493cdb"
  },
  {
    "url": "assets/js/22.6b1d0dbe.js",
    "revision": "3e26e397db6fbb92f10b0e50f546cbe1"
  },
  {
    "url": "assets/js/23.a968d1b4.js",
    "revision": "22b290ea1d2e5d730ff3a8b333a3bcf0"
  },
  {
    "url": "assets/js/24.f86bedf5.js",
    "revision": "13fc1aa2dc6ddbfca4e1a63d2e7e96c9"
  },
  {
    "url": "assets/js/3.f9889f9c.js",
    "revision": "bf3ff905afeb84baa1b839a5ab72e76b"
  },
  {
    "url": "assets/js/4.d8ab1262.js",
    "revision": "66b8e951c6c5c4a4ea1516ff1f9c4e9f"
  },
  {
    "url": "assets/js/5.02b81305.js",
    "revision": "e23d7aa7ad388539672293ca1a946d7b"
  },
  {
    "url": "assets/js/6.be27cfc4.js",
    "revision": "1df9550b29e665c329065379e0bdf48f"
  },
  {
    "url": "assets/js/7.d94ee6ba.js",
    "revision": "82a79e015a33984b582889225b0ef098"
  },
  {
    "url": "assets/js/8.2ebe24c6.js",
    "revision": "a758ba592a7178d081d66f4304e68b21"
  },
  {
    "url": "assets/js/9.97f15a60.js",
    "revision": "5c8aa32ad42cb447adbdec51775683ee"
  },
  {
    "url": "assets/js/app.d1ccb54a.js",
    "revision": "7789560c1465518a3e6a71b748cfa370"
  },
  {
    "url": "aufgaben/index.html",
    "revision": "5d9273ea0734076a64b2f21ef96a6c3f"
  },
  {
    "url": "erweitert/boxplot.html",
    "revision": "d1403425be9475daf9d14f57eea5c82d"
  },
  {
    "url": "erweitert/gesetz-der-großen-zahlen.html",
    "revision": "68bd98e88e043dcca1eb4fe8e10e4e0c"
  },
  {
    "url": "erweitert/hauptsatz-der-statistik.html",
    "revision": "9dd85dd7a0a37cbf217accdec9479f71"
  },
  {
    "url": "erweitert/konfidenzintervalle.html",
    "revision": "27f25e96d7a7f6fd74251ab2ba4ba85e"
  },
  {
    "url": "erweitert/parameterschaetzung.html",
    "revision": "6b7896fafd1b6efcba5a12a4df55f8df"
  },
  {
    "url": "erweitert/zentraler-grenzwertsatz.html",
    "revision": "b29a7bbdf79039f9f736fb71883418c5"
  },
  {
    "url": "grundlagen/index.html",
    "revision": "66b54f9f3fcdd92fc35f3cbf6b310e29"
  },
  {
    "url": "grundlagen/lageparameter.html",
    "revision": "e7dabb696fa61398d87cef6fbbab65e9"
  },
  {
    "url": "grundlagen/streuungsparameter.html",
    "revision": "f09e8243f82dc462e2a951c75d98c4f6"
  },
  {
    "url": "grundlagen/verteilungen.html",
    "revision": "f37e1fc7ce076474039f93ac23bdb77f"
  },
  {
    "url": "grundlagen/zufallsvariablen.html",
    "revision": "66ec9246906713997e745ba540477270"
  },
  {
    "url": "index.html",
    "revision": "32262f3b4b76cba28e0a5591cf31ccaf"
  },
  {
    "url": "logo.svg",
    "revision": "b2492d7b7ea478c3912c8ecf18910347"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
