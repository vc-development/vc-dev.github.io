document.addEventListener('DOMContentLoaded', function () {

	// countUp.js
    var countUpOptions = {useEasing: true, useGrouping: true, separator: ' ', decimal: ''}
    var countUp = new CountUp('js-countup', 0, 60874, 0, 3, countUpOptions);
    var salon1 = new CountUp('js-countup-salon1', 0, 5, 0, 3, countUpOptions);
    var salon2 = new CountUp('js-countup-salon2', 0, 20, 0, 3, countUpOptions);
    var salon3 = new CountUp('js-countup-salon3', 0, 54, 0, 3, countUpOptions);
    var salon4 = new CountUp('js-countup-salon4', 0, 68, 0, 3, countUpOptions);

    UIkit.util.on('.js-countup', 'inview', function() {
        countUp.start();
        salon1.start();
        salon2.start();
        salon3.start();
        salon4.start();
    });

	// TypeIt: Price
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

});
