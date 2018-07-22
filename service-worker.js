"use strict";

function setOfCachedUrls(e) {
    return e.keys().then(function (e) {
        return e.map(function (e) {
            return e.url
        })
    }).then(function (e) {
        return new Set(e)
    })
}

var precacheConfig = [["index.html", "840f4e08aa202e1159471467e7a1331c"], ["static/css/main.711ac64f.css", "14bd6caf0d9471eed8783224657ecdeb"], ["static/js/main.f55e524a.js", "1febbb6c3157f466eaf85947b2d771e4"], ["static/media/Roboto-Bold.c0f1e4a4.woff2", "c0f1e4a4fdfb8048c72e86aadb2a247d"], ["static/media/Roboto-Bold.eed9aab5.woff", "eed9aab5449cc9c8430d7d258108f602"], ["static/media/Roboto-Light.3c37aa69.woff2", "3c37aa69cd77e6a53a067170fa8fe2e9"], ["static/media/Roboto-Light.ea36cd9a.woff", "ea36cd9a0e9eee97012a67b8a4570d7b"], ["static/media/Roboto-Medium.1561b424.woff2", "1561b424aaef2f704bbd89155b3ce514"], ["static/media/Roboto-Medium.cf4d60bc.woff", "cf4d60bc0b1d4b2314085919a00e1724"], ["static/media/Roboto-Regular.3cf6adf6.woff", "3cf6adf61054c328b1b0ddcd8f9ce24d"], ["static/media/Roboto-Regular.5136cbe6.woff2", "5136cbe62a63604402f2fedb97f246f8"], ["static/media/Roboto-Thin.1f35e6a1.woff2", "1f35e6a11d27d2e10d28946d42332dc5"], ["static/media/Roboto-Thin.44b78f14.woff", "44b78f142603eb69f593ed4002ed7a4a"], ["static/media/background.e71dbb59.jpg", "e71dbb59fa93f283e59c1fa22509eb99"], ["static/media/fontawesome-webfont.674f50d2.eot", "674f50d287a8c48dc19ba404d20fe713"], ["static/media/fontawesome-webfont.912ec66d.svg", "912ec66d7572ff821749319396470bde"], ["static/media/fontawesome-webfont.af7ae505.woff2", "af7ae505a9eed503f8b8e6982036873e"], ["static/media/fontawesome-webfont.b06871f2.ttf", "b06871f281fee6b241d60582ae9369b9"], ["static/media/fontawesome-webfont.fee66e71.woff", "fee66e712a8a08eef5805a46892932ad"], ["static/media/librebaskerville-bold-webfont.c49b3981.eot", "c49b3981651dfe7f281418762ba6ead9"], ["static/media/librebaskerville-bold-webfont.d1e41b59.woff", "d1e41b59c942f200e2af5cd00a1c413c"], ["static/media/librebaskerville-bold-webfont.e2a49a30.ttf", "e2a49a303079f1d0ef576591d806b1b4"], ["static/media/librebaskerville-bold-webfont.fdc7ef7a.svg", "fdc7ef7a527326354e826fa4ae67c800"], ["static/media/librebaskerville-italic-webfont.469f976a.svg", "469f976ae9f2d9101d1fa2febfd5fdd9"], ["static/media/librebaskerville-italic-webfont.98770575.eot", "98770575e43bc5883a62f232c2fc5475"], ["static/media/librebaskerville-italic-webfont.bfa5b7be.woff", "bfa5b7beba080b0c6af53ca5a255b37d"], ["static/media/librebaskerville-italic-webfont.e145c25e.ttf", "e145c25e7611072d1d1991eb12d61bda"], ["static/media/librebaskerville-regular-webfont.84aa9cfe.eot", "84aa9cfe8f8c7a9a0ed814c1d54e6f87"], ["static/media/librebaskerville-regular-webfont.862816fe.svg", "862816fe9cbc0abce29c2362f2117ff5"], ["static/media/librebaskerville-regular-webfont.d67a803b.woff", "d67a803b3388b5b73200e6eec553f6fe"], ["static/media/librebaskerville-regular-webfont.eaf077e2.ttf", "eaf077e2e9d8c00e3348b03a7cac92fe"], ["static/media/photo.1c9b60f0.jpg", "1c9b60f013e247da1315924721de4de8"], ["static/media/reactjs.e9a98cfe.jpg", "e9a98cfe077d4c25b066cc43269a6c4e"], ["static/media/screen-comoto.2484fd60.png", "2484fd606c1f779fd597140d1ae47ecf"], ["static/media/screen-nemox.a95d73de.png", "a95d73de32313b8b554b0cb0ce699371"], ["static/media/screen-priznaj.8842a938.png", "8842a938b62174d37de8ae983512aafc"], ["static/media/screen-pwa-portfolio.a33f05e4.png", "a33f05e405d95357a7e559237547e607"], ["static/media/screen-server-dashboard.16ebe92f.png", "16ebe92fe66ad25169d191e5547c4469"], ["ext-js-plugins/jquery.min.js", "4f252523d4af0b478c810c2547a63e19"], ["ext-js-plugins/materialize.js", "1f1748840f559cdd4746d8fbf8439c36"], ["ext-js-plugins/waypoints.js", "6d2f710de6f5e046d3258c4bc06f50e6"]],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/], addDirectoryIndex = function (e, a) {
        var t = new URL(e);
        return "/" === t.pathname.slice(-1) && (t.pathname += a), t.toString()
    }, cleanResponse = function (e) {
        return e.redirected ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function (a) {
            return new Response(a, {headers: e.headers, status: e.status, statusText: e.statusText})
        }) : Promise.resolve(e)
    }, createCacheKey = function (e, a, t, c) {
        var n = new URL(e);
        return c && n.pathname.match(c) || (n.search += (n.search ? "&" : "") + encodeURIComponent(a) + "=" + encodeURIComponent(t)), n.toString()
    }, isPathWhitelisted = function (e, a) {
        if (0 === e.length) return !0;
        var t = new URL(a).pathname;
        return e.some(function (e) {
            return t.match(e)
        })
    }, stripIgnoredUrlParameters = function (e, a) {
        var t = new URL(e);
        return t.hash = "", t.search = t.search.slice(1).split("&").map(function (e) {
            return e.split("=")
        }).filter(function (e) {
            return a.every(function (a) {
                return !a.test(e[0])
            })
        }).map(function (e) {
            return e.join("=")
        }).join("&"), t.toString()
    }, hashParamName = "_sw-precache", urlsToCacheKeys = new Map(precacheConfig.map(function (e) {
        var a = e[0], t = e[1], c = new URL(a, self.location), n = createCacheKey(c, hashParamName, t, /\.\w{8}\./);
        return [c.toString(), n]
    }));
