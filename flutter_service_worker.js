'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3759ee8099cd016e113bcfeee702b57a",
"index.html": "472a1aba26bb9219b6a36726c8fb57c1",
"/": "472a1aba26bb9219b6a36726c8fb57c1",
"main.dart.js": "f91470746843cfd8b70ff56b05a37837",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"img/praycolalogo.png": "d9fd908fcfa4afe3abd7e1e3a79edccc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"style.css": "9b4a09d3cf7ad7cf11460aad409d9ffc",
"manifest.json": "131fe5cbb8863d7b311cd0d6d70db820",
"assets/AssetManifest.json": "7a6ebea585a5e5be0dfcc3456aaac980",
"assets/NOTICES": "450013595c4fe7759739bdf5e9b54786",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f1eb995156e9cf90748cbdb86abcccb6",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/northwood_image.jpg": "edb4a8fed3ce82239b8103487ef5fc19",
"assets/assets/images/riverland_hills_image.jpg": "97bd683c8691a12d27e76d74094c2d00",
"assets/assets/images/calvary_chapel_ne_image.jpg": "f988cb46105f4ec64621c015a0b5a3f6",
"assets/assets/images/icon_image.png": "696750efb331fcfc04a7cfffa9af0be9",
"assets/assets/images/meeting_place_image.JPG": "8aa033e34c75d16d1f523986293ad4e4",
"assets/assets/images/harvest_image.jpg": "d35c2ee8033de9ef7f48e9cb2d179801",
"assets/assets/images/the_brook_image.jpeg": "841d2450da8e44acb9921a0b61a48982",
"assets/assets/images/lake_murray_image.jpg": "df57ec05b326bd9baa0a5198c0eab078",
"assets/assets/images/fbc_image.jpg": "0a85e01fecf7d3922fb3ca5f3f65176b",
"assets/assets/images/new_heights_image.jpg": "11c8477aec3647ab6a3ec3b0817ad28b",
"assets/assets/images/grace_life_image.jpg": "defece0df42171d0c5d6dc24afbbc237",
"assets/assets/images/east_lake_image.png": "c4b1c9b34f7aad81b1b7e5b03190892c",
"assets/assets/images/cosecha_image.jpg": "d35c2ee8033de9ef7f48e9cb2d179801",
"assets/assets/images/awaken_image.jpg": "8135c2b7de635ee41c4e73141d903577",
"assets/assets/images/lfcc_image.png": "5c8d41983f8536f22633be613c39fe60",
"assets/assets/images/radiate_image.jpg": "d825906b3822bbd51392757956e432f0",
"assets/assets/images/decided_church_image.jpg": "d966140dec210ccbb6a0df83ea98d4b1",
"assets/assets/images/ciu_image.jpg": "1197eab84b340a9745b7c157e8455f14",
"assets/assets/images/rivercrest_image.jpg": "f4535bf8af2e8dbe815bbb308ed8ff0d",
"assets/assets/images/northstar_image.jpg": "ddfe3543a1475962a73785497b7c1e2a",
"assets/assets/images/clc_image.jpg": "9692f2c8694a4f747c25725299d39a14",
"assets/assets/images/church_of_deliverance_image.jpg": "616d8bdc443f9a328df3d5387404374c",
"assets/assets/images/calvary_chapel_image.jpg": "730355fdcbf2bd414a82d3e8fee3f51e",
"assets/assets/images/12_springs_image.jpg": "82aeefd5536ca51da0e7550f3f3b5374",
"assets/assets/images/edge_church_image.png": "f10c0b5446ae1cb90d520ca5d6e73fd0",
"assets/assets/images/4runners_image.jpeg": "92553b6ada9207e0c9cd4c76ca0b7e2c",
"assets/assets/images/three_rivers_image.png": "16ad7ee7e3e453204011279a8b69b1e8",
"assets/assets/images/sandhills_image.jpg": "2bedcfb0ef538864075ab5fa27f8df56",
"assets/assets/images/RSC_image.png": "b118ca1b92106eaea0e98884500800fc",
"assets/assets/images/crossroads_church.jpg": "0059935bcc527773cf1d536a583aad58",
"assets/assets/images/north_point_image.png": "3f8cafd395b10eccbde70a951961f62e",
"assets/assets/images/newspring_church_image.jpg": "2a2b1ea0ee3e8aab55f7b14cd0fe6076",
"assets/assets/images/foward_city_image.jpg": "530575827a264fb89fd928b42ad7cba2",
"assets/assets/images/north_trenholm_image.jpg": "a466911fdfc815b4116922f5757ee639",
"assets/assets/images/reconciliation_ministries_image.jpg": "7fc33b14e055447c635ea370b557bd76",
"assets/assets/praycolalogo.png": "9a5e0a98b6a952f528c1673c0d495f30",
"assets/assets/socials/spotify.png": "73b5b5660e6dd4e8a465186248f9b70d",
"assets/assets/socials/facebook_logo.png": "8efab2382068a2c28569f118745c592e",
"assets/assets/socials/twitter.png": "f98c159d11e0c4fd47ecdbcd96e727ef",
"assets/assets/socials/youtube.png": "63a3f51a4c641282e8211b12d703198b",
"assets/assets/socials/instagram_logo.png": "86f33cfc1e9c3bc689abc0851fa2f7b5",
"assets/assets/data/church_data.json": "34367d04ebc6a064f6297e3aa0e09790",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
