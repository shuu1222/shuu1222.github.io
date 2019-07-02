'use strict';

{
  const images = [
    '../shot/3.jpg',
    '../shot/4.jpg',
    '../shot/5.jpg',
    '../shot/6.jpg',
    '../shot/7.jpg',
    '../shot/8.jpg',
    '../shot/9.jpg',
    '../shot/10.jpg',
  ];

let currentNum=0;

function   setMainImage(image){
document.querySelector('main img').src=image;
}


setMainImage(images[currentNum]);
function removeCurrentClass(){
  document.querySelectorAll('.thumbnail li')[currentNum]
  .classList.remove('current');
}
function addCurrentClass(){
  document.querySelectorAll('.thumbnail li')[currentNum]
  .classList.add('current');
}

const thumbnails = document.querySelector('.thumbnail');
images.forEach((image,index) =>{
  const li = document.createElement('li');
if (index === currentNum){
  li.classList.add('current');
}

li.addEventListener('click',()=>{
  setMainImage(image);
  removeCurrentClass();
  currentNum = index;
  addCurrentClass();
});


  const img = document.createElement('img');
  img.src = image;
  li.appendChild(img);
  thumbnails.appendChild(li);
});

const next = document.getElementById('next');
next.addEventListener('click',()=>{
removeCurrentClass();
currentNum++;
if(currentNum === images.length){
  currentNum = 0;
}
setMainImage(images[currentNum]);
addCurrentClass();
});
const prev = document.getElementById('prev');
prev.addEventListener('click',()=>{
removeCurrentClass();
currentNum--;
if(currentNum < 0){
  currentNum = images.length-1;
}
setMainImage(images[currentNum]);
addCurrentClass();
});

let timeoutId;

function   playSlideshow(){
  timeoutId = setTimeout(()=>{
    next.click();
    playSlideshow();
  },1000);
}


const play = document.getElementById('play');
const pause = document.getElementById('pause');

play.addEventListener('click', ()=> {
play.classList.add('hidden');
pause.classList.remove('hidden');
  playSlideshow();
});

pause.addEventListener('click', ()=> {
play.classList.remove('hidden');
pause.classList.add('hidden');
clearTimeout(timeoutId);
});

}
