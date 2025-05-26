const menuLink = document.querySelectorAll(".menu__link");
const menuSub = document.querySelectorAll(".menu_sub");

menuLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    menuSub.forEach((sub) => {
      sub.classList.remove("menu_active");
    });

    const targetSubmenu = link.nextElementSibling;
    if (targetSubmenu && targetSubmenu.classList.contains("menu_sub")) {
      targetSubmenu.classList.toggle("menu_active");
    }
  });
});