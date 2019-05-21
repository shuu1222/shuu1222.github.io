'use strict'

{
  const mask = document.getElementById('mask');
  const goToType = document.getElementById('goToType');
  const typing = document.getElementById('typing');
  const modal2 = document.getElementById('modal2');


typing.addEventListener('click', () => {
  modal2.classList.remove('hidden');
  mask.classList.remove('hidden');
});

  goToType.addEventListener('click', () => {
  modal2.classList.add('hidden');
  mask.classList.add('hidden');
  window.open("typinggame/typing.html")
});

mask.addEventListener('click', () => {
  modal2.classList.add('hidden');
  mask.classList.add('hidden');
});


}
