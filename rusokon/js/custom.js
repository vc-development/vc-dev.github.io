$(document).ready(function() {

    // Lazysizes
    // lazySizes.init();

    // Wood Slider (sleeping)
    var woodSwiper = new Swiper('#slider-wood', {
        effect: 'fade',
    });

    // Main Slider
    var swiperSlider = new Swiper("#rs-slider", {
        loop: true,
        effect: "fade",
        slidesPerView: 1,
        nextButton: ".uk-slidenav-next",
        prevButton: ".uk-slidenav-previous",
    });

    // Window Carousel
    var swiperWindow = new Swiper("#rs-carousel-window", {
        loop: true,
        slidesPerView: 1,
        pagination: ".uk-dotnav",
        paginationClickable: true,
        paginationElement: "li",
        paginationBulletRender: function(swiper, index, className) {
            return '<li class="' + className + '"><a href="#"></a></li>';
        },
        bulletClass: "rs-slider-dot",
        bulletActiveClass: "uk-active"
    });

    // KV Slider
    var swiperSliderkv = new Swiper("#rs-slider-kv", {
        loop: true,
        slidesPerView: 1,
        pagination: ".uk-dotnav",
        paginationClickable: true,
        paginationElement: "li",
        paginationBulletRender: function(swiper, index, className) {
            return '<li class="' + className + '"><a href="#"></a></li>';
        },
        bulletClass: "rs-slider-dot",
        bulletActiveClass: "uk-active"
    });

	// KV Carousel
    var swiperCarouselkv = new Swiper("#rs-carousel-kv", {
        loop: true,
        slidesPerView: 3,
        pagination: ".uk-dotnav",
        paginationClickable: true,
        paginationElement: "li",
        paginationBulletRender: function(swiper, index, className) {
            return '<li class="' + className + '"><a href="#"></a></li>';
        },
        bulletClass: "rs-slider-dot",
        bulletActiveClass: "uk-active",
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
    var swiperReviews = new Swiper("#rs-carousel-reviews", {
        loop: true,
        slidesPerView: 1,
        pagination: ".uk-dotnav",
        paginationClickable: true,
        paginationElement: "li",
        paginationBulletRender: function(swiper, index, className) {
            return '<li class="' + className + '"><a href="#"></a></li>';
        },
        bulletClass: "rs-slider-dot",
        bulletActiveClass: "uk-active"
    });

    // Gallery Carousel
    var swiperGallery = new Swiper("#rs-carousel-gallery", {
        loop: true,
        slidesPerView: 3,
        pagination: ".uk-dotnav",
        paginationClickable: true,
        paginationElement: "li",
        paginationBulletRender: function(swiper, index, className) {
            return '<li class="' + className + '"><a href="#"></a></li>';
        },
        bulletClass: "rs-slider-dot",
        bulletActiveClass: "uk-active",
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

    // Inputmask
    $("input[type='tel']").inputmask({
        mask: "+7 (999) 999-99-99"
    });

});
