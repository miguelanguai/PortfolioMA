"use strict";
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const items = document.querySelectorAll('.carousel-item');

let currentItem = 0;

function showItem(index) {
    const currentItem = document.querySelector('.carousel-item.active');
    
    if (currentItem) {
      currentItem.classList.remove('active');
      currentItem.style.display = 'none'; // Oculta el item anterior
    }
  
    if (items[index]) {
      items[index].classList.add('active');
      items[index].style.display = 'block'; // Muestra el nuevo item
    } else {
      currentItem.classList.add('active'); // Si el índice es inválido, deja el item actual activo
      currentItem.style.display = 'block'; // Muestra el item actual
    }
  }
  

function nextItem() {
    currentItem++;
    if (currentItem >= items.length) {
        currentItem = 0;
    }
    console.log(currentItem);
    showItem(currentItem);
}

function prevItem() {
    console.log("holamundo");
    currentItem--;
    if (currentItem < 0) {
        currentItem = items.length - 1;
    }
    showItem(currentItem);
}

nextBtn.addEventListener('click', nextItem);
prevBtn.addEventListener('click', prevItem);

showItem(currentItem);
