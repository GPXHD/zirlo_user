﻿!function (a) {
    a.fn.extend({
        Broadcast: function (b) {
            var c = {
                width: 640,
                height: 360,
                control: null,
                auto: !0,
                during: 3e3,
                speed: 800,
                mousewheel: !1,
                direkey: !1
            },
				d = a.extend(c, b);
            return a(this).each(function () {
                var b = a(this),
					c = a("ul", b),
					e = a("li", b),
					f = e.length,
					g = 0,
					h = null,
					i = '<div class="desc"></div>';
                b.append(i);
                var j = a("p.title a", b),
					k = a("em.curr-num", b),
					l = a("em.total-num", b),
					m = 0,
					n = {},
					o = {},
					p = {
					    mobileDevice: navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),
					    init: function () {
					        if (p.style(), p.mobileDevice) {
					            var e = a(window).width(),
									g = d.width / d.height;
					            //d.width = e, d.height = e / g, b.css({
					            //    fontSize: a(window).width() / 640 * 1.285 + "rem"
					            //})
					        }
					        b.add("img", b).width(d.width).height(d.height), c.width(f * d.width), p.initBannerBox(), p.description(), p.bindControl(), f > 2 && c.prepend(a("li", c).last()).css({
					            left: -d.width
					        }), d.auto && p.auto()
					    },
					    auto: function () {
					        h = d.auto ? setInterval(function () {
					            p.moving(!0)
					        }, d.during) : null
					    },
					    stop: function () {
					        h && clearInterval(h)
					    },
					    initBannerBox: function () {
					        for (var index = 0; index < f; index++) {
					            var bannerbox = $("<div class='bannerbox'><div>");
					            if (index == 0) bannerbox.addClass("selected");
					            $(".desc").append(bannerbox);
					        }
					    },
					    setBannerBozBackColor: function (index) {
					        console.log(index);
					        $(".desc .bannerbox").removeClass("selected");
					        $(".desc .bannerbox:eq(" + index + ")").addClass("selected");
					    },
					    description: function () {
					        k.text(g + 1), l.text(f), j.text(e.eq(g).find("img").attr("alt")).attr("href", e.eq(g).find("a").attr("href")).width(d.width - a("span.num", b).width() - 20)
					    },
					    bindControl: function () {
					        if (p.mobileDevice) {
					            if (d.control && d.control.remove(), 2 >= f) return;
					            c.get(0).addEventListener("touchstart", p.touchstart, !1), c.get(0).addEventListener("touchmove", p.touchmove, !1), c.get(0).addEventListener("touchend", p.touchend, !1)
					        } else {
					            b.hover(function () {
					                d.auto && p.stop(), a(document).on("keydown", function (a) {
					                    a.preventDefault(), (39 === a.keyCode || 40 === a.keyCode) && p.moving(!0), (37 === a.keyCode || 38 === a.keyCode) && p.moving(!1)
					                })
					            }, function () {
					                a(document).unbind(), d.auto && p.auto()
					            });
					            var e = void 0 !== document.mozHidden ? "DOMMouseScroll" : "mousewheel";
					            d.mousewheel && b.on(e, function (a) {
					                a.preventDefault(), a.stopPropagation();
					                var c = a.originalEvent.wheelDelta ? a.originalEvent.wheelDelta : -a.originalEvent.detail,
										d = b.data("timeoutId");
					                d && clearInterval(d), b.data("timeoutId", setTimeout(function () {
					                    p.moving(0 > c ? !0 : !1), b.removeData("timeoutId")
					                }, 100))
					            }), d.control && d.control.on("click", function () {
					                p.moving(a(this).index() ? !0 : !1); 
					            }).hover(function () {
					                d.auto && p.stop()
					            }, function () {
					                d.auto && p.auto()
					            })
					        }
					    },
					    moving: function (b) {
					        if (1 != f) {
					            var e = 0,
									h = !0;
					            "boolean" == typeof b ? h = b : (h = b > 0 ? !1 : !0, e = b), g = h ? g >= f - 1 ? 0 : g + 1 : 0 >= g ? f - 1 : g - 1, p.description(), f > 2 ? (h ? c.append(a("li", c).first()).css({
					                left: 0 + e
					            }) : c.prepend(a("li", c).last()).css({
					                left: -2 * d.width + e
					            }), c.stop().animate({
					                left: [-d.width, "easeOutExpo"]
					            }, d.speed, "swing", p.setBannerBozBackColor(g))) : h ? c.stop().animate({
					                left: -d.width
					            }, .6 * d.speed, function () {
					                a(this).append(a("li", this).first()).css({
					                    left: 0
					                });
					                p.setBannerBozBackColor($(".bannerslider li").first().attr("sort"));
					            }) : c.prepend(a("li", c).last()).css({
					                left: -d.width + e
					            }).stop().animate({
					                left: 0
					            }, .6 * d.speed, "swing", p.setBannerBozBackColor($(".bannerslider li").first().attr("sort")))
					        }
					    },
					    touchPos: function (a) {
					        for (var c, d, e, b = a.changedTouches, f = {}, g = 0; g < b.length; g++) c = b[g], d = c.clientX, e = c.clientY;
					        return f.x = d, f.y = e, f
					    },
					    touchstart: function (a) {
					        p.stop(), m = (new Date).getTime(), n = p.touchPos(a), o.left = c.offset().left
					    },
					    touchmove: function (a) {
					        a.preventDefault();
					        var b = p.touchPos(a).x - n.x;
					        c.stop().css({
					            left: o.left + b
					        })
					    },
					    touchend: function (a) {
					        var b = p.touchPos(a).x - n.x,
								e = (new Date).getTime() - m;
					        0 !== Math.abs(b) && (350 >= e ? p.moving(b) : Math.abs(b) <= d.width / 2 ? c.stop().animate({
					            left: [o.left, "easeOutExpo"]
					        }, d.speed / 2) : p.moving(b), d.auto && p.auto())
					    },
					    style: function () {
					        b.css({
					            position: "relative",
					            overflow: "hidden"
					        }).fadeIn(450), e.css({
					            display: "inline",
					            "float": "left"
					        }), c.add(a(".bg", b)).add(a(".desc", b)).add(a(".num", b)).css({
					            position: "absolute"
					        }), a(".bg", b).css({
					            background: "#000",
					            filter: "alpha(opacity=50)",
					            opacity: .5
					        }).add(a(".desc", b)).css({
					            width: "100%",
					            height: "2.4em",
					            bottom: 0,
					            left: 0
					        }), a(".desc").css({
					            zIndex: 2
					        }), a("p.title", b).css({
					            "float": "left",
					            height: "1em",
					            padding: "1em .5em",
					            fontFamily: "microsoft yahei"
					        }), a("p.title a", b).css({
					            display: "block",
					            color: "#fff",
					            textOverflow: "ellipsis",
					            whiteSpace: "nowrap",
					            overflow: "hidden"
					        }), a("span.num", b).css({
					            right: ".5em",
					            color: "#fff",
					            fontStyle: "italic",
					            fontFamily: 'Georgia, "Monotype Corsiva", Arial, sans-serif'
					        }), a("em", b).css({
					            display: "inline-block",
					            position: "relative"
					        }), a("em.curr-num", b).css({
					            fontSize: "2.4em",
					            height: "2em",
					            lineHeight: "2em",
					            color: "#cc191b",
					            bottom: ".625em"
					        }), a("em.total-num", b).css({
					            fontSize: "2em",
					            height: "2em",
					            lineHeight: "2em",
					            bottom: ".325em"
					        }), a("em.line", b).css({
					            width: "16px",
					            height: "2em",
					            fontSize: "1.8em",
					            lineHeight: "2em",
					            bottom: ".525em"
					        })
					    }
					};
                p.init()
            })
        }
    })
}(jQuery), $.extend($.easing, {
    easeOutExpo: function (a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    }
});