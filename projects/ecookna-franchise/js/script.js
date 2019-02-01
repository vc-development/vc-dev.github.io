document.addEventListener('DOMContentLoaded', function () {
	Inputmask({
		placeholder: '_',
		showMaskOnHover: false,
		mask: '+7 (999) 999-99-99'
	}).mask(document.querySelectorAll('input[type="tel"]'))
});
