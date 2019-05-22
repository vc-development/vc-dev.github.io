document.addEventListener('DOMContentLoaded', function () {

	// Inputmask
	new Inputmask('+7 (999) 999-99-99').mask(document.querySelectorAll('input[type="tel"]'));

	// Yandex Map
	ymaps.ready(init);

	function init() {
		var myMap = new ymaps.Map('ymap', {
			center: [55.610828, 37.723997],
			zoom: 15,
			controls: ['zoomControl']
		});

		myMap.behaviors.disable('scrollZoom');

		var myPlacemark = new ymaps.Placemark(
			[55.610828, 37.723997], {
				balloonContent: '127006, г. Москва, ул. Генерала Белова, 35',
				hintContent: '127006, г. Москва, ул. Генерала Белова, 35',
				iconCaption: '«Окна Роста»'
			}, {
				preset: 'islands#greenDotIconWithCaption',
				iconColor: '#cc0000'
			}
		)
		myMap.geoObjects.add(myPlacemark);
	}

});