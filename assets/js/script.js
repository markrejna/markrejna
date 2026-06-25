'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event listener to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo({ top: 0 }); // Resets window to top for desktop view
        
        // MOBILE OVERRIDE: If on a mobile screen, scroll past the sidebar automatically
        if (window.innerWidth <= 768) {
          const mainContent = document.querySelector('.main-content');
          if (mainContent) {
            // Calculates the position of the content block minus the sticky header
            const headerOffset = 90; 
            const elementPosition = mainContent.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }
        
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}