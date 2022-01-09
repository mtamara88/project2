/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const menu = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const elementClasses = sections.classList;
const scrollToTopButton = document.querySelector('#scrollToTop');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// helper function to get Section Position
function getSectionPosition(e) {
    sectionPosition = e.getBoundingClientRect();
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildMenu() {
    for (const section of sections) {
        const listElement = document.createElement('li');
        listElement.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        menu.appendChild(listElement);
    }
}

// Add class 'active' to section when it is near top of viewport
function makeActive() {
    for (const section of sections) {
        getSectionPosition(section);
        //const box = section.getBoundingClientRect();
        // detecting the position of the section and highlighting the current section 
        if (sectionPosition.top <= 150 && sectionPosition.bottom >= 150) {
            if (!section.classList.contains('your-active-class')) {
                section.classList.add('your-active-class');
            }
        } else {
            // Remove active state from other section and corresponding Nav link.
            section.classList.remove('your-active-class');
        }
    }
}

// Function to discplay "Scroll To Top Button" depending of the page Y offset
function displayScrollToTopButton(e) {
    if (window.pageYOffset >= 150) {
        scrollToTopButton.classList.remove('hide');
    }
    else {
        scrollToTopButton.classList.add('hide');
    }
}

// Function to scroll to top of the window (once button is clicked)
function scrollToTop() {
    window.scrollTo(0, 0, "smooth");
}

/**
 * End Main Functions
 * Begin Events
 * 
*/// Go to top of the page on button click

// Set sections as active
document.addEventListener("scroll", function () {
    makeActive();
    getSectionPosition();
});

// Display Scroll To Top Button

window.addEventListener('scroll', displayScrollToTopButton);

// Scroll to Top on Button-Click

scrollToTopButton.addEventListener('click', scrollToTop);

// Build navigation
buildMenu();