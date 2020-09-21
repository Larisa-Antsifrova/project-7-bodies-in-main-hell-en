// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\montserrat-v14-latin_cyrillic-regular.woff2":[["montserrat-v14-latin_cyrillic-regular.b3efb4d8.woff2","fonts/montserrat-v14-latin_cyrillic-regular.woff2"],"fonts/montserrat-v14-latin_cyrillic-regular.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-regular.woff":[["montserrat-v14-latin_cyrillic-regular.61492ccf.woff","fonts/montserrat-v14-latin_cyrillic-regular.woff"],"fonts/montserrat-v14-latin_cyrillic-regular.woff"],"./..\\fonts\\montserrat-v14-latin_cyrillic-500.woff2":[["montserrat-v14-latin_cyrillic-500.bd5a7a4e.woff2","fonts/montserrat-v14-latin_cyrillic-500.woff2"],"fonts/montserrat-v14-latin_cyrillic-500.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-500.woff":[["montserrat-v14-latin_cyrillic-500.2b237b66.woff","fonts/montserrat-v14-latin_cyrillic-500.woff"],"fonts/montserrat-v14-latin_cyrillic-500.woff"],"./..\\fonts\\montserrat-v14-latin_cyrillic-600.woff2":[["montserrat-v14-latin_cyrillic-600.78bfcd30.woff2","fonts/montserrat-v14-latin_cyrillic-600.woff2"],"fonts/montserrat-v14-latin_cyrillic-600.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-600.woff":[["montserrat-v14-latin_cyrillic-600.9ab243fb.woff","fonts/montserrat-v14-latin_cyrillic-600.woff"],"fonts/montserrat-v14-latin_cyrillic-600.woff"],"./..\\fonts\\montserrat-v14-latin_cyrillic-700.woff2":[["montserrat-v14-latin_cyrillic-700.c08a7122.woff2","fonts/montserrat-v14-latin_cyrillic-700.woff2"],"fonts/montserrat-v14-latin_cyrillic-700.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-700.woff":[["montserrat-v14-latin_cyrillic-700.47587240.woff","fonts/montserrat-v14-latin_cyrillic-700.woff"],"fonts/montserrat-v14-latin_cyrillic-700.woff"],"./..\\fonts\\montserrat-v14-latin_cyrillic-800.woff2":[["montserrat-v14-latin_cyrillic-800.d8a484f6.woff2","fonts/montserrat-v14-latin_cyrillic-800.woff2"],"fonts/montserrat-v14-latin_cyrillic-800.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-800.woff":[["montserrat-v14-latin_cyrillic-800.d7b51b6d.woff","fonts/montserrat-v14-latin_cyrillic-800.woff"],"fonts/montserrat-v14-latin_cyrillic-800.woff"],"./..\\images\\icons\\list-marker\\fire-list-marker.svg":[["fire-list-marker.ff97cd07.svg","images/icons/list-marker/fire-list-marker.svg"],"images/icons/list-marker/fire-list-marker.svg"],"./..\\images\\hero-bg\\hero-bg-mobile@1x.png":[["hero-bg-mobile@1x.ad0e07e1.png","images/hero-bg/hero-bg-mobile@1x.png"],"images/hero-bg/hero-bg-mobile@1x.png"],"./..\\images\\hero-bg\\hero-bg-mobile@2x.png":[["hero-bg-mobile@2x.2367c7c3.png","images/hero-bg/hero-bg-mobile@2x.png"],"images/hero-bg/hero-bg-mobile@2x.png"],"./..\\images\\hero-bg\\hero-bg-tablet@1x.png":[["hero-bg-tablet@1x.47fdf172.png","images/hero-bg/hero-bg-tablet@1x.png"],"images/hero-bg/hero-bg-tablet@1x.png"],"./..\\images\\hero-bg\\hero-bg-tablet@2x.png":[["hero-bg-tablet@2x.510f8c89.png","images/hero-bg/hero-bg-tablet@2x.png"],"images/hero-bg/hero-bg-tablet@2x.png"],"./..\\images\\hero-bg\\hero-bg-desktop@1x.png":[["hero-bg-desktop@1x.ea458212.png","images/hero-bg/hero-bg-desktop@1x.png"],"images/hero-bg/hero-bg-desktop@1x.png"],"./..\\images\\hero-bg\\hero-bg-desktop@2x.png":[["hero-bg-desktop@2x.4d683c45.png","images/hero-bg/hero-bg-desktop@2x.png"],"images/hero-bg/hero-bg-desktop@2x.png"],"./..\\images\\icons\\bcg\\fire-background.svg":[["fire-background.7144c19e.svg","images/icons/bcg/fire-background.svg"],"images/icons/bcg/fire-background.svg"],"./..\\images\\icons\\list-marker\\check-list-marker.svg":[["check-list-marker.4fc3839d.svg","images/icons/list-marker/check-list-marker.svg"],"images/icons/list-marker/check-list-marker.svg"],"./..\\images\\footer-bcg\\footer-bcg-mobile@1x.png":[["footer-bcg-mobile@1x.1a961509.png","images/footer-bcg/footer-bcg-mobile@1x.png"],"images/footer-bcg/footer-bcg-mobile@1x.png"],"./..\\images\\footer-bcg\\footer-bcg-tablet@1x.png":[["footer-bcg-tablet@1x.15d6f672.png","images/footer-bcg/footer-bcg-tablet@1x.png"],"images/footer-bcg/footer-bcg-tablet@1x.png"],"./..\\images\\footer-bcg\\footer-bcg-desktop@1x.png":[["footer-bcg-desktop@1x.95b67bd3.png","images/footer-bcg/footer-bcg-desktop@1x.png"],"images/footer-bcg/footer-bcg-desktop@1x.png"],"./..\\images\\arrow.png":[["arrow.dd9de399.png","images/arrow.png"],"images/arrow.png"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-arrow-prev.svg":[["slider-arrow-prev.487eb45b.svg","images/slider/slider-arrow-prev.svg"],"images/slider/slider-arrow-prev.svg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-arrow-next.svg":[["slider-arrow-next.2ccfb1e8.svg","images/slider/slider-arrow-next.svg"],"images/slider/slider-arrow-next.svg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-54px-00@1x.jpg":[["slider-54px-00@1x.2d37c076.jpg","images/slider/slider-54px-00@1x.jpg"],"images/slider/slider-54px-00@1x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-108px-00@2x.jpg":[["slider-108px-00@2x.e9c39fdb.jpg","images/slider/slider-108px-00@2x.jpg"],"images/slider/slider-108px-00@2x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-54px-01@1x.jpg":[["slider-54px-01@1x.55b6ba2a.jpg","images/slider/slider-54px-01@1x.jpg"],"images/slider/slider-54px-01@1x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-108px-01@2x.jpg":[["slider-108px-01@2x.0eca9c9f.jpg","images/slider/slider-108px-01@2x.jpg"],"images/slider/slider-108px-01@2x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-54px-02@1x.jpg":[["slider-54px-02@1x.4a465696.jpg","images/slider/slider-54px-02@1x.jpg"],"images/slider/slider-54px-02@1x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-108px-02@2x.jpg":[["slider-108px-02@2x.88b0078a.jpg","images/slider/slider-108px-02@2x.jpg"],"images/slider/slider-108px-02@2x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-54px-03@1x.jpg":[["slider-54px-03@1x.edaff8a6.jpg","images/slider/slider-54px-03@1x.jpg"],"images/slider/slider-54px-03@1x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-108px-03@2x.jpg":[["slider-108px-03@2x.124a1f87.jpg","images/slider/slider-108px-03@2x.jpg"],"images/slider/slider-108px-03@2x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-54px-04@1x.jpg":[["slider-54px-04@1x.39543c3a.jpg","images/slider/slider-54px-04@1x.jpg"],"images/slider/slider-54px-04@1x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-108px-04@2x.jpg":[["slider-108px-04@2x.93c15ca6.jpg","images/slider/slider-108px-04@2x.jpg"],"images/slider/slider-108px-04@2x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-54px-05@1x.jpg":[["slider-54px-05@1x.c6512a90.jpg","images/slider/slider-54px-05@1x.jpg"],"images/slider/slider-54px-05@1x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-108px-05@2x.jpg":[["slider-108px-05@2x.2286a5a7.jpg","images/slider/slider-108px-05@2x.jpg"],"images/slider/slider-108px-05@2x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-54px-06@1x.jpg":[["slider-54px-06@1x.c40f10c9.jpg","images/slider/slider-54px-06@1x.jpg"],"images/slider/slider-54px-06@1x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-108px-06@2x.jpg":[["slider-108px-06@2x.bd2066b7.jpg","images/slider/slider-108px-06@2x.jpg"],"images/slider/slider-108px-06@2x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-54px-07@1x.jpg":[["slider-54px-07@1x.2b788380.jpg","images/slider/slider-54px-07@1x.jpg"],"images/slider/slider-54px-07@1x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-108px-07@2x.jpg":[["slider-108px-07@2x.e4d823b4.jpg","images/slider/slider-108px-07@2x.jpg"],"images/slider/slider-108px-07@2x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-54px-08@1x.jpg":[["slider-54px-08@1x.c05c73f1.jpg","images/slider/slider-54px-08@1x.jpg"],"images/slider/slider-54px-08@1x.jpg"],"C:\\Users\\theca\\Documents\\GitHub\\7-bodies-in-main-hell-en\\src\\images\\slider\\slider-108px-08@2x.jpg":[["slider-108px-08@2x.b9c4fffe.jpg","images/slider/slider-108px-08@2x.jpg"],"images/slider/slider-108px-08@2x.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62371" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map