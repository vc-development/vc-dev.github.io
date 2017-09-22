jQuery(document).ready(function($) {

    // Slick Carousel
    $(".rs-carousel").slick({
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 3000,
        rows: 1,
        slidesToShow: 3,
		slidesToScroll: 1
    });
    $("#next").click(function() {
        $(".your-class").slick("slickNext");
    });
    $("#prev").click(function() {
        $(".your-class").slick("slickPrev");
    });

});
