document.addEventListener('DOMContentLoaded', function () {
	Inputmask({
		placeholder: '_',
		showMaskOnHover: !1,
		mask: '+7 (999) 999-99-99',
		clearIncomplete: !0
	}).mask(document.querySelectorAll('input[type="tel"]'))

	yandexMap()
})

// jQuery(document).ready(function ($) {
// 	$('.ajax_form').on('submit', function (e) {
// 		e.preventDefault()
// 		form = $(this)
// 		$.post($(this).attr('action'), $(this).serialize(), function (data) {
// 			form.trigger('reset')
// 			UIkit.modal.alert('Спасибо за обращение. Наш менеджер свяжется с Вами в ближайшее время.')
// 			yaCounter38788.reachGoal('order2018')
// 		})
// 	})
// 	$('#kolvo').on('change', function () {
// 		if ($(this).val() == 1) {
// 			$('#kolvoli input').each(function (i, el) {
// 				$(el).attr('type', 'radio')
// 				$(el).addClass('uk-radio')
// 				$(el).removeClass('uk-checkbox')
// 			})
// 		} else {
// 			$('#kolvoli input').each(function (i, el) {
// 				$(el).attr('type', 'checkbox')
// 				$(el).removeClass('uk-radio')
// 				$(el).addClass('uk-checkbox')
// 			})
// 		}
// 	})
// 	$('.send').hover(
// 		function () {
// 			$(this).addClass('hover')
// 		},
// 		function () {
// 			$(this).removeClass('hover')
// 		}
// 	)
// 	$('#submit_check').click(function () {
// 		dog = $('input[name=form_text_202]').val()
// 		if (!dog) {
// 			alert('Заполните номер договора!')
// 			return !1
// 		}
// 		$.getJSON(
// 			'/api/checkpay.php', {
// 				ID: dog
// 			},
// 			function (data) {
// 				$('#infp').html('')
// 				$('#div_s').hide()
// 				$('#div_f').hide()
// 				$('#div_ss').hide()
// 				$('#if_ok').show()
// 				$('#if_ok_mes').hide()
// 				arr = data
// 				if (arr.sum == 0) {
// 					$('#infp').html('<label style="margin:20px 0;color:red;"><b>Договор с таким номером не требует оплаты.</b></label>')
// 					return !1
// 				} else if (arr.sum == 'Не найден') {
// 					$('#infp').html('<label style="margin:20px 0;color:red;"><b>Договор c таким номером не найден. Проверьте правильность ввода и попробуйте ввести номер договора еще раз.</b></label>')
// 					return !1
// 				} else if (arr.sum == 'Ошибка') {
// 					$('#infp').html('<label style="margin:20px 0;color:red;"><b>Ошибка обработки. Обратитесь к менеджеру.</b></label>')
// 					return !1
// 				} else if (arr.sum) {
// 					fio = arr.fio.split(/[ .,\(\)]/)
// 					$('input[name=form_text_203]').val(arr.sum)
// 					st = fio[0].slice(0, 3) + '***'
// 					if (fio[1]) {
// 						st += ' ' + fio[1].slice(0, 1)
// 					}
// 					if (fio[2]) {
// 						st += ' ' + fio[2].slice(0, 1)
// 					}
// 					$('input[name=form_text_201]').val(st)
// 					$('#div_s').show()
// 					$('#div_f').show()
// 					$('#div_ss').show()
// 					$('#if_ok').hide()
// 					$('#if_ok_mes').show()
// 				}
// 			},
// 			function () {
// 				$('#submit_check').show()
// 			}
// 		)
// 		return !1
// 	})
// 	$('#submit_send').click(function () {
// 		$('#payform').submit()
// 	})
// })

function yandexMap() {
	ymaps.ready(init)

	function init() {
		var myMap = new ymaps.Map('ymap', {
			center: [55.775535, 37.60302],
			zoom: 14,
			controls: []
		})

		myMap.behaviors.disable('scrollZoom')
		myMap.behaviors.disable('drag')

		var myPlacemark = new ymaps.Placemark(
			[55.775535, 37.60302], {
				balloonContent: '127006, г. Москва, м. Новослободская, ул. Долгоруковская д. 21 стр. 1, этаж 3, офис 303',
				hintContent: '127006, г. Москва, м. Новослободская, ул. Долгоруковская д. 21 стр. 1, этаж 3, офис 303',
				iconCaption: 'ООО «ЕвроОкна»'
			}, {
				preset: 'islands#greenDotIconWithCaption',
				iconColor: '#cc0000'
			}
		)
		myMap.geoObjects.add(myPlacemark)
	}
}