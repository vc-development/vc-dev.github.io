$(document).ready(function() {

    // UIkit.tab('#my-tab').$destroy();

    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        // linkElement: '.animsition-link',
        linkElement: 'a:not([target="_blank"]):not([href^="#"])',
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function(url) {
            window.location.href = url;
        }
    });

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

// Маски для инпутов
$(".input-phone").mask("+7 (999) 999-99-99", { placeholder: "+7 (___) ___-__-__" });

});
