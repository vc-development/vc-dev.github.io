$(document).ready(function() {

    var swiperSlider = new Swiper("#rs-slider", {
        loop: true,
        effect: "fade",
        slidesPerView: 1,
        // pagination: ".uk-dotnav",
        // paginationClickable: true,
		// paginationElement: "li",
        // paginationBulletRender: function(swiper, index, className) {
        //     return '<li class="' + className + '"><a href="#"></a></li>';
        // },
		// bulletClass: "rs-slider-dot",
		// bulletActiveClass: "uk-active",
        nextButton: ".uk-slidenav-next",
        prevButton: ".uk-slidenav-previous"
    });

    var swiperReviews = new Swiper("#rs-carousel-reviews", {
        pagination: ".uk-dotnav",
        paginationClickable: true,
		paginationElement: "li",
        paginationBulletRender: function(swiper, index, className) {
            return '<li class="' + className + '"><a href="#"></a></li>';
        },
		bulletClass: "rs-slider-dot",
		bulletActiveClass: "uk-active",
        // nextButton: ".uk-slidenav-next",
        // prevButton: ".uk-slidenav-previous"
    });

    // $("#rs-slider").slick({
    //     accessibility: false,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear',
    //     waitForAnimate: false,
    //     prevArrow: '<a href="#" class="uk-position-center-left uk-position-medium uk-position-z-index" uk-icon="icon: chevron-left; ratio: 3"></a>',
    //     nextArrow: '<a href="#" class="uk-position-center-right uk-position-medium uk-position-z-index" uk-icon="icon: chevron-right; ratio: 3"></a>'
    // });

    // $("#rs-carousel-reviews").slick({
    //     accessibility: false,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     dots: true,
    //     dotsClass: 'uk-flex uk-flex-center uk-margin uk-dotnav',
    //     customPaging: function(slider, i) {
    //         return $('<span class="uk-link"></span>');
    //     },
    //     waitForAnimate: false,
    //     prevArrow: '<a href="#" class="uk-position-center-left uk-position-medium uk-position-z-index" uk-icon="icon: chevron-left; ratio: 3"></a>',
    //     nextArrow: '<a href="#" class="uk-position-center-right uk-position-medium uk-position-z-index" uk-icon="icon: chevron-right; ratio: 3"></a>'
    // });

    // Slick Carousel
    $("#rs-carousel").slick({
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        dotsClass: 'uk-flex uk-flex-center uk-margin uk-dotnav',
        customPaging: function(slider, i) {
            return $('<span class="uk-link"></span>');
        },
        waitForAnimate: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
