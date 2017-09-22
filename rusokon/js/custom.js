$(document).ready(function() {

    $("#rs-slider").slick({
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        waitForAnimate: false,
        prevArrow: '<a href="#" class="uk-position-center-left uk-position-medium uk-position-z-index" uk-icon="icon: chevron-left; ratio: 3"></a>',
        nextArrow: '<a href="#" class="uk-position-center-right uk-position-medium uk-position-z-index" uk-icon="icon: chevron-right; ratio: 3"></a>'
    });

    // Slick Carousel
    $("#rs-carousel").slick({
        accessibility: false,
		arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        dotsClass: 'uk-flex uk-flex-center uk-margin uk-dotnav',
        customPaging: function(slider, i) {
            return $('<span></span>');
        },
        waitForAnimate: false
    });

});
