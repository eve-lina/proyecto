const iconMenu = document.getElementById("topbar__icon");
const mainMenu = document.getElementById("main-menu");
iconMenu.addEventListener("click", ()=>mainMenu.classList.toggle("menu__show"));
