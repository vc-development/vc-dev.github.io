document.addEventListener('DOMContentLoaded', function () {

	// UIkit Notification test
	// if (Cookies.get('notification') != '') {
	// 	setTimeout(function () {
	// 		UIkit.notification({
	// 			message: '<div class="uk-card uk-card-default uk-box-shadow-xlarge"><div class="uk-card-media-top uk-height-small uk-cover-container"><img class="uk-cover" src="https://getuikit.com/docs/images/light.jpg" alt="Попробуйте угадать страну по окнам" data-uk-cover><canvas width="600" height="400"></canvas></div><div class="uk-card-small uk-card-body"><h4 class="uk-h4 notification-test"><a href="https://getuikit.com/">Попробуйте угадать страну по окнам!</a></h4></div></div>',
	// 			status: 'primary',
	// 			timeout: 0,
	// 			pos: 'bottom-left',
	// 			clsClose: 'uk-notification-close uk-position-z-index',
	// 			clsMsg: 'uk-notification-message uk-padding-remove notification-сookie'
	// 		});
	//
	// 		window.onbeforeunload = function () {
	// 			UIkit.util.on('.notification-сookie', 'close', function () {
	// 				Cookies.set('notification', 'yes', {
	// 					expires: 7
	// 				});
	//
	// 				alert('Test');
	// 			});
	// 		}
	// 	}, 1000);
	// }

	// Inputmask
	Inputmask({
		placeholder: '_',
		showMaskOnHover: false,
		mask: '+7 (999) 999-99-99'
	}).mask(document.querySelectorAll('input[type="tel"]'));

	// Superplaceholder
	superplaceholder({
		el: document.querySelector('input[type="email"]'),
		sentences: ['Укажите Ваш e-mail', 'Например: name@yandex.ru', ' ']
	});

});
