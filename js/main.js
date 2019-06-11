'use strict'

{
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');
const close = document.getElementById('close');
const modal3 = document.getElementById('modal3');
const model = document.getElementById('modeling');
const goToModel = document.getElementById('goToModel');
const modal4 = document.getElementById('modal4');
const goToPhoto = document.getElementById('goToPhoto');
const photo = document.getElementById('photo');


mask.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
  modal3.classList.add('hidden');
  modal4.classList.add('hidden');
});

open.addEventListener('click', () => {
  modal.classList.remove('hidden');
  mask.classList.remove('hidden');
});

  close.addEventListener('click', () => {
  modal.classList.add('hidden');
  mask.classList.add('hidden');
});

model.addEventListener( 'click', () => {
  modal3.classList.remove('hidden');
  mask.classList.remove('hidden');
});

  modal3.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal3.classList.add('hidden');
});

goToModel.addEventListener('click', () => {
window.location.href="models/models.html"
});


photo.addEventListener('click', () => {
  modal4.classList.remove('hidden');
  mask.classList.remove('hidden');
});

  modal4.addEventListener('click', () => {
  modal4.classList.add('hidden');
  mask.classList.add('hidden');
});

goToPhoto.addEventListener('click', () => {
window.location.href="image.html"
});


});

}
