document.addEventListener('DOMContentLoaded', function() {

	// window.onload = function() {
	// 	// UIkit.scroll(element, options);
	// 	var el = document.getElementById('#sub-menu');
	// 	el.scrollIntoView(true);
	// };

	// var rsScroll = document.getElementById('sub-menu');
	// UIkit.scroll('#sub-menu').scrollTo(rsScroll);

    // UIkit
    // =========================================================================
    // UIkit.update(event = 'update');

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
