document.addEventListener("DOMContentLoaded", function() {
    var menu = document.getElementById("menu");
    var burgerMenu = document.querySelector(".burger-menu");
    var isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        menu.style.display = isMenuOpen ? "flex" : "none";
    }

    function closeMenu(event) {
        if (!isMenuOpen) return; // Don't close if the menu is not open
        var isClickInsideMenu = menu.contains(event.target) || burgerMenu.contains(event.target);
        if (!isClickInsideMenu) {
            menu.style.display = "none";
            isMenuOpen = false;
        }
    }

    function closeMenuOnScroll() {
        if (isMenuOpen) {
            menu.style.display = "none";
            isMenuOpen = false;
        }
    }

    burgerMenu.addEventListener("click", toggleMenu);
    document.addEventListener("mousedown", closeMenu);
    window.addEventListener("scroll", closeMenuOnScroll);
});
