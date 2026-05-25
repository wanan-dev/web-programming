let burgerBtn = document.getElementById("burgerBtn");
let navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
});
