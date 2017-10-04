$(document).ready(function() {

	// Lazysizes
	// lazySizes.init();

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
            // when window width is <= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is <= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is <= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });

	// Inputmask
    $(".input-phone").inputmask({
        mask: "+7 (999) 999-99-99"
    });

	// $(":input").inputmask();

});
