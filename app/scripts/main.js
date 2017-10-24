// @documentation | Color Picker
// ==================================================
let clipboard = new Clipboard('.color__item');
let myDoc = document.querySelector('.doc');

clipboard.on('success', function(e) {
  myDoc.insertAdjacentHTML('afterend', `<div class="alert alert--color" style="background-color: ${e.text};"><h3 class="alert__title">Awesome! Copied to clipboard :)</h3></div>`);
	let alert = document.querySelector('.alert');

  setTimeout(function() {
  	alert.remove();
  }, 1000)
});

// @documentation | GO Flipper
// ==================================================
let btnGoFlipper = document.querySelector('#go--flipper');
let goFlipper = document.querySelector('.go__flipper');

btnGoFlipper.addEventListener('click', function() {

	goFlipper.classList.toggle('go__flipper--change');
});

// @documentation | Card Flipper
// ==================================================
let btnCardFlipper = document.querySelector('#card--flipper');
let cardFlipper = document.querySelector('.card__flipper');

btnCardFlipper.addEventListener('click', function() {

	cardFlipper.classList.toggle('card__flipper--change');
});