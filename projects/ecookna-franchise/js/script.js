document.addEventListener('DOMContentLoaded', function () {
	//--- TypeIt
	// Rewiew
	// var reviewTypeIt = new TypeIt('.js-review-typeit', {
	// 	strings: '',
	// 	speed: 5,
	// 	lifeLike: false,
	// 	cursor: false,
	// 	waitUntilVisible: true
	// }).go();

	// Price
	var priceTypeIt = new TypeIt('.js-price-typeit', {
		strings: '',
		speed: 30,
		lifeLike: true,
		cursor: false,
		waitUntilVisible: true
	}).go();


	//--- Inputmask
	Inputmask({
		placeholder: '_',
		showMaskOnHover: false,
		mask: '+7 (999) 999-99-99'
	}).mask(document.querySelectorAll('input[type="tel"]'));


	//--- Superplaceholder
	superplaceholder({
		el: document.querySelector('input[type="email"]'),
		sentences: ['Укажите Ваш e-mail', 'Например: name@yandex.ru', ' ']
	});
});
