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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8cf6d41db146ddc8391f3d58c0bee1cd"
  },
  {
    "url": "assets/css/0.styles.8eb0d87d.css",
    "revision": "4128d7f240c09e8131493c3b9d34a224"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.66cacba1.js",
    "revision": "c18ae9c35c3f33abc14f2f04eee2badb"
  },
  {
    "url": "assets/js/2.bea9e773.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.dad9bf50.js",
    "revision": "79d535a9dd7f81156e73c93b63860feb"
  },
  {
    "url": "assets/js/4.3ad1f92d.js",
    "revision": "7795e9e5e9e86c19acd000e87355c5da"
  },
  {
    "url": "assets/js/5.de894b22.js",
    "revision": "15f6ba7f2fc852f7e42f894d0207e90f"
  },
  {
    "url": "assets/js/6.c2282bc3.js",
    "revision": "5f8a670026918133dd4b9f387d0f5936"
  },
  {
    "url": "assets/js/7.e169aeed.js",
    "revision": "f853211a064e66a5661ad66e97e72fed"
  },
  {
    "url": "assets/js/8.9d603f2a.js",
    "revision": "999963ba2c1ac79db6c47aa38eb58848"
  },
  {
    "url": "assets/js/9.6781f95f.js",
    "revision": "1028fabadb4fcd0512984523c0623b1c"
  },
  {
    "url": "assets/js/app.ee44344e.js",
    "revision": "e603f4d03710f59dc12afb843ca3326e"
  },
  {
    "url": "guide.html",
    "revision": "6c4c3e46eb949dcc467b1637eadd870a"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "0291651d4c6903a5b90e30e367d2d6cc"
  },
  {
    "url": "knowledgecard/index.html",
    "revision": "f0329661093037d7fcfb80c6e183700c"
  },
  {
    "url": "knowledgecard/JS/js数据类型.html",
    "revision": "4ae005f82b0453c35399aecc28127803"
  },
  {
    "url": "mybug/index.html",
    "revision": "30d1da18ae70badd186d1ec9b47c83e7"
  },
  {
    "url": "mybug/iview/select.html",
    "revision": "2f929c2e8bd2bafc0c26b43e5d7dcfce"
  },
  {
    "url": "others/index.html",
    "revision": "d81120d2899b89e000a8f819be4ee3c2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
