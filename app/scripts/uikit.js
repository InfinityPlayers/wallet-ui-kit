// @component EDC | EDC Flipper
// ====================================
let btnEdcFlipper = document.querySelector('#edc--flipper');
let edcFlipper = document.querySelector('.edc__flipper');

btnEdcFlipper.addEventListener('click', function() {

	edcFlipper.classList.toggle('edc__flipper--change');
});