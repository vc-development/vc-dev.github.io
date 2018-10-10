document.addEventListener('DOMContentLoaded', function () {
	new BeerSlider(document.getElementById('eo-slider-compare'), {
		start: 30
	});
});

jQuery(document).ready(function ($) {

	// InputMask
	$(".phone-mask").inputmask({
		mask: "+7 (999) 999-99-99"
	});

	new BeerSlider(document.getElementById('eo-slider-compare'), {
		start: 30
	});

	ymaps.ready(function () {
		var myMap = new ymaps.Map('ymap', {
			center: [55.775535, 37.60302],
			controls: [],
			drag: false,
			suppressMapOpenBlock: true,
			zoom: 14
		});
		myMap.behaviors.disable('scrollZoom');
		myMap.behaviors.disable('drag');
		var myPlacemark = new ymaps.Placemark(
		[55.775535, 37.60302], {
				hintContent: '127006, г. Москва, м. Новослободская, ул. Долгоруковская д. 21 стр. 1, этаж 3, офис 303',
				iconCaption: 'Центральный офис продаж'
			}, {
				iconColor: '#cc0000',
				preset: 'islands#greenDotIconWithCaption'
			}
		);
		myMap.geoObjects.add(myPlacemark);
	});

	// Animation Gift
	// setInterval(function() {
	//     var animationName = 'animated tada';
	//     var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	//     $('.gift').addClass(animationName).one(animationend, function() {
	// 		$(this).removeClass(animationName);
	// 	});
	// }, 3000);

});