self.addEventListener("install", function (e) {
    e.waitUntil(caches.open(cacheName).then(function (e) {
        return setOfCachedUrls(e).then(function (a) {
            return Promise.all(Array.from(urlsToCacheKeys.values()).map(function (t) {
                if (!a.has(t)) {
                    var c = new Request(t, {credentials: "same-origin"});
                    return fetch(c).then(function (a) {
                        if (!a.ok) throw new Error("Request for " + t + " returned a response with status " + a.status);
                        return cleanResponse(a).then(function (a) {
                            return e.put(t, a)
                        })
                    })
                }
            }))
        })
    }).then(function () {
        return self.skipWaiting()
    }))
}), self.addEventListener("activate", function (e) {
    var a = new Set(urlsToCacheKeys.values());
    e.waitUntil(caches.open(cacheName).then(function (e) {
        return e.keys().then(function (t) {
            return Promise.all(t.map(function (t) {
                if (!a.has(t.url)) return e.delete(t)
            }))
        })
    }).then(function () {
        return self.clients.claim()
    }))
}), self.addEventListener("fetch", function (e) {
    if ("GET" === e.request.method) {
        var a, t = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching);
        a = urlsToCacheKeys.has(t);
        a || (t = addDirectoryIndex(t, "index.html"), a = urlsToCacheKeys.has(t));
        !a && "navigate" === e.request.mode && isPathWhitelisted(["^(?!\\/__).*"], e.request.url) && (t = new URL("/index.html", self.location).toString(), a = urlsToCacheKeys.has(t)), a && e.respondWith(caches.open(cacheName).then(function (e) {
            return e.match(urlsToCacheKeys.get(t)).then(function (e) {
                if (e) return e;
                throw Error("The cached response that was expected is missing.")
            })
        }).catch(function (a) {
            return console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, a), fetch(e.request)
        }))
    }
});