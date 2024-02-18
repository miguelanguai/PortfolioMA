"use strict";
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const items = document.querySelectorAll('.carousel-item');

let currentItem = 0;

function showItem(index) {
    const currentItem = document.querySelector('.carousel-item.active');
    
    if (currentItem) {
      currentItem.classList.remove('active');
      currentItem.style.display = 'none'; // hides the previous item
    }
  
    if (items[index]) {
      items[index].classList.add('active');
      items[index].style.display = 'block'; // shows the new item
    } else {
      currentItem.classList.add('active'); // if item invalid, the last one active
      currentItem.style.display = 'block'; // shows the actual item
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
