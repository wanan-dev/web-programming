let burgerBtn = document.getElementById("burgerBtn");
let navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
});
let currentSlide = 0;

function showSlide(index) {
    let slides = document.getElementById("slides");
    let total = slides.children.length;

    if (index >= total) currentSlide = 0;
    else if (index < 0) currentSlide = total - 1;
    else currentSlide = index;

    slides.style.transform = "translateX(-" + currentSlide * 100 + "%)";

    let dots = document.querySelectorAll(".dots span");

    dots.forEach(dot => dot.classList.remove("active"));

    dots[currentSlide].classList.add("active");
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

setInterval(() => {
    nextSlide();
}, 3000);

showSlide(0);
