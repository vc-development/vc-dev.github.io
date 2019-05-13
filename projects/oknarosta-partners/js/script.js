document.addEventListener('DOMContentLoaded', () => {
	new Inputmask({
        placeholder: '_',
        mask: '+7 (999) 999-99-99'
    }).mask(document.querySelectorAll('input[type="tel"]'))
})