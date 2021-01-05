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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "33fa5b9060c3bf92fc8ea5eb8edd9fea"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "bb4b2a448cbe816fd36c47a0fa2f6126"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "1d2d6e11da95bdb4620024a76914ac24"
  },
  {
    "url": "page-data/blog/one/changelog/page-data.json",
    "revision": "35a65345186bcfc1406606c695431e6d"
  },
  {
    "url": "page-data/blog/one/page-data.json",
    "revision": "e3263c7ce56bcd7e8c75076687247c94"
  },
  {
    "url": "page-data/blog/two/changelog/page-data.json",
    "revision": "d007db2b83a6b10a62a597374c4a08a8"
  },
  {
    "url": "page-data/blog/two/page-data.json",
    "revision": "915aeeda54b9eff7b937f39a769361af"
  },
  {
    "url": "page-data/changelog/page-data.json",
    "revision": "ce17c7c178809e60a0190a72ad975e9f"
  },
  {
    "url": "page-data/empty/changelog/page-data.json",
    "revision": "744dd57a73d52e7d3104f848b062a2ea"
  },
  {
    "url": "page-data/empty/page-data.json",
    "revision": "d785b099934ff8d3d093ae94f49802ef"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "3e147c7416e7d4e98c78cb1f5d5c6206"
  },
  {
    "url": "page-data/math/changelog/page-data.json",
    "revision": "fd06d81ebf939fc9ae8e93dd42efbf80"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "b639b10b2a1dbab67ca7ce417fd2258c"
  },
  {
    "url": "page-data/math/poly/div-mod/changelog/page-data.json",
    "revision": "b5a760cbaf8cf4cfa7c43de4e7a982fa"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "3a621a5154b86186b91050a2277c069a"
  },
  {
    "url": "page-data/math/poly/fft/changelog/page-data.json",
    "revision": "aa1da8fa3b2e958d4cb8405a5c8f3359"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "08567c0fda087061044837d4804c04e2"
  },
  {
    "url": "page-data/math/poly/fwt/changelog/page-data.json",
    "revision": "9e1be907adbab9209b62f90ea3751651"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "6be66dccf3c137fd040523e3693db3b4"
  },
  {
    "url": "page-data/math/poly/intro/changelog/page-data.json",
    "revision": "bf66d44e44ac65dd890e166981443874"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "7d5a959f2d4001df8f278c0209c7db5a"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/changelog/page-data.json",
    "revision": "d2927da4695018b81712ea0930fc5a22"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "0ef8707d5974fa521392edd004fdf882"
  },
  {
    "url": "page-data/math/poly/inv/changelog/page-data.json",
    "revision": "cc899633ae48a90eef5938f3fe5f2a1c"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "a0817df24adb0209e441bd4bb56b38fb"
  },
  {
    "url": "page-data/math/poly/lagrange/changelog/page-data.json",
    "revision": "ef8841b571acd14cf9f2d4a61ad324cb"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "ee51918c55652cef19c1b4e8c42c2d9d"
  },
  {
    "url": "page-data/math/poly/ln-exp/changelog/page-data.json",
    "revision": "85a655d1cc7832a6d5c9c37d71462f0d"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "53e60a26cbab25e3b0f34430ea7ebb94"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/changelog/page-data.json",
    "revision": "5f8d14b4be01d022d661e3a7f53701c0"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "e1e43e9fee90f42c91105fd0d2d6727d"
  },
  {
    "url": "page-data/math/poly/newton/changelog/page-data.json",
    "revision": "2eff267b5a8de189e9597d0afb1f61a0"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "da6f3bd946b11a9c169d5fee31b47f07"
  },
  {
    "url": "page-data/math/poly/ntt/changelog/page-data.json",
    "revision": "3e5cce3616d6c12d79a4c4046c1fd048"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "bf48550628b13d5523ed48634d97ea71"
  },
  {
    "url": "page-data/math/poly/sqrt/changelog/page-data.json",
    "revision": "1855758304ecde47c2d3dcd932f16676"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "c903afebeaca4654caaaba79b59a062b"
  },
  {
    "url": "page-data/math/poly/tri-func/changelog/page-data.json",
    "revision": "7ca6c3a460d9a39aeaec7b9c21e22adf"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "cc2608189f11647d7b3039b6c764a9ad"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "66a027aefd64d4dd875ace44eb02cc62"
  },
  {
    "url": "page-data/settings/page-data.json",
    "revision": "17a3ccfae970a3d645e89b8a4b7207aa"
  },
  {
    "url": "page-data/sq/d/2462162885.json",
    "revision": "ba4deae39a34ec3cdb93acc941ed6b8f"
  },
  {
    "url": "page-data/sq/d/2862490856.json",
    "revision": "c1a2b2dab73b530b56847a5b43b0a02e"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "51b240cd3882150837ed6bf4a3632837"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "18d7f4f37d07afc142f4f1c665d29a65"
  },
  {
    "url": "page-data/tags/chinese/page-data.json",
    "revision": "1927e3b8d3655211fc5f0c4e35d47110"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "949e5450fc3bc58380c8633a622a87b2"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "32154d858d4be8828cd611e288510238"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "04dc2d91f031b9c42a5289727d193138"
  },
  {
    "url": "page-data/tags/test/page-data.json",
    "revision": "5c1d21ca900d0353dbe462877f8f170d"
  },
  {
    "url": "page-data/tags/wip/page-data.json",
    "revision": "175d1f07de09118053fb4a9a7ad160f2"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "ae6edd23224c97b3cb010750b03cdf72"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "70de72064a1669937e8f8c320b5d470f"
  },
  {
    "url": "page-data/test/changelog/page-data.json",
    "revision": "8c1dcb043c6dee59c533c539c8e0bdbe"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "358b6919d3730678e8cb4b0a101adf1d"
  },
  {
    "url": "9845527868e855176da4c48ae67b92de531fae07-f737817e490d0d51033e.js"
  },
  {
    "url": "app-ffbdb8bedbc04004b3b5.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-72f84f4857b98a5aede6.js"
  },
  {
    "url": "component---gatsby-theme-oi-wiki-src-pages-404-tsx-246377b343c858d11770.js"
  },
  {
    "url": "component---gatsby-theme-oi-wiki-src-pages-pages-js-cd5ed95bb12e7cf39150.js"
  },
  {
    "url": "component---gatsby-theme-oi-wiki-src-pages-settings-tsx-fe09db0584a4503544d9.js"
  },
  {
    "url": "component---gatsby-theme-oi-wiki-src-pages-tags-js-286d0c7d3983a0252412.js"
  },
  {
    "url": "component---gatsby-theme-oi-wiki-src-templates-changelog-js-3fb3170bca522905b704.js"
  },
  {
    "url": "component---gatsby-theme-oi-wiki-src-templates-doc-js-7eb24318083bf6f74599.js"
  },
  {
    "url": "component---gatsby-theme-oi-wiki-src-templates-tags-js-d84930f1be1eed5d22ce.js"
  },
  {
    "url": "framework-50ca17642d6eea1960a8.js"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "polyfill-786b31352958defb3cd1.js"
  },
  {
    "url": "script.js"
  },
  {
    "url": "styles-83801f3b4dd3459a4027.js"
  },
  {
    "url": "webpack-runtime-965d6edc188d3fc692d6.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a34b165e0e84b7c6390973cde59f44cc"
  },
  {
    "url": "styles.ea42c128f89644cdfc4c.css"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "67049a60e3b67c28db901d7ce440468a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-ffbdb8bedbc04004b3b5.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
