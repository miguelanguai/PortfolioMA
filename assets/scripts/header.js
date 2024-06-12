"use strict";

window.addEventListener('scroll', function() {
    let header = document.getElementById('header-nav');
    if (window.scrollY > 50) { // Adjust the value as needed
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});