// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Add event listener to change the navbar background on scroll
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');

    // Add a class 'scrolled' when the page is scrolled past 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

