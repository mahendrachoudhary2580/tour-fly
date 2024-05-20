'use strict';

/**
 * navbar toggle
 */
document.getElementById('dropdown-button-2').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdown-search-city');
    dropdown.classList.toggle('hidden');


});

document.getElementById('jaipur-button').addEventListener('click', () => redirectToLocation(1));
document.getElementById('jodhpur-button').addEventListener('click', () => redirectToLocation(2));
document.getElementById('udaipur-button').addEventListener('click', () => redirectToLocation(3));
document.getElementById('jaisalmer-button').addEventListener('click', () => redirectToLocation(4));
document.getElementById('bikaner-button').addEventListener('click', () => redirectToLocation(5));
document.getElementById('pushkar-button').addEventListener('click', () => redirectToLocation(6));
document.getElementById('kota-button').addEventListener('click', () => redirectToLocation(7));
document.getElementById('mount-abu-button').addEventListener('click', () => redirectToLocation(8));
document.getElementById('ranthambore-button').addEventListener('click', () => redirectToLocation(9));
document.getElementById('bharatpur-button').addEventListener('click', () => redirectToLocation(10));

document.getElementById('jaipur').addEventListener('click', () => redirectToLocation(1));
document.getElementById('jodhpur').addEventListener('click', () => redirectToLocation(2));
document.getElementById('udaipur').addEventListener('click', () => redirectToLocation(3));

function redirectToLocation(districtId) {
    // Redirect to location.html with districtId as a query parameter
    window.location.href = `location.html?districtId=${districtId}`;
}

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function(elem) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function() {
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {

    if (window.scrollY >= 200) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }

});