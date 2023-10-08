(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/htmx.org/dist/htmx.min.js
  var require_htmx_min = __commonJS({
    "node_modules/htmx.org/dist/htmx.min.js"(exports, module) {
      (function(e2, t2) {
        if (typeof define === "function" && define.amd) {
          define([], t2);
        } else if (typeof module === "object" && module.exports) {
          module.exports = t2();
        } else {
          e2.htmx = e2.htmx || t2();
        }
      })(typeof self !== "undefined" ? self : exports, function() {
        return function() {
          "use strict";
          var Y = { onLoad: t, process: Pt, on: Z, off: K, trigger: fe, ajax: wr, find: E, findAll: f, closest: v, values: function(e2, t2) {
            var r2 = nr(e2, t2 || "post");
            return r2.values;
          }, remove: U, addClass: B, removeClass: n, toggleClass: V, takeClass: j, defineExtension: qr, removeExtension: Hr, logAll: X, logNone: F, logger: null, config: { historyEnabled: true, historyCacheSize: 10, refreshOnHistoryMiss: false, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: true, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: true, allowScriptTags: true, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: false, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: false, scrollBehavior: "smooth", defaultFocusScroll: false, getCacheBusterParam: false, globalViewTransitions: false, methodsThatUseUrlParams: ["get"], selfRequestsOnly: false }, parseInterval: d, _: e, createEventSource: function(e2) {
            return new EventSource(e2, { withCredentials: true });
          }, createWebSocket: function(e2) {
            var t2 = new WebSocket(e2, []);
            t2.binaryType = Y.config.wsBinaryType;
            return t2;
          }, version: "1.9.6" };
          var r = { addTriggerHandler: St, bodyContains: oe, canAccessLocalStorage: M, findThisElement: de, filterValues: lr, hasAttribute: o, getAttributeValue: ee, getClosestAttributeValue: re, getClosestMatch: c, getExpressionVars: xr, getHeaders: sr, getInputValues: nr, getInternalData: ie, getSwapSpecification: fr, getTriggerSpecs: Ze, getTarget: ge, makeFragment: l, mergeObjects: se, makeSettleInfo: T, oobSwap: ye, querySelectorExt: le, selectAndSwap: Fe, settleImmediately: Wt, shouldCancel: tt, triggerEvent: fe, triggerErrorEvent: ue, withExtensions: C };
          var b = ["get", "post", "put", "delete", "patch"];
          var w = b.map(function(e2) {
            return "[hx-" + e2 + "], [data-hx-" + e2 + "]";
          }).join(", ");
          function d(e2) {
            if (e2 == void 0) {
              return void 0;
            }
            if (e2.slice(-2) == "ms") {
              return parseFloat(e2.slice(0, -2)) || void 0;
            }
            if (e2.slice(-1) == "s") {
              return parseFloat(e2.slice(0, -1)) * 1e3 || void 0;
            }
            if (e2.slice(-1) == "m") {
              return parseFloat(e2.slice(0, -1)) * 1e3 * 60 || void 0;
            }
            return parseFloat(e2) || void 0;
          }
          function Q(e2, t2) {
            return e2.getAttribute && e2.getAttribute(t2);
          }
          function o(e2, t2) {
            return e2.hasAttribute && (e2.hasAttribute(t2) || e2.hasAttribute("data-" + t2));
          }
          function ee(e2, t2) {
            return Q(e2, t2) || Q(e2, "data-" + t2);
          }
          function u(e2) {
            return e2.parentElement;
          }
          function te() {
            return document;
          }
          function c(e2, t2) {
            while (e2 && !t2(e2)) {
              e2 = u(e2);
            }
            return e2 ? e2 : null;
          }
          function O(e2, t2, r2) {
            var n2 = ee(t2, r2);
            var i2 = ee(t2, "hx-disinherit");
            if (e2 !== t2 && i2 && (i2 === "*" || i2.split(" ").indexOf(r2) >= 0)) {
              return "unset";
            } else {
              return n2;
            }
          }
          function re(t2, r2) {
            var n2 = null;
            c(t2, function(e2) {
              return n2 = O(t2, e2, r2);
            });
            if (n2 !== "unset") {
              return n2;
            }
          }
          function h(e2, t2) {
            var r2 = e2.matches || e2.matchesSelector || e2.msMatchesSelector || e2.mozMatchesSelector || e2.webkitMatchesSelector || e2.oMatchesSelector;
            return r2 && r2.call(e2, t2);
          }
          function q(e2) {
            var t2 = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
            var r2 = t2.exec(e2);
            if (r2) {
              return r2[1].toLowerCase();
            } else {
              return "";
            }
          }
          function i(e2, t2) {
            var r2 = new DOMParser();
            var n2 = r2.parseFromString(e2, "text/html");
            var i2 = n2.body;
            while (t2 > 0) {
              t2--;
              i2 = i2.firstChild;
            }
            if (i2 == null) {
              i2 = te().createDocumentFragment();
            }
            return i2;
          }
          function H(e2) {
            return e2.match(/<body/);
          }
          function l(e2) {
            var t2 = !H(e2);
            if (Y.config.useTemplateFragments && t2) {
              var r2 = i("<body><template>" + e2 + "</template></body>", 0);
              return r2.querySelector("template").content;
            } else {
              var n2 = q(e2);
              switch (n2) {
                case "thead":
                case "tbody":
                case "tfoot":
                case "colgroup":
                case "caption":
                  return i("<table>" + e2 + "</table>", 1);
                case "col":
                  return i("<table><colgroup>" + e2 + "</colgroup></table>", 2);
                case "tr":
                  return i("<table><tbody>" + e2 + "</tbody></table>", 2);
                case "td":
                case "th":
                  return i("<table><tbody><tr>" + e2 + "</tr></tbody></table>", 3);
                case "script":
                case "style":
                  return i("<div>" + e2 + "</div>", 1);
                default:
                  return i(e2, 0);
              }
            }
          }
          function ne(e2) {
            if (e2) {
              e2();
            }
          }
          function L(e2, t2) {
            return Object.prototype.toString.call(e2) === "[object " + t2 + "]";
          }
          function A(e2) {
            return L(e2, "Function");
          }
          function N(e2) {
            return L(e2, "Object");
          }
          function ie(e2) {
            var t2 = "htmx-internal-data";
            var r2 = e2[t2];
            if (!r2) {
              r2 = e2[t2] = {};
            }
            return r2;
          }
          function I(e2) {
            var t2 = [];
            if (e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                t2.push(e2[r2]);
              }
            }
            return t2;
          }
          function ae(e2, t2) {
            if (e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                t2(e2[r2]);
              }
            }
          }
          function P(e2) {
            var t2 = e2.getBoundingClientRect();
            var r2 = t2.top;
            var n2 = t2.bottom;
            return r2 < window.innerHeight && n2 >= 0;
          }
          function oe(e2) {
            if (e2.getRootNode && e2.getRootNode() instanceof window.ShadowRoot) {
              return te().body.contains(e2.getRootNode().host);
            } else {
              return te().body.contains(e2);
            }
          }
          function k(e2) {
            return e2.trim().split(/\s+/);
          }
          function se(e2, t2) {
            for (var r2 in t2) {
              if (t2.hasOwnProperty(r2)) {
                e2[r2] = t2[r2];
              }
            }
            return e2;
          }
          function S(e2) {
            try {
              return JSON.parse(e2);
            } catch (e3) {
              y(e3);
              return null;
            }
          }
          function M() {
            var e2 = "htmx:localStorageTest";
            try {
              localStorage.setItem(e2, e2);
              localStorage.removeItem(e2);
              return true;
            } catch (e3) {
              return false;
            }
          }
          function D(t2) {
            try {
              var e2 = new URL(t2);
              if (e2) {
                t2 = e2.pathname + e2.search;
              }
              if (!t2.match("^/$")) {
                t2 = t2.replace(/\/+$/, "");
              }
              return t2;
            } catch (e3) {
              return t2;
            }
          }
          function e(e) {
            return gr(te().body, function() {
              return eval(e);
            });
          }
          function t(t2) {
            var e2 = Y.on("htmx:load", function(e3) {
              t2(e3.detail.elt);
            });
            return e2;
          }
          function X() {
            Y.logger = function(e2, t2, r2) {
              if (console) {
                console.log(t2, e2, r2);
              }
            };
          }
          function F() {
            Y.logger = null;
          }
          function E(e2, t2) {
            if (t2) {
              return e2.querySelector(t2);
            } else {
              return E(te(), e2);
            }
          }
          function f(e2, t2) {
            if (t2) {
              return e2.querySelectorAll(t2);
            } else {
              return f(te(), e2);
            }
          }
          function U(e2, t2) {
            e2 = s(e2);
            if (t2) {
              setTimeout(function() {
                U(e2);
                e2 = null;
              }, t2);
            } else {
              e2.parentElement.removeChild(e2);
            }
          }
          function B(e2, t2, r2) {
            e2 = s(e2);
            if (r2) {
              setTimeout(function() {
                B(e2, t2);
                e2 = null;
              }, r2);
            } else {
              e2.classList && e2.classList.add(t2);
            }
          }
          function n(e2, t2, r2) {
            e2 = s(e2);
            if (r2) {
              setTimeout(function() {
                n(e2, t2);
                e2 = null;
              }, r2);
            } else {
              if (e2.classList) {
                e2.classList.remove(t2);
                if (e2.classList.length === 0) {
                  e2.removeAttribute("class");
                }
              }
            }
          }
          function V(e2, t2) {
            e2 = s(e2);
            e2.classList.toggle(t2);
          }
          function j(e2, t2) {
            e2 = s(e2);
            ae(e2.parentElement.children, function(e3) {
              n(e3, t2);
            });
            B(e2, t2);
          }
          function v(e2, t2) {
            e2 = s(e2);
            if (e2.closest) {
              return e2.closest(t2);
            } else {
              do {
                if (e2 == null || h(e2, t2)) {
                  return e2;
                }
              } while (e2 = e2 && u(e2));
              return null;
            }
          }
          function g(e2, t2) {
            return e2.substring(0, t2.length) === t2;
          }
          function _(e2, t2) {
            return e2.substring(e2.length - t2.length) === t2;
          }
          function z(e2) {
            var t2 = e2.trim();
            if (g(t2, "<") && _(t2, "/>")) {
              return t2.substring(1, t2.length - 2);
            } else {
              return t2;
            }
          }
          function W(e2, t2) {
            if (t2.indexOf("closest ") === 0) {
              return [v(e2, z(t2.substr(8)))];
            } else if (t2.indexOf("find ") === 0) {
              return [E(e2, z(t2.substr(5)))];
            } else if (t2.indexOf("next ") === 0) {
              return [$(e2, z(t2.substr(5)))];
            } else if (t2.indexOf("previous ") === 0) {
              return [G(e2, z(t2.substr(9)))];
            } else if (t2 === "document") {
              return [document];
            } else if (t2 === "window") {
              return [window];
            } else if (t2 === "body") {
              return [document.body];
            } else {
              return te().querySelectorAll(z(t2));
            }
          }
          var $ = function(e2, t2) {
            var r2 = te().querySelectorAll(t2);
            for (var n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2];
              if (i2.compareDocumentPosition(e2) === Node.DOCUMENT_POSITION_PRECEDING) {
                return i2;
              }
            }
          };
          var G = function(e2, t2) {
            var r2 = te().querySelectorAll(t2);
            for (var n2 = r2.length - 1; n2 >= 0; n2--) {
              var i2 = r2[n2];
              if (i2.compareDocumentPosition(e2) === Node.DOCUMENT_POSITION_FOLLOWING) {
                return i2;
              }
            }
          };
          function le(e2, t2) {
            if (t2) {
              return W(e2, t2)[0];
            } else {
              return W(te().body, e2)[0];
            }
          }
          function s(e2) {
            if (L(e2, "String")) {
              return E(e2);
            } else {
              return e2;
            }
          }
          function J(e2, t2, r2) {
            if (A(t2)) {
              return { target: te().body, event: e2, listener: t2 };
            } else {
              return { target: s(e2), event: t2, listener: r2 };
            }
          }
          function Z(t2, r2, n2) {
            Nr(function() {
              var e3 = J(t2, r2, n2);
              e3.target.addEventListener(e3.event, e3.listener);
            });
            var e2 = A(r2);
            return e2 ? r2 : n2;
          }
          function K(t2, r2, n2) {
            Nr(function() {
              var e2 = J(t2, r2, n2);
              e2.target.removeEventListener(e2.event, e2.listener);
            });
            return A(r2) ? r2 : n2;
          }
          var he = te().createElement("output");
          function ve(e2, t2) {
            var r2 = re(e2, t2);
            if (r2) {
              if (r2 === "this") {
                return [de(e2, t2)];
              } else {
                var n2 = W(e2, r2);
                if (n2.length === 0) {
                  y('The selector "' + r2 + '" on ' + t2 + " returned no matches!");
                  return [he];
                } else {
                  return n2;
                }
              }
            }
          }
          function de(e2, t2) {
            return c(e2, function(e3) {
              return ee(e3, t2) != null;
            });
          }
          function ge(e2) {
            var t2 = re(e2, "hx-target");
            if (t2) {
              if (t2 === "this") {
                return de(e2, "hx-target");
              } else {
                return le(e2, t2);
              }
            } else {
              var r2 = ie(e2);
              if (r2.boosted) {
                return te().body;
              } else {
                return e2;
              }
            }
          }
          function me(e2) {
            var t2 = Y.config.attributesToSettle;
            for (var r2 = 0; r2 < t2.length; r2++) {
              if (e2 === t2[r2]) {
                return true;
              }
            }
            return false;
          }
          function pe(t2, r2) {
            ae(t2.attributes, function(e2) {
              if (!r2.hasAttribute(e2.name) && me(e2.name)) {
                t2.removeAttribute(e2.name);
              }
            });
            ae(r2.attributes, function(e2) {
              if (me(e2.name)) {
                t2.setAttribute(e2.name, e2.value);
              }
            });
          }
          function xe(e2, t2) {
            var r2 = Lr(t2);
            for (var n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2];
              try {
                if (i2.isInlineSwap(e2)) {
                  return true;
                }
              } catch (e3) {
                y(e3);
              }
            }
            return e2 === "outerHTML";
          }
          function ye(e2, i2, a2) {
            var t2 = "#" + Q(i2, "id");
            var o2 = "outerHTML";
            if (e2 === "true") {
            } else if (e2.indexOf(":") > 0) {
              o2 = e2.substr(0, e2.indexOf(":"));
              t2 = e2.substr(e2.indexOf(":") + 1, e2.length);
            } else {
              o2 = e2;
            }
            var r2 = te().querySelectorAll(t2);
            if (r2) {
              ae(r2, function(e3) {
                var t3;
                var r3 = i2.cloneNode(true);
                t3 = te().createDocumentFragment();
                t3.appendChild(r3);
                if (!xe(o2, e3)) {
                  t3 = r3;
                }
                var n2 = { shouldSwap: true, target: e3, fragment: t3 };
                if (!fe(e3, "htmx:oobBeforeSwap", n2))
                  return;
                e3 = n2.target;
                if (n2["shouldSwap"]) {
                  De(o2, e3, e3, t3, a2);
                }
                ae(a2.elts, function(e4) {
                  fe(e4, "htmx:oobAfterSwap", n2);
                });
              });
              i2.parentNode.removeChild(i2);
            } else {
              i2.parentNode.removeChild(i2);
              ue(te().body, "htmx:oobErrorNoTarget", { content: i2 });
            }
            return e2;
          }
          function be(e2, t2, r2) {
            var n2 = re(e2, "hx-select-oob");
            if (n2) {
              var i2 = n2.split(",");
              for (let e3 = 0; e3 < i2.length; e3++) {
                var a2 = i2[e3].split(":", 2);
                var o2 = a2[0].trim();
                if (o2.indexOf("#") === 0) {
                  o2 = o2.substring(1);
                }
                var s2 = a2[1] || "true";
                var l2 = t2.querySelector("#" + o2);
                if (l2) {
                  ye(s2, l2, r2);
                }
              }
            }
            ae(f(t2, "[hx-swap-oob], [data-hx-swap-oob]"), function(e3) {
              var t3 = ee(e3, "hx-swap-oob");
              if (t3 != null) {
                ye(t3, e3, r2);
              }
            });
          }
          function we(e2) {
            ae(f(e2, "[hx-preserve], [data-hx-preserve]"), function(e3) {
              var t2 = ee(e3, "id");
              var r2 = te().getElementById(t2);
              if (r2 != null) {
                e3.parentNode.replaceChild(r2, e3);
              }
            });
          }
          function Se(o2, e2, s2) {
            ae(e2.querySelectorAll("[id]"), function(e3) {
              var t2 = Q(e3, "id");
              if (t2 && t2.length > 0) {
                var r2 = t2.replace("'", "\\'");
                var n2 = e3.tagName.replace(":", "\\:");
                var i2 = o2.querySelector(n2 + "[id='" + r2 + "']");
                if (i2 && i2 !== o2) {
                  var a2 = e3.cloneNode();
                  pe(e3, i2);
                  s2.tasks.push(function() {
                    pe(e3, a2);
                  });
                }
              }
            });
          }
          function Ee(e2) {
            return function() {
              n(e2, Y.config.addedClass);
              Pt(e2);
              Ct(e2);
              Ce(e2);
              fe(e2, "htmx:load");
            };
          }
          function Ce(e2) {
            var t2 = "[autofocus]";
            var r2 = h(e2, t2) ? e2 : e2.querySelector(t2);
            if (r2 != null) {
              r2.focus();
            }
          }
          function a(e2, t2, r2, n2) {
            Se(e2, r2, n2);
            while (r2.childNodes.length > 0) {
              var i2 = r2.firstChild;
              B(i2, Y.config.addedClass);
              e2.insertBefore(i2, t2);
              if (i2.nodeType !== Node.TEXT_NODE && i2.nodeType !== Node.COMMENT_NODE) {
                n2.tasks.push(Ee(i2));
              }
            }
          }
          function Te(e2, t2) {
            var r2 = 0;
            while (r2 < e2.length) {
              t2 = (t2 << 5) - t2 + e2.charCodeAt(r2++) | 0;
            }
            return t2;
          }
          function Re(e2) {
            var t2 = 0;
            if (e2.attributes) {
              for (var r2 = 0; r2 < e2.attributes.length; r2++) {
                var n2 = e2.attributes[r2];
                if (n2.value) {
                  t2 = Te(n2.name, t2);
                  t2 = Te(n2.value, t2);
                }
              }
            }
            return t2;
          }
          function Oe(t2) {
            var r2 = ie(t2);
            if (r2.onHandlers) {
              for (let e2 = 0; e2 < r2.onHandlers.length; e2++) {
                const n2 = r2.onHandlers[e2];
                t2.removeEventListener(n2.event, n2.listener);
              }
              delete r2.onHandlers;
            }
          }
          function qe(e2) {
            var t2 = ie(e2);
            if (t2.timeout) {
              clearTimeout(t2.timeout);
            }
            if (t2.webSocket) {
              t2.webSocket.close();
            }
            if (t2.sseEventSource) {
              t2.sseEventSource.close();
            }
            if (t2.listenerInfos) {
              ae(t2.listenerInfos, function(e3) {
                if (e3.on) {
                  e3.on.removeEventListener(e3.trigger, e3.listener);
                }
              });
            }
            if (t2.initHash) {
              t2.initHash = null;
            }
            Oe(e2);
          }
          function m(e2) {
            fe(e2, "htmx:beforeCleanupElement");
            qe(e2);
            if (e2.children) {
              ae(e2.children, function(e3) {
                m(e3);
              });
            }
          }
          function He(t2, e2, r2) {
            if (t2.tagName === "BODY") {
              return ke(t2, e2, r2);
            } else {
              var n2;
              var i2 = t2.previousSibling;
              a(u(t2), t2, e2, r2);
              if (i2 == null) {
                n2 = u(t2).firstChild;
              } else {
                n2 = i2.nextSibling;
              }
              ie(t2).replacedWith = n2;
              r2.elts = r2.elts.filter(function(e3) {
                return e3 != t2;
              });
              while (n2 && n2 !== t2) {
                if (n2.nodeType === Node.ELEMENT_NODE) {
                  r2.elts.push(n2);
                }
                n2 = n2.nextElementSibling;
              }
              m(t2);
              u(t2).removeChild(t2);
            }
          }
          function Le(e2, t2, r2) {
            return a(e2, e2.firstChild, t2, r2);
          }
          function Ae(e2, t2, r2) {
            return a(u(e2), e2, t2, r2);
          }
          function Ne(e2, t2, r2) {
            return a(e2, null, t2, r2);
          }
          function Ie(e2, t2, r2) {
            return a(u(e2), e2.nextSibling, t2, r2);
          }
          function Pe(e2, t2, r2) {
            m(e2);
            return u(e2).removeChild(e2);
          }
          function ke(e2, t2, r2) {
            var n2 = e2.firstChild;
            a(e2, n2, t2, r2);
            if (n2) {
              while (n2.nextSibling) {
                m(n2.nextSibling);
                e2.removeChild(n2.nextSibling);
              }
              m(n2);
              e2.removeChild(n2);
            }
          }
          function Me(e2, t2, r2) {
            var n2 = r2 || re(e2, "hx-select");
            if (n2) {
              var i2 = te().createDocumentFragment();
              ae(t2.querySelectorAll(n2), function(e3) {
                i2.appendChild(e3);
              });
              t2 = i2;
            }
            return t2;
          }
          function De(e2, t2, r2, n2, i2) {
            switch (e2) {
              case "none":
                return;
              case "outerHTML":
                He(r2, n2, i2);
                return;
              case "afterbegin":
                Le(r2, n2, i2);
                return;
              case "beforebegin":
                Ae(r2, n2, i2);
                return;
              case "beforeend":
                Ne(r2, n2, i2);
                return;
              case "afterend":
                Ie(r2, n2, i2);
                return;
              case "delete":
                Pe(r2, n2, i2);
                return;
              default:
                var a2 = Lr(t2);
                for (var o2 = 0; o2 < a2.length; o2++) {
                  var s2 = a2[o2];
                  try {
                    var l2 = s2.handleSwap(e2, r2, n2, i2);
                    if (l2) {
                      if (typeof l2.length !== "undefined") {
                        for (var u2 = 0; u2 < l2.length; u2++) {
                          var f2 = l2[u2];
                          if (f2.nodeType !== Node.TEXT_NODE && f2.nodeType !== Node.COMMENT_NODE) {
                            i2.tasks.push(Ee(f2));
                          }
                        }
                      }
                      return;
                    }
                  } catch (e3) {
                    y(e3);
                  }
                }
                if (e2 === "innerHTML") {
                  ke(r2, n2, i2);
                } else {
                  De(Y.config.defaultSwapStyle, t2, r2, n2, i2);
                }
            }
          }
          function Xe(e2) {
            if (e2.indexOf("<title") > -1) {
              var t2 = e2.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "");
              var r2 = t2.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);
              if (r2) {
                return r2[2];
              }
            }
          }
          function Fe(e2, t2, r2, n2, i2, a2) {
            i2.title = Xe(n2);
            var o2 = l(n2);
            if (o2) {
              be(r2, o2, i2);
              o2 = Me(r2, o2, a2);
              we(o2);
              return De(e2, r2, t2, o2, i2);
            }
          }
          function Ue(e2, t2, r2) {
            var n2 = e2.getResponseHeader(t2);
            if (n2.indexOf("{") === 0) {
              var i2 = S(n2);
              for (var a2 in i2) {
                if (i2.hasOwnProperty(a2)) {
                  var o2 = i2[a2];
                  if (!N(o2)) {
                    o2 = { value: o2 };
                  }
                  fe(r2, a2, o2);
                }
              }
            } else {
              var s2 = n2.split(",");
              for (var l2 = 0; l2 < s2.length; l2++) {
                fe(r2, s2[l2].trim(), []);
              }
            }
          }
          var Be = /\s/;
          var p = /[\s,]/;
          var Ve = /[_$a-zA-Z]/;
          var je = /[_$a-zA-Z0-9]/;
          var _e = ['"', "'", "/"];
          var ze = /[^\s]/;
          function We(e2) {
            var t2 = [];
            var r2 = 0;
            while (r2 < e2.length) {
              if (Ve.exec(e2.charAt(r2))) {
                var n2 = r2;
                while (je.exec(e2.charAt(r2 + 1))) {
                  r2++;
                }
                t2.push(e2.substr(n2, r2 - n2 + 1));
              } else if (_e.indexOf(e2.charAt(r2)) !== -1) {
                var i2 = e2.charAt(r2);
                var n2 = r2;
                r2++;
                while (r2 < e2.length && e2.charAt(r2) !== i2) {
                  if (e2.charAt(r2) === "\\") {
                    r2++;
                  }
                  r2++;
                }
                t2.push(e2.substr(n2, r2 - n2 + 1));
              } else {
                var a2 = e2.charAt(r2);
                t2.push(a2);
              }
              r2++;
            }
            return t2;
          }
          function $e(e2, t2, r2) {
            return Ve.exec(e2.charAt(0)) && e2 !== "true" && e2 !== "false" && e2 !== "this" && e2 !== r2 && t2 !== ".";
          }
          function Ge(e2, t2, r2) {
            if (t2[0] === "[") {
              t2.shift();
              var n2 = 1;
              var i2 = " return (function(" + r2 + "){ return (";
              var a2 = null;
              while (t2.length > 0) {
                var o2 = t2[0];
                if (o2 === "]") {
                  n2--;
                  if (n2 === 0) {
                    if (a2 === null) {
                      i2 = i2 + "true";
                    }
                    t2.shift();
                    i2 += ")})";
                    try {
                      var s2 = gr(e2, function() {
                        return Function(i2)();
                      }, function() {
                        return true;
                      });
                      s2.source = i2;
                      return s2;
                    } catch (e3) {
                      ue(te().body, "htmx:syntax:error", { error: e3, source: i2 });
                      return null;
                    }
                  }
                } else if (o2 === "[") {
                  n2++;
                }
                if ($e(o2, a2, r2)) {
                  i2 += "((" + r2 + "." + o2 + ") ? (" + r2 + "." + o2 + ") : (window." + o2 + "))";
                } else {
                  i2 = i2 + o2;
                }
                a2 = t2.shift();
              }
            }
          }
          function x(e2, t2) {
            var r2 = "";
            while (e2.length > 0 && !e2[0].match(t2)) {
              r2 += e2.shift();
            }
            return r2;
          }
          var Je = "input, textarea, select";
          function Ze(e2) {
            var t2 = ee(e2, "hx-trigger");
            var r2 = [];
            if (t2) {
              var n2 = We(t2);
              do {
                x(n2, ze);
                var i2 = n2.length;
                var a2 = x(n2, /[,\[\s]/);
                if (a2 !== "") {
                  if (a2 === "every") {
                    var o2 = { trigger: "every" };
                    x(n2, ze);
                    o2.pollInterval = d(x(n2, /[,\[\s]/));
                    x(n2, ze);
                    var s2 = Ge(e2, n2, "event");
                    if (s2) {
                      o2.eventFilter = s2;
                    }
                    r2.push(o2);
                  } else if (a2.indexOf("sse:") === 0) {
                    r2.push({ trigger: "sse", sseEvent: a2.substr(4) });
                  } else {
                    var l2 = { trigger: a2 };
                    var s2 = Ge(e2, n2, "event");
                    if (s2) {
                      l2.eventFilter = s2;
                    }
                    while (n2.length > 0 && n2[0] !== ",") {
                      x(n2, ze);
                      var u2 = n2.shift();
                      if (u2 === "changed") {
                        l2.changed = true;
                      } else if (u2 === "once") {
                        l2.once = true;
                      } else if (u2 === "consume") {
                        l2.consume = true;
                      } else if (u2 === "delay" && n2[0] === ":") {
                        n2.shift();
                        l2.delay = d(x(n2, p));
                      } else if (u2 === "from" && n2[0] === ":") {
                        n2.shift();
                        var f2 = x(n2, p);
                        if (f2 === "closest" || f2 === "find" || f2 === "next" || f2 === "previous") {
                          n2.shift();
                          f2 += " " + x(n2, p);
                        }
                        l2.from = f2;
                      } else if (u2 === "target" && n2[0] === ":") {
                        n2.shift();
                        l2.target = x(n2, p);
                      } else if (u2 === "throttle" && n2[0] === ":") {
                        n2.shift();
                        l2.throttle = d(x(n2, p));
                      } else if (u2 === "queue" && n2[0] === ":") {
                        n2.shift();
                        l2.queue = x(n2, p);
                      } else if ((u2 === "root" || u2 === "threshold") && n2[0] === ":") {
                        n2.shift();
                        l2[u2] = x(n2, p);
                      } else {
                        ue(e2, "htmx:syntax:error", { token: n2.shift() });
                      }
                    }
                    r2.push(l2);
                  }
                }
                if (n2.length === i2) {
                  ue(e2, "htmx:syntax:error", { token: n2.shift() });
                }
                x(n2, ze);
              } while (n2[0] === "," && n2.shift());
            }
            if (r2.length > 0) {
              return r2;
            } else if (h(e2, "form")) {
              return [{ trigger: "submit" }];
            } else if (h(e2, 'input[type="button"], input[type="submit"]')) {
              return [{ trigger: "click" }];
            } else if (h(e2, Je)) {
              return [{ trigger: "change" }];
            } else {
              return [{ trigger: "click" }];
            }
          }
          function Ke(e2) {
            ie(e2).cancelled = true;
          }
          function Ye(e2, t2, r2) {
            var n2 = ie(e2);
            n2.timeout = setTimeout(function() {
              if (oe(e2) && n2.cancelled !== true) {
                if (!nt(r2, e2, Mt("hx:poll:trigger", { triggerSpec: r2, target: e2 }))) {
                  t2(e2);
                }
                Ye(e2, t2, r2);
              }
            }, r2.pollInterval);
          }
          function Qe(e2) {
            return location.hostname === e2.hostname && Q(e2, "href") && Q(e2, "href").indexOf("#") !== 0;
          }
          function et(t2, r2, e2) {
            if (t2.tagName === "A" && Qe(t2) && (t2.target === "" || t2.target === "_self") || t2.tagName === "FORM") {
              r2.boosted = true;
              var n2, i2;
              if (t2.tagName === "A") {
                n2 = "get";
                i2 = Q(t2, "href");
              } else {
                var a2 = Q(t2, "method");
                n2 = a2 ? a2.toLowerCase() : "get";
                if (n2 === "get") {
                }
                i2 = Q(t2, "action");
              }
              e2.forEach(function(e3) {
                it(t2, function(e4, t3) {
                  if (v(e4, Y.config.disableSelector)) {
                    m(e4);
                    return;
                  }
                  ce(n2, i2, e4, t3);
                }, r2, e3, true);
              });
            }
          }
          function tt(e2, t2) {
            if (e2.type === "submit" || e2.type === "click") {
              if (t2.tagName === "FORM") {
                return true;
              }
              if (h(t2, 'input[type="submit"], button') && v(t2, "form") !== null) {
                return true;
              }
              if (t2.tagName === "A" && t2.href && (t2.getAttribute("href") === "#" || t2.getAttribute("href").indexOf("#") !== 0)) {
                return true;
              }
            }
            return false;
          }
          function rt(e2, t2) {
            return ie(e2).boosted && e2.tagName === "A" && t2.type === "click" && (t2.ctrlKey || t2.metaKey);
          }
          function nt(e2, t2, r2) {
            var n2 = e2.eventFilter;
            if (n2) {
              try {
                return n2.call(t2, r2) !== true;
              } catch (e3) {
                ue(te().body, "htmx:eventFilter:error", { error: e3, source: n2.source });
                return true;
              }
            }
            return false;
          }
          function it(a2, o2, e2, s2, l2) {
            var u2 = ie(a2);
            var t2;
            if (s2.from) {
              t2 = W(a2, s2.from);
            } else {
              t2 = [a2];
            }
            if (s2.changed) {
              t2.forEach(function(e3) {
                var t3 = ie(e3);
                t3.lastValue = e3.value;
              });
            }
            ae(t2, function(n2) {
              var i2 = function(e3) {
                if (!oe(a2)) {
                  n2.removeEventListener(s2.trigger, i2);
                  return;
                }
                if (rt(a2, e3)) {
                  return;
                }
                if (l2 || tt(e3, a2)) {
                  e3.preventDefault();
                }
                if (nt(s2, a2, e3)) {
                  return;
                }
                var t3 = ie(e3);
                t3.triggerSpec = s2;
                if (t3.handledFor == null) {
                  t3.handledFor = [];
                }
                if (t3.handledFor.indexOf(a2) < 0) {
                  t3.handledFor.push(a2);
                  if (s2.consume) {
                    e3.stopPropagation();
                  }
                  if (s2.target && e3.target) {
                    if (!h(e3.target, s2.target)) {
                      return;
                    }
                  }
                  if (s2.once) {
                    if (u2.triggeredOnce) {
                      return;
                    } else {
                      u2.triggeredOnce = true;
                    }
                  }
                  if (s2.changed) {
                    var r2 = ie(n2);
                    if (r2.lastValue === n2.value) {
                      return;
                    }
                    r2.lastValue = n2.value;
                  }
                  if (u2.delayed) {
                    clearTimeout(u2.delayed);
                  }
                  if (u2.throttle) {
                    return;
                  }
                  if (s2.throttle) {
                    if (!u2.throttle) {
                      o2(a2, e3);
                      u2.throttle = setTimeout(function() {
                        u2.throttle = null;
                      }, s2.throttle);
                    }
                  } else if (s2.delay) {
                    u2.delayed = setTimeout(function() {
                      o2(a2, e3);
                    }, s2.delay);
                  } else {
                    fe(a2, "htmx:trigger");
                    o2(a2, e3);
                  }
                }
              };
              if (e2.listenerInfos == null) {
                e2.listenerInfos = [];
              }
              e2.listenerInfos.push({ trigger: s2.trigger, listener: i2, on: n2 });
              n2.addEventListener(s2.trigger, i2);
            });
          }
          var at = false;
          var ot = null;
          function st() {
            if (!ot) {
              ot = function() {
                at = true;
              };
              window.addEventListener("scroll", ot);
              setInterval(function() {
                if (at) {
                  at = false;
                  ae(te().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e2) {
                    lt(e2);
                  });
                }
              }, 200);
            }
          }
          function lt(t2) {
            if (!o(t2, "data-hx-revealed") && P(t2)) {
              t2.setAttribute("data-hx-revealed", "true");
              var e2 = ie(t2);
              if (e2.initHash) {
                fe(t2, "revealed");
              } else {
                t2.addEventListener("htmx:afterProcessNode", function(e3) {
                  fe(t2, "revealed");
                }, { once: true });
              }
            }
          }
          function ut(e2, t2, r2) {
            var n2 = k(r2);
            for (var i2 = 0; i2 < n2.length; i2++) {
              var a2 = n2[i2].split(/:(.+)/);
              if (a2[0] === "connect") {
                ft(e2, a2[1], 0);
              }
              if (a2[0] === "send") {
                ht(e2);
              }
            }
          }
          function ft(s2, r2, n2) {
            if (!oe(s2)) {
              return;
            }
            if (r2.indexOf("/") == 0) {
              var e2 = location.hostname + (location.port ? ":" + location.port : "");
              if (location.protocol == "https:") {
                r2 = "wss://" + e2 + r2;
              } else if (location.protocol == "http:") {
                r2 = "ws://" + e2 + r2;
              }
            }
            var t2 = Y.createWebSocket(r2);
            t2.onerror = function(e3) {
              ue(s2, "htmx:wsError", { error: e3, socket: t2 });
              ct(s2);
            };
            t2.onclose = function(e3) {
              if ([1006, 1012, 1013].indexOf(e3.code) >= 0) {
                var t3 = vt(n2);
                setTimeout(function() {
                  ft(s2, r2, n2 + 1);
                }, t3);
              }
            };
            t2.onopen = function(e3) {
              n2 = 0;
            };
            ie(s2).webSocket = t2;
            t2.addEventListener("message", function(e3) {
              if (ct(s2)) {
                return;
              }
              var t3 = e3.data;
              C(s2, function(e4) {
                t3 = e4.transformResponse(t3, null, s2);
              });
              var r3 = T(s2);
              var n3 = l(t3);
              var i2 = I(n3.children);
              for (var a2 = 0; a2 < i2.length; a2++) {
                var o2 = i2[a2];
                ye(ee(o2, "hx-swap-oob") || "true", o2, r3);
              }
              Wt(r3.tasks);
            });
          }
          function ct(e2) {
            if (!oe(e2)) {
              ie(e2).webSocket.close();
              return true;
            }
          }
          function ht(u2) {
            var f2 = c(u2, function(e2) {
              return ie(e2).webSocket != null;
            });
            if (f2) {
              u2.addEventListener(Ze(u2)[0].trigger, function(e2) {
                var t2 = ie(f2).webSocket;
                var r2 = sr(u2, f2);
                var n2 = nr(u2, "post");
                var i2 = n2.errors;
                var a2 = n2.values;
                var o2 = xr(u2);
                var s2 = se(a2, o2);
                var l2 = lr(s2, u2);
                l2["HEADERS"] = r2;
                if (i2 && i2.length > 0) {
                  fe(u2, "htmx:validation:halted", i2);
                  return;
                }
                t2.send(JSON.stringify(l2));
                if (tt(e2, u2)) {
                  e2.preventDefault();
                }
              });
            } else {
              ue(u2, "htmx:noWebSocketSourceError");
            }
          }
          function vt(e2) {
            var t2 = Y.config.wsReconnectDelay;
            if (typeof t2 === "function") {
              return t2(e2);
            }
            if (t2 === "full-jitter") {
              var r2 = Math.min(e2, 6);
              var n2 = 1e3 * Math.pow(2, r2);
              return n2 * Math.random();
            }
            y('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
          }
          function dt(e2, t2, r2) {
            var n2 = k(r2);
            for (var i2 = 0; i2 < n2.length; i2++) {
              var a2 = n2[i2].split(/:(.+)/);
              if (a2[0] === "connect") {
                gt(e2, a2[1]);
              }
              if (a2[0] === "swap") {
                mt(e2, a2[1]);
              }
            }
          }
          function gt(t2, e2) {
            var r2 = Y.createEventSource(e2);
            r2.onerror = function(e3) {
              ue(t2, "htmx:sseError", { error: e3, source: r2 });
              xt(t2);
            };
            ie(t2).sseEventSource = r2;
          }
          function mt(a2, o2) {
            var s2 = c(a2, yt);
            if (s2) {
              var l2 = ie(s2).sseEventSource;
              var u2 = function(e2) {
                if (xt(s2)) {
                  return;
                }
                if (!oe(a2)) {
                  l2.removeEventListener(o2, u2);
                  return;
                }
                var t2 = e2.data;
                C(a2, function(e3) {
                  t2 = e3.transformResponse(t2, null, a2);
                });
                var r2 = fr(a2);
                var n2 = ge(a2);
                var i2 = T(a2);
                Fe(r2.swapStyle, n2, a2, t2, i2);
                Wt(i2.tasks);
                fe(a2, "htmx:sseMessage", e2);
              };
              ie(a2).sseListener = u2;
              l2.addEventListener(o2, u2);
            } else {
              ue(a2, "htmx:noSSESourceError");
            }
          }
          function pt(e2, t2, r2) {
            var n2 = c(e2, yt);
            if (n2) {
              var i2 = ie(n2).sseEventSource;
              var a2 = function() {
                if (!xt(n2)) {
                  if (oe(e2)) {
                    t2(e2);
                  } else {
                    i2.removeEventListener(r2, a2);
                  }
                }
              };
              ie(e2).sseListener = a2;
              i2.addEventListener(r2, a2);
            } else {
              ue(e2, "htmx:noSSESourceError");
            }
          }
          function xt(e2) {
            if (!oe(e2)) {
              ie(e2).sseEventSource.close();
              return true;
            }
          }
          function yt(e2) {
            return ie(e2).sseEventSource != null;
          }
          function bt(e2, t2, r2, n2) {
            var i2 = function() {
              if (!r2.loaded) {
                r2.loaded = true;
                t2(e2);
              }
            };
            if (n2) {
              setTimeout(i2, n2);
            } else {
              i2();
            }
          }
          function wt(t2, i2, e2) {
            var a2 = false;
            ae(b, function(r2) {
              if (o(t2, "hx-" + r2)) {
                var n2 = ee(t2, "hx-" + r2);
                a2 = true;
                i2.path = n2;
                i2.verb = r2;
                e2.forEach(function(e3) {
                  St(t2, e3, i2, function(e4, t3) {
                    if (v(e4, Y.config.disableSelector)) {
                      m(e4);
                      return;
                    }
                    ce(r2, n2, e4, t3);
                  });
                });
              }
            });
            return a2;
          }
          function St(n2, e2, t2, r2) {
            if (e2.sseEvent) {
              pt(n2, r2, e2.sseEvent);
            } else if (e2.trigger === "revealed") {
              st();
              it(n2, r2, t2, e2);
              lt(n2);
            } else if (e2.trigger === "intersect") {
              var i2 = {};
              if (e2.root) {
                i2.root = le(n2, e2.root);
              }
              if (e2.threshold) {
                i2.threshold = parseFloat(e2.threshold);
              }
              var a2 = new IntersectionObserver(function(e3) {
                for (var t3 = 0; t3 < e3.length; t3++) {
                  var r3 = e3[t3];
                  if (r3.isIntersecting) {
                    fe(n2, "intersect");
                    break;
                  }
                }
              }, i2);
              a2.observe(n2);
              it(n2, r2, t2, e2);
            } else if (e2.trigger === "load") {
              if (!nt(e2, n2, Mt("load", { elt: n2 }))) {
                bt(n2, r2, t2, e2.delay);
              }
            } else if (e2.pollInterval) {
              t2.polling = true;
              Ye(n2, r2, e2);
            } else {
              it(n2, r2, t2, e2);
            }
          }
          function Et(e2) {
            if (Y.config.allowScriptTags && (e2.type === "text/javascript" || e2.type === "module" || e2.type === "")) {
              var t2 = te().createElement("script");
              ae(e2.attributes, function(e3) {
                t2.setAttribute(e3.name, e3.value);
              });
              t2.textContent = e2.textContent;
              t2.async = false;
              if (Y.config.inlineScriptNonce) {
                t2.nonce = Y.config.inlineScriptNonce;
              }
              var r2 = e2.parentElement;
              try {
                r2.insertBefore(t2, e2);
              } catch (e3) {
                y(e3);
              } finally {
                if (e2.parentElement) {
                  e2.parentElement.removeChild(e2);
                }
              }
            }
          }
          function Ct(e2) {
            if (h(e2, "script")) {
              Et(e2);
            }
            ae(f(e2, "script"), function(e3) {
              Et(e3);
            });
          }
          function Tt() {
            return document.querySelector("[hx-boost], [data-hx-boost]");
          }
          function Rt(e2) {
            var t2 = null;
            var r2 = [];
            if (document.evaluate) {
              var n2 = document.evaluate('//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") ]]', e2);
              while (t2 = n2.iterateNext())
                r2.push(t2);
            } else {
              var i2 = document.getElementsByTagName("*");
              for (var a2 = 0; a2 < i2.length; a2++) {
                var o2 = i2[a2].attributes;
                for (var s2 = 0; s2 < o2.length; s2++) {
                  var l2 = o2[s2].name;
                  if (g(l2, "hx-on:") || g(l2, "data-hx-on:")) {
                    r2.push(i2[a2]);
                  }
                }
              }
            }
            return r2;
          }
          function Ot(e2) {
            if (e2.querySelectorAll) {
              var t2 = Tt() ? ", a" : "";
              var r2 = e2.querySelectorAll(w + t2 + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
              return r2;
            } else {
              return [];
            }
          }
          function qt(e2) {
            var n2 = s("#" + Q(e2, "form")) || v(e2, "form");
            if (!n2) {
              return;
            }
            var t2 = function(e3) {
              var t3 = v(e3.target, "button, input[type='submit']");
              if (t3 !== null) {
                var r2 = ie(n2);
                r2.lastButtonClicked = t3;
              }
            };
            e2.addEventListener("click", t2);
            e2.addEventListener("focusin", t2);
            e2.addEventListener("focusout", function(e3) {
              var t3 = ie(n2);
              t3.lastButtonClicked = null;
            });
          }
          function Ht(e2) {
            var t2 = We(e2);
            var r2 = 0;
            for (let e3 = 0; e3 < t2.length; e3++) {
              const n2 = t2[e3];
              if (n2 === "{") {
                r2++;
              } else if (n2 === "}") {
                r2--;
              }
            }
            return r2;
          }
          function Lt(t2, e2, r2) {
            var n2 = ie(t2);
            n2.onHandlers = [];
            var i2;
            var a2 = function(e3) {
              return gr(t2, function() {
                if (!i2) {
                  i2 = new Function("event", r2);
                }
                i2.call(t2, e3);
              });
            };
            t2.addEventListener(e2, a2);
            n2.onHandlers.push({ event: e2, listener: a2 });
          }
          function At(e2) {
            var t2 = ee(e2, "hx-on");
            if (t2) {
              var r2 = {};
              var n2 = t2.split("\n");
              var i2 = null;
              var a2 = 0;
              while (n2.length > 0) {
                var o2 = n2.shift();
                var s2 = o2.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
                if (a2 === 0 && s2) {
                  o2.split(":");
                  i2 = s2[1].slice(0, -1);
                  r2[i2] = s2[2];
                } else {
                  r2[i2] += o2;
                }
                a2 += Ht(o2);
              }
              for (var l2 in r2) {
                Lt(e2, l2, r2[l2]);
              }
            }
          }
          function Nt(t2) {
            Oe(t2);
            for (var e2 = 0; e2 < t2.attributes.length; e2++) {
              var r2 = t2.attributes[e2].name;
              var n2 = t2.attributes[e2].value;
              if (g(r2, "hx-on:") || g(r2, "data-hx-on:")) {
                let e3 = r2.slice(r2.indexOf(":") + 1);
                if (g(e3, ":"))
                  e3 = "htmx" + e3;
                Lt(t2, e3, n2);
              }
            }
          }
          function It(t2) {
            if (v(t2, Y.config.disableSelector)) {
              m(t2);
              return;
            }
            var r2 = ie(t2);
            if (r2.initHash !== Re(t2)) {
              qe(t2);
              r2.initHash = Re(t2);
              At(t2);
              fe(t2, "htmx:beforeProcessNode");
              if (t2.value) {
                r2.lastValue = t2.value;
              }
              var e2 = Ze(t2);
              var n2 = wt(t2, r2, e2);
              if (!n2) {
                if (re(t2, "hx-boost") === "true") {
                  et(t2, r2, e2);
                } else if (o(t2, "hx-trigger")) {
                  e2.forEach(function(e3) {
                    St(t2, e3, r2, function() {
                    });
                  });
                }
              }
              if (t2.tagName === "FORM" || Q(t2, "type") === "submit" && o(t2, "form")) {
                qt(t2);
              }
              var i2 = ee(t2, "hx-sse");
              if (i2) {
                dt(t2, r2, i2);
              }
              var a2 = ee(t2, "hx-ws");
              if (a2) {
                ut(t2, r2, a2);
              }
              fe(t2, "htmx:afterProcessNode");
            }
          }
          function Pt(e2) {
            e2 = s(e2);
            if (v(e2, Y.config.disableSelector)) {
              m(e2);
              return;
            }
            It(e2);
            ae(Ot(e2), function(e3) {
              It(e3);
            });
            ae(Rt(e2), Nt);
          }
          function kt(e2) {
            return e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
          }
          function Mt(e2, t2) {
            var r2;
            if (window.CustomEvent && typeof window.CustomEvent === "function") {
              r2 = new CustomEvent(e2, { bubbles: true, cancelable: true, detail: t2 });
            } else {
              r2 = te().createEvent("CustomEvent");
              r2.initCustomEvent(e2, true, true, t2);
            }
            return r2;
          }
          function ue(e2, t2, r2) {
            fe(e2, t2, se({ error: t2 }, r2));
          }
          function Dt(e2) {
            return e2 === "htmx:afterProcessNode";
          }
          function C(e2, t2) {
            ae(Lr(e2), function(e3) {
              try {
                t2(e3);
              } catch (e4) {
                y(e4);
              }
            });
          }
          function y(e2) {
            if (console.error) {
              console.error(e2);
            } else if (console.log) {
              console.log("ERROR: ", e2);
            }
          }
          function fe(e2, t2, r2) {
            e2 = s(e2);
            if (r2 == null) {
              r2 = {};
            }
            r2["elt"] = e2;
            var n2 = Mt(t2, r2);
            if (Y.logger && !Dt(t2)) {
              Y.logger(e2, t2, r2);
            }
            if (r2.error) {
              y(r2.error);
              fe(e2, "htmx:error", { errorInfo: r2 });
            }
            var i2 = e2.dispatchEvent(n2);
            var a2 = kt(t2);
            if (i2 && a2 !== t2) {
              var o2 = Mt(a2, n2.detail);
              i2 = i2 && e2.dispatchEvent(o2);
            }
            C(e2, function(e3) {
              i2 = i2 && (e3.onEvent(t2, n2) !== false && !n2.defaultPrevented);
            });
            return i2;
          }
          var Xt = location.pathname + location.search;
          function Ft() {
            var e2 = te().querySelector("[hx-history-elt],[data-hx-history-elt]");
            return e2 || te().body;
          }
          function Ut(e2, t2, r2, n2) {
            if (!M()) {
              return;
            }
            e2 = D(e2);
            var i2 = S(localStorage.getItem("htmx-history-cache")) || [];
            for (var a2 = 0; a2 < i2.length; a2++) {
              if (i2[a2].url === e2) {
                i2.splice(a2, 1);
                break;
              }
            }
            var o2 = { url: e2, content: t2, title: r2, scroll: n2 };
            fe(te().body, "htmx:historyItemCreated", { item: o2, cache: i2 });
            i2.push(o2);
            while (i2.length > Y.config.historyCacheSize) {
              i2.shift();
            }
            while (i2.length > 0) {
              try {
                localStorage.setItem("htmx-history-cache", JSON.stringify(i2));
                break;
              } catch (e3) {
                ue(te().body, "htmx:historyCacheError", { cause: e3, cache: i2 });
                i2.shift();
              }
            }
          }
          function Bt(e2) {
            if (!M()) {
              return null;
            }
            e2 = D(e2);
            var t2 = S(localStorage.getItem("htmx-history-cache")) || [];
            for (var r2 = 0; r2 < t2.length; r2++) {
              if (t2[r2].url === e2) {
                return t2[r2];
              }
            }
            return null;
          }
          function Vt(e2) {
            var t2 = Y.config.requestClass;
            var r2 = e2.cloneNode(true);
            ae(f(r2, "." + t2), function(e3) {
              n(e3, t2);
            });
            return r2.innerHTML;
          }
          function jt() {
            var e2 = Ft();
            var t2 = Xt || location.pathname + location.search;
            var r2;
            try {
              r2 = te().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
            } catch (e3) {
              r2 = te().querySelector('[hx-history="false"],[data-hx-history="false"]');
            }
            if (!r2) {
              fe(te().body, "htmx:beforeHistorySave", { path: t2, historyElt: e2 });
              Ut(t2, Vt(e2), te().title, window.scrollY);
            }
            if (Y.config.historyEnabled)
              history.replaceState({ htmx: true }, te().title, window.location.href);
          }
          function _t(e2) {
            if (Y.config.getCacheBusterParam) {
              e2 = e2.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
              if (_(e2, "&") || _(e2, "?")) {
                e2 = e2.slice(0, -1);
              }
            }
            if (Y.config.historyEnabled) {
              history.pushState({ htmx: true }, "", e2);
            }
            Xt = e2;
          }
          function zt(e2) {
            if (Y.config.historyEnabled)
              history.replaceState({ htmx: true }, "", e2);
            Xt = e2;
          }
          function Wt(e2) {
            ae(e2, function(e3) {
              e3.call();
            });
          }
          function $t(a2) {
            var e2 = new XMLHttpRequest();
            var o2 = { path: a2, xhr: e2 };
            fe(te().body, "htmx:historyCacheMiss", o2);
            e2.open("GET", a2, true);
            e2.setRequestHeader("HX-History-Restore-Request", "true");
            e2.onload = function() {
              if (this.status >= 200 && this.status < 400) {
                fe(te().body, "htmx:historyCacheMissLoad", o2);
                var e3 = l(this.response);
                e3 = e3.querySelector("[hx-history-elt],[data-hx-history-elt]") || e3;
                var t2 = Ft();
                var r2 = T(t2);
                var n2 = Xe(this.response);
                if (n2) {
                  var i2 = E("title");
                  if (i2) {
                    i2.innerHTML = n2;
                  } else {
                    window.document.title = n2;
                  }
                }
                ke(t2, e3, r2);
                Wt(r2.tasks);
                Xt = a2;
                fe(te().body, "htmx:historyRestore", { path: a2, cacheMiss: true, serverResponse: this.response });
              } else {
                ue(te().body, "htmx:historyCacheMissLoadError", o2);
              }
            };
            e2.send();
          }
          function Gt(e2) {
            jt();
            e2 = e2 || location.pathname + location.search;
            var t2 = Bt(e2);
            if (t2) {
              var r2 = l(t2.content);
              var n2 = Ft();
              var i2 = T(n2);
              ke(n2, r2, i2);
              Wt(i2.tasks);
              document.title = t2.title;
              setTimeout(function() {
                window.scrollTo(0, t2.scroll);
              }, 0);
              Xt = e2;
              fe(te().body, "htmx:historyRestore", { path: e2, item: t2 });
            } else {
              if (Y.config.refreshOnHistoryMiss) {
                window.location.reload(true);
              } else {
                $t(e2);
              }
            }
          }
          function Jt(e2) {
            var t2 = ve(e2, "hx-indicator");
            if (t2 == null) {
              t2 = [e2];
            }
            ae(t2, function(e3) {
              var t3 = ie(e3);
              t3.requestCount = (t3.requestCount || 0) + 1;
              e3.classList["add"].call(e3.classList, Y.config.requestClass);
            });
            return t2;
          }
          function Zt(e2) {
            var t2 = ve(e2, "hx-disabled-elt");
            if (t2 == null) {
              t2 = [];
            }
            ae(t2, function(e3) {
              var t3 = ie(e3);
              t3.requestCount = (t3.requestCount || 0) + 1;
              e3.setAttribute("disabled", "");
            });
            return t2;
          }
          function Kt(e2, t2) {
            ae(e2, function(e3) {
              var t3 = ie(e3);
              t3.requestCount = (t3.requestCount || 0) - 1;
              if (t3.requestCount === 0) {
                e3.classList["remove"].call(e3.classList, Y.config.requestClass);
              }
            });
            ae(t2, function(e3) {
              var t3 = ie(e3);
              t3.requestCount = (t3.requestCount || 0) - 1;
              if (t3.requestCount === 0) {
                e3.removeAttribute("disabled");
              }
            });
          }
          function Yt(e2, t2) {
            for (var r2 = 0; r2 < e2.length; r2++) {
              var n2 = e2[r2];
              if (n2.isSameNode(t2)) {
                return true;
              }
            }
            return false;
          }
          function Qt(e2) {
            if (e2.name === "" || e2.name == null || e2.disabled) {
              return false;
            }
            if (e2.type === "button" || e2.type === "submit" || e2.tagName === "image" || e2.tagName === "reset" || e2.tagName === "file") {
              return false;
            }
            if (e2.type === "checkbox" || e2.type === "radio") {
              return e2.checked;
            }
            return true;
          }
          function er(e2, t2, r2) {
            if (e2 != null && t2 != null) {
              var n2 = r2[e2];
              if (n2 === void 0) {
                r2[e2] = t2;
              } else if (Array.isArray(n2)) {
                if (Array.isArray(t2)) {
                  r2[e2] = n2.concat(t2);
                } else {
                  n2.push(t2);
                }
              } else {
                if (Array.isArray(t2)) {
                  r2[e2] = [n2].concat(t2);
                } else {
                  r2[e2] = [n2, t2];
                }
              }
            }
          }
          function tr(t2, r2, n2, e2, i2) {
            if (e2 == null || Yt(t2, e2)) {
              return;
            } else {
              t2.push(e2);
            }
            if (Qt(e2)) {
              var a2 = Q(e2, "name");
              var o2 = e2.value;
              if (e2.multiple) {
                o2 = I(e2.querySelectorAll("option:checked")).map(function(e3) {
                  return e3.value;
                });
              }
              if (e2.files) {
                o2 = I(e2.files);
              }
              er(a2, o2, r2);
              if (i2) {
                rr(e2, n2);
              }
            }
            if (h(e2, "form")) {
              var s2 = e2.elements;
              ae(s2, function(e3) {
                tr(t2, r2, n2, e3, i2);
              });
            }
          }
          function rr(e2, t2) {
            if (e2.willValidate) {
              fe(e2, "htmx:validation:validate");
              if (!e2.checkValidity()) {
                t2.push({ elt: e2, message: e2.validationMessage, validity: e2.validity });
                fe(e2, "htmx:validation:failed", { message: e2.validationMessage, validity: e2.validity });
              }
            }
          }
          function nr(e2, t2) {
            var r2 = [];
            var n2 = {};
            var i2 = {};
            var a2 = [];
            var o2 = ie(e2);
            var s2 = h(e2, "form") && e2.noValidate !== true || ee(e2, "hx-validate") === "true";
            if (o2.lastButtonClicked) {
              s2 = s2 && o2.lastButtonClicked.formNoValidate !== true;
            }
            if (t2 !== "get") {
              tr(r2, i2, a2, v(e2, "form"), s2);
            }
            tr(r2, n2, a2, e2, s2);
            if (o2.lastButtonClicked || e2.tagName === "BUTTON" || e2.tagName === "INPUT" && Q(e2, "type") === "submit") {
              var l2 = o2.lastButtonClicked || e2;
              var u2 = Q(l2, "name");
              er(u2, l2.value, i2);
            }
            var f2 = ve(e2, "hx-include");
            ae(f2, function(e3) {
              tr(r2, n2, a2, e3, s2);
              if (!h(e3, "form")) {
                ae(e3.querySelectorAll(Je), function(e4) {
                  tr(r2, n2, a2, e4, s2);
                });
              }
            });
            n2 = se(n2, i2);
            return { errors: a2, values: n2 };
          }
          function ir(e2, t2, r2) {
            if (e2 !== "") {
              e2 += "&";
            }
            if (String(r2) === "[object Object]") {
              r2 = JSON.stringify(r2);
            }
            var n2 = encodeURIComponent(r2);
            e2 += encodeURIComponent(t2) + "=" + n2;
            return e2;
          }
          function ar(e2) {
            var t2 = "";
            for (var r2 in e2) {
              if (e2.hasOwnProperty(r2)) {
                var n2 = e2[r2];
                if (Array.isArray(n2)) {
                  ae(n2, function(e3) {
                    t2 = ir(t2, r2, e3);
                  });
                } else {
                  t2 = ir(t2, r2, n2);
                }
              }
            }
            return t2;
          }
          function or(e2) {
            var t2 = new FormData();
            for (var r2 in e2) {
              if (e2.hasOwnProperty(r2)) {
                var n2 = e2[r2];
                if (Array.isArray(n2)) {
                  ae(n2, function(e3) {
                    t2.append(r2, e3);
                  });
                } else {
                  t2.append(r2, n2);
                }
              }
            }
            return t2;
          }
          function sr(e2, t2, r2) {
            var n2 = { "HX-Request": "true", "HX-Trigger": Q(e2, "id"), "HX-Trigger-Name": Q(e2, "name"), "HX-Target": ee(t2, "id"), "HX-Current-URL": te().location.href };
            dr(e2, "hx-headers", false, n2);
            if (r2 !== void 0) {
              n2["HX-Prompt"] = r2;
            }
            if (ie(e2).boosted) {
              n2["HX-Boosted"] = "true";
            }
            return n2;
          }
          function lr(t2, e2) {
            var r2 = re(e2, "hx-params");
            if (r2) {
              if (r2 === "none") {
                return {};
              } else if (r2 === "*") {
                return t2;
              } else if (r2.indexOf("not ") === 0) {
                ae(r2.substr(4).split(","), function(e3) {
                  e3 = e3.trim();
                  delete t2[e3];
                });
                return t2;
              } else {
                var n2 = {};
                ae(r2.split(","), function(e3) {
                  e3 = e3.trim();
                  n2[e3] = t2[e3];
                });
                return n2;
              }
            } else {
              return t2;
            }
          }
          function ur(e2) {
            return Q(e2, "href") && Q(e2, "href").indexOf("#") >= 0;
          }
          function fr(e2, t2) {
            var r2 = t2 ? t2 : re(e2, "hx-swap");
            var n2 = { swapStyle: ie(e2).boosted ? "innerHTML" : Y.config.defaultSwapStyle, swapDelay: Y.config.defaultSwapDelay, settleDelay: Y.config.defaultSettleDelay };
            if (ie(e2).boosted && !ur(e2)) {
              n2["show"] = "top";
            }
            if (r2) {
              var i2 = k(r2);
              if (i2.length > 0) {
                for (var a2 = 0; a2 < i2.length; a2++) {
                  var o2 = i2[a2];
                  if (o2.indexOf("swap:") === 0) {
                    n2["swapDelay"] = d(o2.substr(5));
                  } else if (o2.indexOf("settle:") === 0) {
                    n2["settleDelay"] = d(o2.substr(7));
                  } else if (o2.indexOf("transition:") === 0) {
                    n2["transition"] = o2.substr(11) === "true";
                  } else if (o2.indexOf("ignoreTitle:") === 0) {
                    n2["ignoreTitle"] = o2.substr(12) === "true";
                  } else if (o2.indexOf("scroll:") === 0) {
                    var s2 = o2.substr(7);
                    var l2 = s2.split(":");
                    var u2 = l2.pop();
                    var f2 = l2.length > 0 ? l2.join(":") : null;
                    n2["scroll"] = u2;
                    n2["scrollTarget"] = f2;
                  } else if (o2.indexOf("show:") === 0) {
                    var c2 = o2.substr(5);
                    var l2 = c2.split(":");
                    var h2 = l2.pop();
                    var f2 = l2.length > 0 ? l2.join(":") : null;
                    n2["show"] = h2;
                    n2["showTarget"] = f2;
                  } else if (o2.indexOf("focus-scroll:") === 0) {
                    var v2 = o2.substr("focus-scroll:".length);
                    n2["focusScroll"] = v2 == "true";
                  } else if (a2 == 0) {
                    n2["swapStyle"] = o2;
                  } else {
                    y("Unknown modifier in hx-swap: " + o2);
                  }
                }
              }
            }
            return n2;
          }
          function cr(e2) {
            return re(e2, "hx-encoding") === "multipart/form-data" || h(e2, "form") && Q(e2, "enctype") === "multipart/form-data";
          }
          function hr(t2, r2, n2) {
            var i2 = null;
            C(r2, function(e2) {
              if (i2 == null) {
                i2 = e2.encodeParameters(t2, n2, r2);
              }
            });
            if (i2 != null) {
              return i2;
            } else {
              if (cr(r2)) {
                return or(n2);
              } else {
                return ar(n2);
              }
            }
          }
          function T(e2) {
            return { tasks: [], elts: [e2] };
          }
          function vr(e2, t2) {
            var r2 = e2[0];
            var n2 = e2[e2.length - 1];
            if (t2.scroll) {
              var i2 = null;
              if (t2.scrollTarget) {
                i2 = le(r2, t2.scrollTarget);
              }
              if (t2.scroll === "top" && (r2 || i2)) {
                i2 = i2 || r2;
                i2.scrollTop = 0;
              }
              if (t2.scroll === "bottom" && (n2 || i2)) {
                i2 = i2 || n2;
                i2.scrollTop = i2.scrollHeight;
              }
            }
            if (t2.show) {
              var i2 = null;
              if (t2.showTarget) {
                var a2 = t2.showTarget;
                if (t2.showTarget === "window") {
                  a2 = "body";
                }
                i2 = le(r2, a2);
              }
              if (t2.show === "top" && (r2 || i2)) {
                i2 = i2 || r2;
                i2.scrollIntoView({ block: "start", behavior: Y.config.scrollBehavior });
              }
              if (t2.show === "bottom" && (n2 || i2)) {
                i2 = i2 || n2;
                i2.scrollIntoView({ block: "end", behavior: Y.config.scrollBehavior });
              }
            }
          }
          function dr(e2, t2, r2, n2) {
            if (n2 == null) {
              n2 = {};
            }
            if (e2 == null) {
              return n2;
            }
            var i2 = ee(e2, t2);
            if (i2) {
              var a2 = i2.trim();
              var o2 = r2;
              if (a2 === "unset") {
                return null;
              }
              if (a2.indexOf("javascript:") === 0) {
                a2 = a2.substr(11);
                o2 = true;
              } else if (a2.indexOf("js:") === 0) {
                a2 = a2.substr(3);
                o2 = true;
              }
              if (a2.indexOf("{") !== 0) {
                a2 = "{" + a2 + "}";
              }
              var s2;
              if (o2) {
                s2 = gr(e2, function() {
                  return Function("return (" + a2 + ")")();
                }, {});
              } else {
                s2 = S(a2);
              }
              for (var l2 in s2) {
                if (s2.hasOwnProperty(l2)) {
                  if (n2[l2] == null) {
                    n2[l2] = s2[l2];
                  }
                }
              }
            }
            return dr(u(e2), t2, r2, n2);
          }
          function gr(e2, t2, r2) {
            if (Y.config.allowEval) {
              return t2();
            } else {
              ue(e2, "htmx:evalDisallowedError");
              return r2;
            }
          }
          function mr(e2, t2) {
            return dr(e2, "hx-vars", true, t2);
          }
          function pr(e2, t2) {
            return dr(e2, "hx-vals", false, t2);
          }
          function xr(e2) {
            return se(mr(e2), pr(e2));
          }
          function yr(t2, r2, n2) {
            if (n2 !== null) {
              try {
                t2.setRequestHeader(r2, n2);
              } catch (e2) {
                t2.setRequestHeader(r2, encodeURIComponent(n2));
                t2.setRequestHeader(r2 + "-URI-AutoEncoded", "true");
              }
            }
          }
          function br(t2) {
            if (t2.responseURL && typeof URL !== "undefined") {
              try {
                var e2 = new URL(t2.responseURL);
                return e2.pathname + e2.search;
              } catch (e3) {
                ue(te().body, "htmx:badResponseUrl", { url: t2.responseURL });
              }
            }
          }
          function R(e2, t2) {
            return e2.getAllResponseHeaders().match(t2);
          }
          function wr(e2, t2, r2) {
            e2 = e2.toLowerCase();
            if (r2) {
              if (r2 instanceof Element || L(r2, "String")) {
                return ce(e2, t2, null, null, { targetOverride: s(r2), returnPromise: true });
              } else {
                return ce(e2, t2, s(r2.source), r2.event, { handler: r2.handler, headers: r2.headers, values: r2.values, targetOverride: s(r2.target), swapOverride: r2.swap, returnPromise: true });
              }
            } else {
              return ce(e2, t2, null, null, { returnPromise: true });
            }
          }
          function Sr(e2) {
            var t2 = [];
            while (e2) {
              t2.push(e2);
              e2 = e2.parentElement;
            }
            return t2;
          }
          function Er(e2, t2, r2) {
            var n2;
            var i2;
            if (typeof URL === "function") {
              i2 = new URL(t2, document.location.href);
              var a2 = document.location.origin;
              n2 = a2 === i2.origin;
            } else {
              i2 = t2;
              n2 = g(t2, document.location.origin);
            }
            if (Y.config.selfRequestsOnly) {
              if (!n2) {
                return false;
              }
            }
            return fe(e2, "htmx:validateUrl", se({ url: i2, sameHost: n2 }, r2));
          }
          function ce(e2, t2, n2, r2, i2, M2) {
            var a2 = null;
            var o2 = null;
            i2 = i2 != null ? i2 : {};
            if (i2.returnPromise && typeof Promise !== "undefined") {
              var s2 = new Promise(function(e3, t3) {
                a2 = e3;
                o2 = t3;
              });
            }
            if (n2 == null) {
              n2 = te().body;
            }
            var D2 = i2.handler || Tr;
            if (!oe(n2)) {
              ne(a2);
              return s2;
            }
            var l2 = i2.targetOverride || ge(n2);
            if (l2 == null || l2 == he) {
              ue(n2, "htmx:targetError", { target: ee(n2, "hx-target") });
              ne(o2);
              return s2;
            }
            var u2 = ie(n2);
            var f2 = u2.lastButtonClicked;
            if (f2) {
              var c2 = Q(f2, "formaction");
              if (c2 != null) {
                t2 = c2;
              }
              var h2 = Q(f2, "formmethod");
              if (h2 != null) {
                e2 = h2;
              }
            }
            if (!M2) {
              var X2 = function() {
                return ce(e2, t2, n2, r2, i2, true);
              };
              var F2 = { target: l2, elt: n2, path: t2, verb: e2, triggeringEvent: r2, etc: i2, issueRequest: X2 };
              if (fe(n2, "htmx:confirm", F2) === false) {
                ne(a2);
                return s2;
              }
            }
            var v2 = n2;
            var d2 = re(n2, "hx-sync");
            var g2 = null;
            var m2 = false;
            if (d2) {
              var p2 = d2.split(":");
              var x2 = p2[0].trim();
              if (x2 === "this") {
                v2 = de(n2, "hx-sync");
              } else {
                v2 = le(n2, x2);
              }
              d2 = (p2[1] || "drop").trim();
              u2 = ie(v2);
              if (d2 === "drop" && u2.xhr && u2.abortable !== true) {
                ne(a2);
                return s2;
              } else if (d2 === "abort") {
                if (u2.xhr) {
                  ne(a2);
                  return s2;
                } else {
                  m2 = true;
                }
              } else if (d2 === "replace") {
                fe(v2, "htmx:abort");
              } else if (d2.indexOf("queue") === 0) {
                var U2 = d2.split(" ");
                g2 = (U2[1] || "last").trim();
              }
            }
            if (u2.xhr) {
              if (u2.abortable) {
                fe(v2, "htmx:abort");
              } else {
                if (g2 == null) {
                  if (r2) {
                    var y2 = ie(r2);
                    if (y2 && y2.triggerSpec && y2.triggerSpec.queue) {
                      g2 = y2.triggerSpec.queue;
                    }
                  }
                  if (g2 == null) {
                    g2 = "last";
                  }
                }
                if (u2.queuedRequests == null) {
                  u2.queuedRequests = [];
                }
                if (g2 === "first" && u2.queuedRequests.length === 0) {
                  u2.queuedRequests.push(function() {
                    ce(e2, t2, n2, r2, i2);
                  });
                } else if (g2 === "all") {
                  u2.queuedRequests.push(function() {
                    ce(e2, t2, n2, r2, i2);
                  });
                } else if (g2 === "last") {
                  u2.queuedRequests = [];
                  u2.queuedRequests.push(function() {
                    ce(e2, t2, n2, r2, i2);
                  });
                }
                ne(a2);
                return s2;
              }
            }
            var b2 = new XMLHttpRequest();
            u2.xhr = b2;
            u2.abortable = m2;
            var w2 = function() {
              u2.xhr = null;
              u2.abortable = false;
              if (u2.queuedRequests != null && u2.queuedRequests.length > 0) {
                var e3 = u2.queuedRequests.shift();
                e3();
              }
            };
            var B2 = re(n2, "hx-prompt");
            if (B2) {
              var S2 = prompt(B2);
              if (S2 === null || !fe(n2, "htmx:prompt", { prompt: S2, target: l2 })) {
                ne(a2);
                w2();
                return s2;
              }
            }
            var V2 = re(n2, "hx-confirm");
            if (V2) {
              if (!confirm(V2)) {
                ne(a2);
                w2();
                return s2;
              }
            }
            var E2 = sr(n2, l2, S2);
            if (i2.headers) {
              E2 = se(E2, i2.headers);
            }
            var j2 = nr(n2, e2);
            var C2 = j2.errors;
            var T2 = j2.values;
            if (i2.values) {
              T2 = se(T2, i2.values);
            }
            var _2 = xr(n2);
            var z2 = se(T2, _2);
            var R2 = lr(z2, n2);
            if (e2 !== "get" && !cr(n2)) {
              E2["Content-Type"] = "application/x-www-form-urlencoded";
            }
            if (Y.config.getCacheBusterParam && e2 === "get") {
              R2["org.htmx.cache-buster"] = Q(l2, "id") || "true";
            }
            if (t2 == null || t2 === "") {
              t2 = te().location.href;
            }
            var O2 = dr(n2, "hx-request");
            var W2 = ie(n2).boosted;
            var q2 = Y.config.methodsThatUseUrlParams.indexOf(e2) >= 0;
            var H2 = { boosted: W2, useUrlParams: q2, parameters: R2, unfilteredParameters: z2, headers: E2, target: l2, verb: e2, errors: C2, withCredentials: i2.credentials || O2.credentials || Y.config.withCredentials, timeout: i2.timeout || O2.timeout || Y.config.timeout, path: t2, triggeringEvent: r2 };
            if (!fe(n2, "htmx:configRequest", H2)) {
              ne(a2);
              w2();
              return s2;
            }
            t2 = H2.path;
            e2 = H2.verb;
            E2 = H2.headers;
            R2 = H2.parameters;
            C2 = H2.errors;
            q2 = H2.useUrlParams;
            if (C2 && C2.length > 0) {
              fe(n2, "htmx:validation:halted", H2);
              ne(a2);
              w2();
              return s2;
            }
            var $2 = t2.split("#");
            var G2 = $2[0];
            var L2 = $2[1];
            var A2 = t2;
            if (q2) {
              A2 = G2;
              var J2 = Object.keys(R2).length !== 0;
              if (J2) {
                if (A2.indexOf("?") < 0) {
                  A2 += "?";
                } else {
                  A2 += "&";
                }
                A2 += ar(R2);
                if (L2) {
                  A2 += "#" + L2;
                }
              }
            }
            if (!Er(n2, A2, H2)) {
              ue(n2, "htmx:invalidPath", H2);
              ne(o2);
              return s2;
            }
            b2.open(e2.toUpperCase(), A2, true);
            b2.overrideMimeType("text/html");
            b2.withCredentials = H2.withCredentials;
            b2.timeout = H2.timeout;
            if (O2.noHeaders) {
            } else {
              for (var N2 in E2) {
                if (E2.hasOwnProperty(N2)) {
                  var Z2 = E2[N2];
                  yr(b2, N2, Z2);
                }
              }
            }
            var I2 = { xhr: b2, target: l2, requestConfig: H2, etc: i2, boosted: W2, pathInfo: { requestPath: t2, finalRequestPath: A2, anchor: L2 } };
            b2.onload = function() {
              try {
                var e3 = Sr(n2);
                I2.pathInfo.responsePath = br(b2);
                D2(n2, I2);
                Kt(P2, k2);
                fe(n2, "htmx:afterRequest", I2);
                fe(n2, "htmx:afterOnLoad", I2);
                if (!oe(n2)) {
                  var t3 = null;
                  while (e3.length > 0 && t3 == null) {
                    var r3 = e3.shift();
                    if (oe(r3)) {
                      t3 = r3;
                    }
                  }
                  if (t3) {
                    fe(t3, "htmx:afterRequest", I2);
                    fe(t3, "htmx:afterOnLoad", I2);
                  }
                }
                ne(a2);
                w2();
              } catch (e4) {
                ue(n2, "htmx:onLoadError", se({ error: e4 }, I2));
                throw e4;
              }
            };
            b2.onerror = function() {
              Kt(P2, k2);
              ue(n2, "htmx:afterRequest", I2);
              ue(n2, "htmx:sendError", I2);
              ne(o2);
              w2();
            };
            b2.onabort = function() {
              Kt(P2, k2);
              ue(n2, "htmx:afterRequest", I2);
              ue(n2, "htmx:sendAbort", I2);
              ne(o2);
              w2();
            };
            b2.ontimeout = function() {
              Kt(P2, k2);
              ue(n2, "htmx:afterRequest", I2);
              ue(n2, "htmx:timeout", I2);
              ne(o2);
              w2();
            };
            if (!fe(n2, "htmx:beforeRequest", I2)) {
              ne(a2);
              w2();
              return s2;
            }
            var P2 = Jt(n2);
            var k2 = Zt(n2);
            ae(["loadstart", "loadend", "progress", "abort"], function(t3) {
              ae([b2, b2.upload], function(e3) {
                e3.addEventListener(t3, function(e4) {
                  fe(n2, "htmx:xhr:" + t3, { lengthComputable: e4.lengthComputable, loaded: e4.loaded, total: e4.total });
                });
              });
            });
            fe(n2, "htmx:beforeSend", I2);
            var K2 = q2 ? null : hr(b2, n2, R2);
            b2.send(K2);
            return s2;
          }
          function Cr(e2, t2) {
            var r2 = t2.xhr;
            var n2 = null;
            var i2 = null;
            if (R(r2, /HX-Push:/i)) {
              n2 = r2.getResponseHeader("HX-Push");
              i2 = "push";
            } else if (R(r2, /HX-Push-Url:/i)) {
              n2 = r2.getResponseHeader("HX-Push-Url");
              i2 = "push";
            } else if (R(r2, /HX-Replace-Url:/i)) {
              n2 = r2.getResponseHeader("HX-Replace-Url");
              i2 = "replace";
            }
            if (n2) {
              if (n2 === "false") {
                return {};
              } else {
                return { type: i2, path: n2 };
              }
            }
            var a2 = t2.pathInfo.finalRequestPath;
            var o2 = t2.pathInfo.responsePath;
            var s2 = re(e2, "hx-push-url");
            var l2 = re(e2, "hx-replace-url");
            var u2 = ie(e2).boosted;
            var f2 = null;
            var c2 = null;
            if (s2) {
              f2 = "push";
              c2 = s2;
            } else if (l2) {
              f2 = "replace";
              c2 = l2;
            } else if (u2) {
              f2 = "push";
              c2 = o2 || a2;
            }
            if (c2) {
              if (c2 === "false") {
                return {};
              }
              if (c2 === "true") {
                c2 = o2 || a2;
              }
              if (t2.pathInfo.anchor && c2.indexOf("#") === -1) {
                c2 = c2 + "#" + t2.pathInfo.anchor;
              }
              return { type: f2, path: c2 };
            } else {
              return {};
            }
          }
          function Tr(l2, u2) {
            var f2 = u2.xhr;
            var c2 = u2.target;
            var e2 = u2.etc;
            var t2 = u2.requestConfig;
            if (!fe(l2, "htmx:beforeOnLoad", u2))
              return;
            if (R(f2, /HX-Trigger:/i)) {
              Ue(f2, "HX-Trigger", l2);
            }
            if (R(f2, /HX-Location:/i)) {
              jt();
              var r2 = f2.getResponseHeader("HX-Location");
              var h2;
              if (r2.indexOf("{") === 0) {
                h2 = S(r2);
                r2 = h2["path"];
                delete h2["path"];
              }
              wr("GET", r2, h2).then(function() {
                _t(r2);
              });
              return;
            }
            var n2 = R(f2, /HX-Refresh:/i) && "true" === f2.getResponseHeader("HX-Refresh");
            if (R(f2, /HX-Redirect:/i)) {
              location.href = f2.getResponseHeader("HX-Redirect");
              n2 && location.reload();
              return;
            }
            if (n2) {
              location.reload();
              return;
            }
            if (R(f2, /HX-Retarget:/i)) {
              u2.target = te().querySelector(f2.getResponseHeader("HX-Retarget"));
            }
            var v2 = Cr(l2, u2);
            var i2 = f2.status >= 200 && f2.status < 400 && f2.status !== 204;
            var d2 = f2.response;
            var a2 = f2.status >= 400;
            var g2 = Y.config.ignoreTitle;
            var o2 = se({ shouldSwap: i2, serverResponse: d2, isError: a2, ignoreTitle: g2 }, u2);
            if (!fe(c2, "htmx:beforeSwap", o2))
              return;
            c2 = o2.target;
            d2 = o2.serverResponse;
            a2 = o2.isError;
            g2 = o2.ignoreTitle;
            u2.target = c2;
            u2.failed = a2;
            u2.successful = !a2;
            if (o2.shouldSwap) {
              if (f2.status === 286) {
                Ke(l2);
              }
              C(l2, function(e3) {
                d2 = e3.transformResponse(d2, f2, l2);
              });
              if (v2.type) {
                jt();
              }
              var s2 = e2.swapOverride;
              if (R(f2, /HX-Reswap:/i)) {
                s2 = f2.getResponseHeader("HX-Reswap");
              }
              var h2 = fr(l2, s2);
              if (h2.hasOwnProperty("ignoreTitle")) {
                g2 = h2.ignoreTitle;
              }
              c2.classList.add(Y.config.swappingClass);
              var m2 = null;
              var p2 = null;
              var x2 = function() {
                try {
                  var e3 = document.activeElement;
                  var t3 = {};
                  try {
                    t3 = { elt: e3, start: e3 ? e3.selectionStart : null, end: e3 ? e3.selectionEnd : null };
                  } catch (e4) {
                  }
                  var r3;
                  if (R(f2, /HX-Reselect:/i)) {
                    r3 = f2.getResponseHeader("HX-Reselect");
                  }
                  var n3 = T(c2);
                  Fe(h2.swapStyle, c2, l2, d2, n3, r3);
                  if (t3.elt && !oe(t3.elt) && Q(t3.elt, "id")) {
                    var i3 = document.getElementById(Q(t3.elt, "id"));
                    var a3 = { preventScroll: h2.focusScroll !== void 0 ? !h2.focusScroll : !Y.config.defaultFocusScroll };
                    if (i3) {
                      if (t3.start && i3.setSelectionRange) {
                        try {
                          i3.setSelectionRange(t3.start, t3.end);
                        } catch (e4) {
                        }
                      }
                      i3.focus(a3);
                    }
                  }
                  c2.classList.remove(Y.config.swappingClass);
                  ae(n3.elts, function(e4) {
                    if (e4.classList) {
                      e4.classList.add(Y.config.settlingClass);
                    }
                    fe(e4, "htmx:afterSwap", u2);
                  });
                  if (R(f2, /HX-Trigger-After-Swap:/i)) {
                    var o3 = l2;
                    if (!oe(l2)) {
                      o3 = te().body;
                    }
                    Ue(f2, "HX-Trigger-After-Swap", o3);
                  }
                  var s3 = function() {
                    ae(n3.tasks, function(e5) {
                      e5.call();
                    });
                    ae(n3.elts, function(e5) {
                      if (e5.classList) {
                        e5.classList.remove(Y.config.settlingClass);
                      }
                      fe(e5, "htmx:afterSettle", u2);
                    });
                    if (v2.type) {
                      if (v2.type === "push") {
                        _t(v2.path);
                        fe(te().body, "htmx:pushedIntoHistory", { path: v2.path });
                      } else {
                        zt(v2.path);
                        fe(te().body, "htmx:replacedInHistory", { path: v2.path });
                      }
                    }
                    if (u2.pathInfo.anchor) {
                      var e4 = E("#" + u2.pathInfo.anchor);
                      if (e4) {
                        e4.scrollIntoView({ block: "start", behavior: "auto" });
                      }
                    }
                    if (n3.title && !g2) {
                      var t4 = E("title");
                      if (t4) {
                        t4.innerHTML = n3.title;
                      } else {
                        window.document.title = n3.title;
                      }
                    }
                    vr(n3.elts, h2);
                    if (R(f2, /HX-Trigger-After-Settle:/i)) {
                      var r4 = l2;
                      if (!oe(l2)) {
                        r4 = te().body;
                      }
                      Ue(f2, "HX-Trigger-After-Settle", r4);
                    }
                    ne(m2);
                  };
                  if (h2.settleDelay > 0) {
                    setTimeout(s3, h2.settleDelay);
                  } else {
                    s3();
                  }
                } catch (e4) {
                  ue(l2, "htmx:swapError", u2);
                  ne(p2);
                  throw e4;
                }
              };
              var y2 = Y.config.globalViewTransitions;
              if (h2.hasOwnProperty("transition")) {
                y2 = h2.transition;
              }
              if (y2 && fe(l2, "htmx:beforeTransition", u2) && typeof Promise !== "undefined" && document.startViewTransition) {
                var b2 = new Promise(function(e3, t3) {
                  m2 = e3;
                  p2 = t3;
                });
                var w2 = x2;
                x2 = function() {
                  document.startViewTransition(function() {
                    w2();
                    return b2;
                  });
                };
              }
              if (h2.swapDelay > 0) {
                setTimeout(x2, h2.swapDelay);
              } else {
                x2();
              }
            }
            if (a2) {
              ue(l2, "htmx:responseError", se({ error: "Response Status Error Code " + f2.status + " from " + u2.pathInfo.requestPath }, u2));
            }
          }
          var Rr = {};
          function Or() {
            return { init: function(e2) {
              return null;
            }, onEvent: function(e2, t2) {
              return true;
            }, transformResponse: function(e2, t2, r2) {
              return e2;
            }, isInlineSwap: function(e2) {
              return false;
            }, handleSwap: function(e2, t2, r2, n2) {
              return false;
            }, encodeParameters: function(e2, t2, r2) {
              return null;
            } };
          }
          function qr(e2, t2) {
            if (t2.init) {
              t2.init(r);
            }
            Rr[e2] = se(Or(), t2);
          }
          function Hr(e2) {
            delete Rr[e2];
          }
          function Lr(e2, r2, n2) {
            if (e2 == void 0) {
              return r2;
            }
            if (r2 == void 0) {
              r2 = [];
            }
            if (n2 == void 0) {
              n2 = [];
            }
            var t2 = ee(e2, "hx-ext");
            if (t2) {
              ae(t2.split(","), function(e3) {
                e3 = e3.replace(/ /g, "");
                if (e3.slice(0, 7) == "ignore:") {
                  n2.push(e3.slice(7));
                  return;
                }
                if (n2.indexOf(e3) < 0) {
                  var t3 = Rr[e3];
                  if (t3 && r2.indexOf(t3) < 0) {
                    r2.push(t3);
                  }
                }
              });
            }
            return Lr(u(e2), r2, n2);
          }
          var Ar = false;
          te().addEventListener("DOMContentLoaded", function() {
            Ar = true;
          });
          function Nr(e2) {
            if (Ar || te().readyState === "complete") {
              e2();
            } else {
              te().addEventListener("DOMContentLoaded", e2);
            }
          }
          function Ir() {
            if (Y.config.includeIndicatorStyles !== false) {
              te().head.insertAdjacentHTML("beforeend", "<style>                      ." + Y.config.indicatorClass + "{opacity:0;transition: opacity 200ms ease-in;}                      ." + Y.config.requestClass + " ." + Y.config.indicatorClass + "{opacity:1}                      ." + Y.config.requestClass + "." + Y.config.indicatorClass + "{opacity:1}                    </style>");
            }
          }
          function Pr() {
            var e2 = te().querySelector('meta[name="htmx-config"]');
            if (e2) {
              return S(e2.content);
            } else {
              return null;
            }
          }
          function kr() {
            var e2 = Pr();
            if (e2) {
              Y.config = se(Y.config, e2);
            }
          }
          Nr(function() {
            kr();
            Ir();
            var e2 = te().body;
            Pt(e2);
            var t2 = te().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
            e2.addEventListener("htmx:abort", function(e3) {
              var t3 = e3.target;
              var r3 = ie(t3);
              if (r3 && r3.xhr) {
                r3.xhr.abort();
              }
            });
            var r2 = window.onpopstate;
            window.onpopstate = function(e3) {
              if (e3.state && e3.state.htmx) {
                Gt();
                ae(t2, function(e4) {
                  fe(e4, "htmx:restored", { document: te(), triggerEvent: fe });
                });
              } else {
                if (r2) {
                  r2(e3);
                }
              }
            };
            setTimeout(function() {
              fe(e2, "htmx:load", {});
              e2 = null;
            }, 0);
          });
          return Y;
        }();
      });
    }
  });

  // node_modules/htmx.org/dist/ext/json-enc.js
  var require_json_enc = __commonJS({
    "node_modules/htmx.org/dist/ext/json-enc.js"() {
      htmx.defineExtension("json-enc", {
        onEvent: function(name, evt) {
          if (name === "htmx:configRequest") {
            evt.detail.headers["Content-Type"] = "application/json";
          }
        },
        encodeParameters: function(xhr, parameters, elt) {
          xhr.overrideMimeType("text/json");
          return JSON.stringify(parameters);
        }
      });
    }
  });

  // web/app.js
  window.htmx = require_htmx_min();
  require_json_enc();
})();
