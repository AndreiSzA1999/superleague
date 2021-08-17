'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a7d1839c92866813383aab03e340dd4d",
".git/config": "37163b06034cab4f656591cbd159e343",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3189de1ff1f8afed0f70e352dfcd2abb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e85a6e75126403454b041abb524e0e6e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8fcafdb2ffb4cacffbd948f4817b0ab9",
".git/logs/refs/heads/main": "f8aedbd083372ff947a2fca9d8547d4c",
".git/logs/refs/remotes/origin/main": "a06c60b331f38c445ff45b63c58480e1",
".git/objects/04/e334db5a2efa8a43a9c0f77c78d44d8c013e24": "ad8f325132aed1ac83f40d09ba0a250b",
".git/objects/0f/5215b41b2912f66dcd3a7548b1660668d84b2e": "33728f1d2db77b4838c36704badc8a67",
".git/objects/19/71241411ec2ffe21a56863c8eb04623a919a48": "c8be1dc749651ae561517effc2013573",
".git/objects/1b/755b5f6e6b953d98a137788c647f94d8eeae98": "64b01737702b6ba90676a9f7248d2f08",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/25/efdb95e0dbfa86a37773b91ecee355a0aeda1e": "8c473f93fa8f7665cf7933fbbe1e2cb4",
".git/objects/2b/6e459c0176448ec337f4f653e9e6eed2d2107c": "5fb8d7346a9c644d6e045bac141afa93",
".git/objects/2f/e0276063e01d48373c2a80142adb71879bfec3": "8cbe6d47e218360ff96701b29fa85c92",
".git/objects/30/142a0e485c38512b746b113394ecc778d99692": "0202461f9cceda189ca630917b6d948b",
".git/objects/31/94173df6f2fb803b8a36238c247574ce774553": "4a3a85ad25a093474e3bbdfe9f99d4ee",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3b/dd8795ac646057326a649efe8c9b67b4844fc5": "9c36ffcae4dc5e60a7a7316f480464c0",
".git/objects/3d/8e32b64a99128509bf4e6211b48d5ca99a90f8": "f77b04c187ae0e44863d758e5546fe3f",
".git/objects/41/96d5c855b30cf65296ba9cdea9178c614bc68a": "581089e10a4dc8f15b4ae8ae1d3164d7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/0dbc08bb6e8f9aa173678b199fb1cac9bf8a5f": "0d8cc8f5df02037558a8ebe483028f80",
".git/objects/4c/b311af655e1733b0e1e21e8dbe33deb46857e1": "e0b13733c58718c57612fcd49c2f7e79",
".git/objects/50/4b3f2638b64fca964742e40981da5a72726014": "bee9c0f4d3e2f989a422739664803ddd",
".git/objects/50/ac21c7a68b69da3244c97473d44e207c8a1677": "bf87e8019c7cdd73ced18f2c459ac9bc",
".git/objects/52/0946ae93324f03defd782f4117d1a1af98c3be": "5c2d002ef39c980912d747d344746dda",
".git/objects/5c/45e5a9052891c6782a57533567e533a84a6970": "f01c4069ba5e7a59d571e73c68c3fa21",
".git/objects/65/29cbd5a911bdfd44c3f37698b1f55458fdc021": "289e5200ff2832df00d0bdc8d9b4ff7f",
".git/objects/6f/f55863e883edd396fc032c50972531d2816c51": "2a74eb6399b7baa55cef489200b067af",
".git/objects/73/259fc87bf26f840d9ff507d9343e6b17ea64b5": "c37eec7907682726a899804f72e2bee3",
".git/objects/75/1485d559f993e57900f6dfb26625e38ba18332": "9588a4a9d108da3def1646ab5843540e",
".git/objects/75/f9ec21fac0993660e7f30dd254374a1aec078f": "bcc33bdd360f365dbb771f5aa894de74",
".git/objects/79/adbdacc7a6a2c6a67fecf9c2ce9766b38bb051": "1de177097d7bb04c412373111bcfedb7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c40f6ae03ef8b086a82f008ab6275f1c1d03f2": "2f7023b20c76ddd0c616c3c9d94a1306",
".git/objects/7e/186d0c46476fbbd72df9347ea2496e1267dfb8": "6c71217d74def769931a72c227e695ee",
".git/objects/7e/da348d51e5213318918923c7b59e5720898596": "5f5f55402e7058eeac970af31ec18249",
".git/objects/7f/6a87d3e125ae1e9c3177b163d5aa79e4313dec": "f1dfcbd08ce17b059c638adf2d5d5cae",
".git/objects/83/8f21cca6d4e43a97cfd6bd5ee305a077d853c8": "44f494fa57a412f6dd3083253137aa25",
".git/objects/88/5afaf2c80c627f3d98dbf638da26c89ead479e": "929ec740fed65d92d3652ccc432fac3a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/a0bdec129ed1fc1717d71ef37448c004610fe6": "25eccda3a186b86ecff8eaa65431dd06",
".git/objects/8d/cb4089edfbf2e807fb926c598c9d95be759463": "624f0b54f0816e6b901b0a55d4164885",
".git/objects/8e/3b05393aed35a45a869df0506a009e6f895e5a": "fa3c6dc8cb5534f6eb5f96011792387b",
".git/objects/99/a5c6019eba73e1ffb33ac8d55336c4565cfe0d": "fa5f68505a026656aeab7fe4c648a8ac",
".git/objects/9f/13e6e791f20b21a7978eaeb3324c8322111aff": "eef5a02b6012be3a52255daaa3c7e06e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/04fc2375a6e2226387a89c866d8090253cd7e2": "08053e1c0ef401272f78af0ccd276dbd",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/dcabaaf7ece177b2e75cc3205cee5227a4b27e": "16f1cc144347a8498f171fff00acbc40",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/6085c8af3c6e7595d9f828aac81c44535ba1c6": "4108a544fa9eef053661356730a7558b",
".git/objects/c3/a7bdb3d75f40566826eb2b141599c5300939b5": "06c48f61efa0216d2f8a44e7092bab0c",
".git/objects/c5/02aef5a9d4b8376682414b4438a9feb259896a": "d93a4e932b3380dd183d69b539cbbeb9",
".git/objects/ce/31590656958d218b277f1da79a745bb5fe79ba": "e67e2d316ee6213414c06e139fcb60ef",
".git/objects/d1/1d04f157cdf9498b9d64391320e0466ca8f5c6": "c43d858c21d6ef86869be4612f357cd0",
".git/objects/da/88d4ed6145d88e21191df1ae6ce531cdbb0e1e": "d9581f6702a87e7fd85faa1836ca36d0",
".git/objects/e0/782186fc350bd154af5b1325b4baea3a72af82": "2919661f20f7ed0fa2f4b7936c2070f5",
".git/objects/e0/f56405e4d1fc57dc1d454e69e10e9ad97da796": "23a9b5453692cc945911c9364114b8c5",
".git/objects/e3/6a74b9050101c2fadac50eb3f7beaedf16d22b": "660fd6b77a760b9a1b95bffdb39b5646",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/71ae7b35793356bb5041f7ff713be0ce8a45bd": "f7edca20a9a35dadc5e1aa89bc95b6e4",
".git/objects/f7/21309f8432427fe5bb20a0f091fed3f4ad81dd": "59fd6afac67f0e65acf25d57eec82be3",
".git/ORIG_HEAD": "60361dadb8a012e260165d42d74ee556",
".git/refs/heads/main": "60361dadb8a012e260165d42d74ee556",
".git/refs/remotes/origin/main": "60361dadb8a012e260165d42d74ee556",
"assets/AssetManifest.json": "0fd2e42ba7819adc48354301bf95fdf6",
"assets/assets/background.jpg": "dbe6b19d5321065f5b9956eac470987d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1f160f168e7df8243ada4179b15b2468",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "94c5af0e66dce1917d7a1fc31f40260b",
"/": "94c5af0e66dce1917d7a1fc31f40260b",
"main.dart.js": "e0428e04ccaa31d5f2817c61a740b832",
"manifest.json": "edccc65031ec0c4e2ba24c5eaf0aac8b",
"version.json": "d7b1107879ae03102a1d8d31280aad35"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
