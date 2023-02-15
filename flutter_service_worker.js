'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7d74da1cf508ece3534665ebe2fac743",
".git/config": "da826ac8417e372b281eb25785985b8b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "21e36e87d40b517f8fe5fee2261ad35e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b5d1eadf1098435bf7f319052456dd5d",
".git/logs/refs/heads/master": "b5d1eadf1098435bf7f319052456dd5d",
".git/logs/refs/remotes/origin/master": "63b6fc7ab56ee6d4413c98f499180219",
".git/objects/0a/5844d09cdffe04a391add706ec7dd62a918139": "11a4bd6c119dba4ad4792b36c4286da8",
".git/objects/0b/20c7ceb5a4b59f021dd8910aa392403a25daab": "e88cf703e77222ef27d4982546aca60e",
".git/objects/0b/7662751f37332762bcd5a3a958830ee2dc0b29": "6d3a1ed5d4fd790e38373248fe6cbcce",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/2b/b10a60b7f8dcf8a9a0296ec4757dcea42d5029": "97b75599f768b25d07703d2806c74000",
".git/objects/35/8c9433c17b068c7b145504b3ecee754d8b064d": "4c9c449b6e29a792ea8698c5fa95d8a5",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/5b867ba3543f79b52158771d0e2dde4cc4d33a": "fa69657ee8453b17997bdd1e56be649b",
".git/objects/41/1f29b958e0fad66fc2468a2157fec511841228": "2328d88c0e6b9fcc89aa3ef697791ac9",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/59/76158b1b6d5cac74e6d017535f4ea6e14ea884": "286081da93989b23208df1ab934a24bf",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/408dfcec7ed47185440ba6418aa4283bf10b48": "eca94a67dfb4fe743212063d9f87d44e",
".git/objects/6c/e2d2768b077b8ad8ac65f350ae639ce310d507": "5ce63b603ff7cdf888a1b208fd720315",
".git/objects/6d/afdbeb7afe215818e8d07454acc843cd45d576": "662002eeddca0ef2fb68154454b2d140",
".git/objects/70/66116df7b485a824b2b126632547ff9aa9ba9b": "3e4bfd2af092062555ec6d063aaaae60",
".git/objects/72/03a5aa1de403cb356a139b5387408deb57bb96": "8f924f14fa8168091c85f60be7281e77",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/64ba724d88a2b092a3df7995f8a12d1b19cb8c": "c4d2fac7bdb0410dc9312bb4c7e856df",
".git/objects/78/0137d6e27a6d2812fc077808260bd7fcc065a5": "5049421352292816600efd2647e7eb31",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/667f6518df64bee4be0b5eb170e55e2146ed15": "e5635667d17620ab1c3443d91f6ccb05",
".git/objects/82/4366b0e1ea8026e4ed62e15df7a256df08515a": "54658a08983f5dc9fac037ca7ae44b4a",
".git/objects/87/7fc34c9913ccef5c5ecc05c0ffa8d22fc1252e": "4309e962c869e78ef12b19ae389f3a0c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/81dfd11f3cd7ef2d0b380f73698c4dae711c0f": "e1f81e1f82e5c5c874d347b16e661fc7",
".git/objects/93/eea0d6327e5fdfe8ed4dd0906ce1511b67e4c6": "a4dbea364cc5697fd82df97785dca32c",
".git/objects/9d/bff5ee6b794dee2ee0db82c0e670c2f32ead8e": "ad9a3586a32df8fc7e141ab271b6282d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/b8d997fd6d1e453df4cf592ed1f883a90b2581": "bd27f37d07dba5d2f1b83612ff1fbcb0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/9f14fa8433c4fceff385e573918edcfa61db09": "6a22a9f05e02834031da3f7ec3123ac9",
".git/objects/d0/8aad6d53ee9c1c17d34b9474f07eea06a39ca3": "90e51a6de935ae7495c623a8c3dce01a",
".git/objects/d2/57834b3611f7fc99d6042b413fe0cf378d31d0": "708c58b894fb0ea4e4af8bf1ec5c8104",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/0e1d58b83226803f89973e09aef968d3a73582": "01b2306e0b87e9fc07d2b7b97c04d0ae",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/fa4ccebb8917178c9f5cea235156f0215bf380": "fec6cd2506744017cc8a25d30e3c2dff",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "e505e39310e6db3ed8807c2c17e7384b",
".git/refs/remotes/origin/master": "e505e39310e6db3ed8807c2c17e7384b",
"assets/AssetManifest.json": "9fe6b48ab2488edbb9a682652cca4362",
"assets/FontManifest.json": "d3047478486e05c802f4fe08f48deacd",
"assets/fonts/Eurostile.ttf": "1175a331b7c9c85285913572873529db",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Sackers-Gothic-Std-Light.ttf": "9b4e9c1cf6f52848cee69ad9fe217b57",
"assets/fonts/Spirax-Regular.ttf": "bad5becc8ef2a07198e102931bb5e7ba",
"assets/images/barcode.png": "c9e192088985ec7a16ee6cd372628016",
"assets/images/earth.svg": "6b5199632101934f0e22be53d4319776",
"assets/images/footer.svg": "66739d126bd8d821a836f1b45b89e1ab",
"assets/images/github.png": "e7f05b21f8b0dbe5e2c83035dd86e346",
"assets/images/insta.png": "bbe5719dd62bf11c834b899e46589e0b",
"assets/images/leopfp.png": "bff71243a13eb7b6bf722891d99f89b4",
"assets/images/linkedin-logo.png": "30eda404f2ac0c4be6cfa81e99667cca",
"assets/images/protonmail-sign-white.svg": "0e54b6ee9a3233bba95c6afb8f9f618b",
"assets/images/telegram-logo.svg": "49e07f6a6a79681dfd7790aa7232a4be",
"assets/NOTICES": "85fe479f3cde5605c97468da35b71972",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "463172a22044355c6de5995dd2def794",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "824a719d58ae4ab85040b74bc7052288",
"/": "824a719d58ae4ab85040b74bc7052288",
"main.dart.js": "308c4e989f7ecc8792d6a448ebce3a0c",
"manifest.json": "309c027307373739cfd38a037319ee52",
"version.json": "fafd414fe64c25c0433dc4801cbfe4d8"
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
