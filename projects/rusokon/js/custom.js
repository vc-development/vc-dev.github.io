document.addEventListener('DOMContentLoaded', function () {

	// Lazysizes
	// =========================================================================
	// lazySizes.init();

	// Inputmask
	// =========================================================================
	Inputmask({
		"mask": "+7 (999) 999-99-99"
	}).mask("input[type='tel']");

	// Swiper
	// =========================================================================

	// Banner Slider
	var swiperSlider = new Swiper({
		el: '#rs-slider',
		loop: true,
		effect: 'fade',
		lidesPerView: 1,
		navigation: {
			nextEl: '.uk-slidenav-next',
			prevEl: '.uk-slidenav-previous'
		}
	});

	// Wood Slider (sleeping)
	var woodSwiper = new Swiper('#slider-wood', {
		el: '#slider-wood',
		effect: 'fade'
	});

	// Window Carousel
	var swiperWindow = new Swiper({
		el: '#rs-carousel-window',
		loop: true,
		slidesPerView: 1,
		pagination: ".uk-dotnav",
		paginationClickable: true,
		paginationElement: "li",
		pagination: {
			el: '.uk-dotnav',
			clickable: true,
			renderBullet: function (index, className) {
				return '<li class="' + className + '"><a href="#"></a></li>';
			},
			bulletClass: "rs-slider-dot",
			bulletActiveClass: "uk-active",
		}
	});

	// KV Slider
	var swiperSliderkv = new Swiper({
		el: '#rs-slider-kv',
		loop: true,
		slidesPerView: 1,
		pagination: ".uk-dotnav",
		paginationClickable: true,
		paginationElement: "li",
		pagination: {
			el: '.uk-dotnav',
			clickable: true,
			renderBullet: function (index, className) {
				return '<li class="' + className + '"><a href="#"></a></li>';
			},
			bulletClass: "rs-slider-dot",
			bulletActiveClass: "uk-active",
		}
	});

	// KV Carousel
	var swiperCarouselkv = new Swiper({
		el: '#rs-carousel-kv',
		loop: true,
		slidesPerView: 3,
		pagination: ".uk-dotnav",
		paginationClickable: true,
		paginationElement: "li",
		pagination: {
			el: '.uk-dotnav',
			clickable: true,
			renderBullet: function (index, className) {
				return '<li class="' + className + '"><a href="#"></a></li>';
			},
			bulletClass: "rs-slider-dot",
			bulletActiveClass: "uk-active",
		},
		spaceBetween: 40,
		breakpoints: {
			480: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 40
			}
		}
	});

	// Reviews Carousel
	var swiperReviews = new Swiper({
		el: '#rs-carousel-reviews',
		loop: true,
		autoHeight: true,
		slidesPerView: 1,
		pagination: ".uk-dotnav",
		paginationClickable: true,
		paginationElement: "li",
		pagination: {
			el: '.uk-dotnav',
			clickable: true,
			renderBullet: function (index, className) {
				return '<li class="' + className + '"><a href="#"></a></li>';
			},
			bulletClass: "rs-slider-dot",
			bulletActiveClass: "uk-active",
		}
	});

	// Gallery Carousel
	var swiperGallery = new Swiper({
		el: '#rs-carousel-gallery',
		loop: true,
		autoHeight: true,
		slidesPerView: 3,
		paginationElement: "li",
		pagination: {
			el: '.uk-dotnav',
			clickable: true,
			renderBullet: function (index, className) {
				return '<li class="' + className + '"><a href="#"></a></li>';
			},
			bulletClass: "rs-slider-dot",
			bulletActiveClass: "uk-active",
		},
		spaceBetween: 40,
		breakpoints: {
			480: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 40
			}
		}
	});

});

// Happy New Year
$(function () {
	var d = function () {};
	$(document)
		.delegate(".b-ball_bounce", "mouseenter", function () {
			b(this);
			m(this);
		})
		.delegate(".b-ball_bounce .b-ball__right", "mouseenter", function (i) {
			i.stopPropagation();
			b(this);
			m(this);
		});

	function f() {
		var i = "ny2012.swf";
		i = i + "?nc=" + new Date().getTime();
		swfobject.embedSWF(
			i,
			"z-audio__player",
			"1",
			"1",
			"9.0.0",
			null, {}, {
				allowScriptAccess: "always",
				hasPriority: "true"
			}
		);
	}

	function h(i) {
		if ($.browser.msie) {
			return window[i];
		} else {
			return document[i];
		}
	}
	window.flashInited = function () {
		d = function (j) {
			try {
				h("z-audio__player").playSound(j);
			} catch (i) {}
		};
	};
	if (window.swfobject) {
		window.setTimeout(function () {
			$("body").append(
				'<div class="g-invisible"><div id="z-audio__player"></div></div>'
			);
			f();
		}, 100);
	}
	var l = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "[",
        "]",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        ";",
        "'",
        "\\"
    ];
	var k = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
	var g = 36;
	var a = {};
	for (var e = 0, c = l.length; e < c; e++) {
		a[l[e].charCodeAt(0)] = e;
	}
	for (var e = 0, c = k.length; e < c; e++) {
		a[k[e].charCodeAt(0)] = e;
	}
	$(document).keypress(function (j) {
		var i = $(j.target);
		if (!i.is("input") && j.which in a) {
			d(a[j.which]);
		}
	});

	function b(n) {
		if (n.className.indexOf("b-ball__right") > -1) {
			n = n.parentNode;
		}
		var i = /b-ball_n(\d+)/.exec(n.className);
		var j = /b-head-decor__inner_n(\d+)/.exec(n.parentNode.className);
		if (i && j) {
			i = parseInt(i[1], 10) - 1;
			j = parseInt(j[1], 10) - 1;
			d((i + j * 9) % g);
		}
	}

	function m(j) {
		var i = $(j);
		if (j.className.indexOf(" bounce") > -1) {
			return;
		}
		i.addClass("bounce");

		function n() {
			i.removeClass("bounce").addClass("bounce1");

			function o() {
				i.removeClass("bounce1").addClass("bounce2");

				function p() {
					i.removeClass("bounce2").addClass("bounce3");

					function q() {
						i.removeClass("bounce3");
					}
					setTimeout(q, 300);
				}
				setTimeout(p, 300);
			}
			setTimeout(o, 300);
		}
		setTimeout(n, 300);
	}
});
