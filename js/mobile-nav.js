(function() {

  "use strict";

  /**
   * Cache variables
   */
  var toggle = document.querySelector(".menu-btn");
  var menu = document.querySelector(".mobile-nav");
  var links = document.querySelectorAll(".mobile-nav-link");
  var activeClass = "is-active";

  /**
   * Listen for clicks on the toggle
   */
  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    toggle.classList.contains(activeClass) ? deactivateMenu() : activateMenu();
  });

  /**
   * Activate the menu 
   */
  function activateMenu() {
    toggle.classList.add(activeClass);
    menu.classList.add(activeClass);

    for (var i = 0; i < links.length; i++) {
      links[i].classList.add(activeClass);
    };
  }

  /**
   * Deactivate the menu 
   */
  function deactivateMenu() {
    toggle.classList.remove(activeClass);
    menu.classList.remove(activeClass);

    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove(activeClass);
    };
  }

})();