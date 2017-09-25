$(document).ready(function() {

    // UIkit.tab('#my-tab').$destroy();

    // Main Slider
    var swiperSlider = new Swiper("#rs-slider", {
        loop: true,
        effect: "fade",
        slidesPerView: 1,
        nextButton: ".uk-slidenav-next",
        prevButton: ".uk-slidenav-previous"
    });

    // Reviews Carousel
    var swiperReviews = new Swiper("#rs-carousel-reviews", {
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
        slidesPerView: 4,
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
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });


// UIkit.tab('#my-tab').$destroy();

});
