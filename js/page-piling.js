/* ===========================================================
 * pagepiling.js 0.0.8 (Beta)
 *
 * https://github.com/alvarotrigo/pagePiling.js
 * MIT licensed
 *
 * Copyright (C) 2014 alvarotrigo.com - A project by Alvaro Trigo
 *
 * ========================================================== */

(function (b) {
    b.fn.pagepiling = function (c) {
        function A(a) { var c = b(".pp-section.active").index(".pp-section"); a = a.index(".pp-section"); return c > a ? "up" : "down" } function g(a, f) {
            var d = { destination: a, animated: f, activeSection: b(".pp-section.active"), anchorLink: a.data("anchor"), sectionIndex: a.index(".pp-section"), toMove: a, yMovement: A(a), leavingSection: b(".pp-section.active").index(".pp-section") + 1 }; d.activeSection.is(a) || ("undefined" === typeof d.animated && (d.animated = !0), "undefined" !== typeof d.anchorLink && c.anchors.length &&
                (location.hash = d.anchorLink), d.destination.addClass("active").siblings().removeClass("active"), d.sectionsToMove = B(d), "down" === d.yMovement ? (d.translate3d = "vertical" !== c.direction ? "translate3d(-100%, 0px, 0px)" : "translate3d(0px, -100%, 0px)", d.scrolling = "-100%", c.css3 || d.sectionsToMove.each(function (a) { a != d.activeSection.index(".pp-section") && b(this).css(m(d.scrolling)) }), d.animateSection = d.activeSection) : (d.translate3d = "translate3d(0px, 0px, 0px)", d.scrolling = "0", d.animateSection = a), b.isFunction(c.onLeave) &&
                c.onLeave.call(this, d.leavingSection, d.sectionIndex + 1, d.yMovement), C(d), D(d.anchorLink), E(d.anchorLink, d.sectionIndex), r = d.anchorLink, s = (new Date).getTime())
        } function C(a) {
            c.css3 ? (t(a.animateSection, a.translate3d, a.animated), a.sectionsToMove.each(function () { t(b(this), a.translate3d, a.animated) }), setTimeout(function () { u(a) }, c.scrollingSpeed)) : (a.scrollOptions = m(a.scrolling), a.animated ? a.animateSection.animate(a.scrollOptions, c.scrollingSpeed, c.easing, function () { n(a); n(a) }) : (a.animateSection.css(m(a.scrolling)),
                setTimeout(function () { n(a); u(a) }, 400)))
        } function u(a) { b.isFunction(c.afterLoad) && c.afterLoad.call(this, a.anchorLink, a.sectionIndex + 1) } function B(a) { return "down" === a.yMovement ? b(".pp-section").map(function (c) { if (c < a.destination.index(".pp-section")) return b(this) }) : b(".pp-section").map(function (c) { if (c > a.destination.index(".pp-section")) return b(this) }) } function n(a) { "up" === a.yMovement && a.sectionsToMove.each(function (c) { b(this).css(m(a.scrolling)) }) } function m(a) {
            return "vertical" === c.direction ? { top: a } :
                { left: a }
        } function p() { return (new Date).getTime() - s < 600 + c.scrollingSpeed ? !0 : !1 } function t(a, b, c) { a.toggleClass("pp-easing", c); a.css({ "-webkit-transform": b, "-moz-transform": b, "-ms-transform": b, transform: b }) } function h(a) { if (!p()) { a = window.event || a; a = Math.max(-1, Math.min(1, a.wheelDelta || -a.deltaY || -a.detail)); var c = b(".pp-section.active"), c = v(c); 0 > a ? k("down", c) : k("up", c); return !1 } } function k(a, c) {
            if ("down" == a) var d = "bottom", e = b.fn.pagepiling.moveSectionDown; else d = "top", e = b.fn.pagepiling.moveSectionUp;
            if (0 < c.length) if (isScrolled(d, c)) e(); else return !0; else e()
        } function v(a) { return scrollable = a.find(".pp-scrollable") } function w() { return window.PointerEvent ? { down: "pointerdown", move: "pointermove", up: "pointerup" } : { down: "MSPointerDown", move: "MSPointerMove", up: "MSPointerUp" } } function x(a) { var b = []; window.navigator.msPointerEnabled ? (b.y = a.pageY, b.x = a.pageX) : (b.y = a.touches[0].pageY, b.x = a.touches[0].pageX); return b } function F(a) { a = x(a.originalEvent); l = a.y; touchStartX = a.x } function G(a) {
            var f = a.originalEvent;
            y(a.target) || (a.preventDefault(), a = b(".pp-section.active"), a = v(a), p() || (f = x(f), touchEndY = f.y, touchEndX = f.x, "horizontal" === c.direction && Math.abs(touchStartX - touchEndX) > Math.abs(l - touchEndY) ? Math.abs(touchStartX - touchEndX) > e.width() / 100 * c.touchSensitivity && (touchStartX > touchEndX ? k("down", a) : touchEndX > touchStartX && k("up", a)) : Math.abs(l - touchEndY) > e.height() / 100 * c.touchSensitivity && (l > touchEndY ? k("down", a) : touchEndY > l && k("up", a))))
        } function y(a, f) {
            f = f || 0; var d = b(a).parent(); return f < c.normalScrollElementTouchThreshold &&
                d.is(c.normalScrollElements) ? !0 : f == c.normalScrollElementTouchThreshold ? !1 : y(d, ++f)
        } function H() {
            b("body").append('<div id="pp-nav"><ul></ul></div>'); var a = b("#pp-nav"); a.css("color", c.navigation.textColor); a.addClass(c.navigation.position); for (var f = 0; f < b(".pp-section").length; f++) { var d = ""; c.anchors.length && (d = c.anchors[f]); if ("undefined" !== typeof c.navigation.tooltips) { var e = c.navigation.tooltips[f]; "undefined" === typeof e && (e = "") } a.find("ul").append('<li data-tooltip="' + e + '"><a href="#' + d + '"><span></span></a></li>') } a.find("span").css("border-color",
                c.navigation.bulletsColor)
        } function E(a, f) { c.navigation && (b("#pp-nav").find(".active").removeClass("active"), a ? b("#pp-nav").find('a[href="#' + a + '"]').addClass("active") : b("#pp-nav").find("li").eq(f).find("a").addClass("active")) } function D(a) { c.menu && (b(c.menu).find(".active").removeClass("active"), b(c.menu).find('[data-menuanchor="' + a + '"]').addClass("active")) } function I() {
            var a = document.createElement("p"), b, c = {
                webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform",
                MozTransform: "-moz-transform", transform: "transform"
            }; document.body.insertBefore(a, null); for (var e in c) void 0 !== a.style[e] && (a.style[e] = "translate3d(1px,1px,1px)", b = window.getComputedStyle(a).getPropertyValue(c[e])); document.body.removeChild(a); return void 0 !== b && 0 < b.length && "none" !== b
        } var e = b(this), r, s = 0, z = "ontouchstart" in window || 0 < navigator.msMaxTouchPoints, l = touchStartX = touchEndY = touchEndX = 0; c = b.extend({
            direction: "vertical", menu: null, verticalCentered: !0, sectionsColor: [], anchors: [], scrollingSpeed: 700,
            easing: "swing", loopBottom: !1, loopTop: !1, css3: !0, navigation: { textColor: "#000", bulletsColor: "#000", position: "right", tooltips: ["section1", "section2", "section3", "section4"] }, normalScrollElements: null, normalScrollElementTouchThreshold: 5, touchSensitivity: 5, keyboardScrolling: !0, sectionSelector: ".section", animateAnchor: !1, afterLoad: null, onLeave: null, afterRender: null
        }, c); b.fn.pagepiling.setScrollingSpeed = function (a) { c.scrollingSpeed = a }; b.fn.pagepiling.setMouseWheelScrolling = function (a) {
            a ? e.get(0).addEventListener ?
                (e.get(0).addEventListener("mousewheel", h, !1), e.get(0).addEventListener("wheel", h, !1)) : e.get(0).attachEvent("onmousewheel", h) : e.get(0).addEventListener ? (e.get(0).removeEventListener("mousewheel", h, !1), e.get(0).removeEventListener("wheel", h, !1)) : e.get(0).detachEvent("onmousewheel", h)
        }; b.fn.pagepiling.setAllowScrolling = function (a) {
            a ? (b.fn.pagepiling.setMouseWheelScrolling(!0), z && (MSPointer = w(), e.off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, F), e.off("touchmove " + MSPointer.move).on("touchmove " +
                MSPointer.move, G))) : (b.fn.pagepiling.setMouseWheelScrolling(!1), z && (MSPointer = w(), e.off("touchstart " + MSPointer.down), e.off("touchmove " + MSPointer.move)))
        }; b.fn.pagepiling.setKeyboardScrolling = function (a) { c.keyboardScrolling = a }; b.fn.pagepiling.moveSectionUp = function () { var a = b(".pp-section.active").prev(".pp-section"); !a.length && c.loopTop && (a = b(".pp-section").last()); a.length && g(a) }; b.fn.pagepiling.moveSectionDown = function () {
            var a = b(".pp-section.active").next(".pp-section"); !a.length && c.loopBottom &&
                (a = b(".pp-section").first()); a.length && g(a)
        }; b.fn.pagepiling.moveTo = function (a) { var c = "", c = isNaN(a) ? b('[data-anchor="' + a + '"]') : b(".pp-section").eq(a - 1); 0 < c.length && g(c) }; b(c.sectionSelector).each(function () { b(this).addClass("pp-section") }); c.css3 && (c.css3 = I()); b(e).css({ overflow: "hidden", "-ms-touch-action": "none", "touch-action": "none" }); b.fn.pagepiling.setAllowScrolling(!0); b.isEmptyObject(c.navigation) || H(); var q = b(".pp-section").length; b(".pp-section").each(function (a) {
            b(this).data("data-index",
                a); b(this).css("z-index", q); a || 0 !== b(".pp-section.active").length || b(this).addClass("active"); "undefined" !== typeof c.anchors[a] && b(this).attr("data-anchor", c.anchors[a]); "undefined" !== typeof c.sectionsColor[a] && b(this).css("background-color", c.sectionsColor[a]); c.verticalCentered && b(this).addClass("pp-table").wrapInner('<div class="pp-tableCell" style="height:100%" />'); q -= 1
        }).promise().done(function () {
            c.navigation && (b("#pp-nav").css("margin-top", "-" + b("#pp-nav").height() / 2 + "px"), b("#pp-nav").find("li").eq(b(".pp-section.active").index(".pp-section")).find("a").addClass("active"));
            b(window).on("load", function () { var a = window.location.hash.replace("#", ""), a = b('.pp-section[data-anchor="' + a + '"]'); 0 < a.length && g(a, c.animateAnchor) }); b.isFunction(c.afterRender) && c.afterRender.call(this)
        }); b(window).on("hashchange", function () { var a = window.location.hash.replace("#", "").split("/")[0]; a.length && a && a !== r && (a = isNaN(a) ? b('[data-anchor="' + a + '"]') : b(".pp-section").eq(a - 1), g(a)) }); b(document).keydown(function (a) {
            if (c.keyboardScrolling && !p()) switch (a.which) {
                case 38: case 33: b.fn.pagepiling.moveSectionUp();
                    break; case 40: case 34: b.fn.pagepiling.moveSectionDown(); break; case 36: b.fn.pagepiling.moveTo(1); break; case 35: b.fn.pagepiling.moveTo(b(".pp-section").length); break; case 37: b.fn.pagepiling.moveSectionUp(); break; case 39: b.fn.pagepiling.moveSectionDown()
            }
        }); c.normalScrollElements && (b(document).on("mouseenter", c.normalScrollElements, function () { b.fn.pagepiling.setMouseWheelScrolling(!1) }), b(document).on("mouseleave", c.normalScrollElements, function () { b.fn.pagepiling.setMouseWheelScrolling(!0) })); b(document).on("click touchstart",
            "#pp-nav a", function (a) { a.preventDefault(); a = b(this).parent().index(); g(b(".pp-section").eq(a)) }); b(document).on({ mouseenter: function () { var a = b(this).data("tooltip"); b('<div class="pp-tooltip ' + c.navigation.position + '">' + a + "</div>").hide().appendTo(b(this)).fadeIn(200) }, mouseleave: function () { b(this).find(".pp-tooltip").fadeOut(200, function () { b(this).remove() }) } }, "#pp-nav li")
    }
})(jQuery);