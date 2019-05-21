'use strict'

const image = document.getElementById('lazyImage');

for(var i=0; i < 43;i++){
// image.inneAdjacentrHTML =`<img data-src="shot/${i}.jpg" class="lazyload">`
}


for (var i = 0; i < 43; i++) {
    image.innerHTML +=`<img data-src="shot/${i+2}.jpg" class="lazyload">`;
}
