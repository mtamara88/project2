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
const fragment = document.createDocumentFragment();
const elementClasses = sections.classList;
const scrollToTopButton = document.querySelector('#scrollToTop');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildMenu() {
    sections.forEach((section) => {
        const listElement = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.innerText = section.getAttribute('data-nav');
        linkElement.setAttribute('class', 'menu__link');

        // scroll to anchor ID using scroll to event
        linkElement.addEventListener("click", () => {
            section.scrollIntoView({ behavior: "smooth" });
        });


        listElement.appendChild(linkElement);
        fragment.appendChild(listElement);
    });
    menu.appendChild(fragment);
};

// Add class 'active' to section when it is near top of viewport
function makeActive() {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        // detecting the position of the section and highlighting the current section 
        if (box.top <= 150 && box.bottom >= 150) {
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

// Function to hide menu after scrolling

function hideMenu() {
    let timer;

}


/**
 * End Main Functions
 * Begin Events
 * 
*/// Go to top of the page on button click


// Set sections as active
document.addEventListener("scroll", function () {
    makeActive();
});

// Display Scroll To Top Button

window.addEventListener('scroll', displayScrollToTopButton);

// Scroll to Top on Button-Click

scrollToTopButton.addEventListener('click', scrollToTop);

// Build navigation
buildMenu();