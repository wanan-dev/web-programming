function startGame() {
    let difficulty = document.getElementById("difficulty").value;
    let color = document.getElementById("color").value;

    if (difficulty === "" || color === "") {
        alert("Choose difficulty and color!");
        return;
    }

    localStorage.setItem("difficulty", difficulty);
    localStorage.setItem("color", color);

    window.location.href = "game.html";
}

let score = 0;
let timeForClick = 2;
let timeLeft = 2;
let timer;
let countdown;
let pixelSize = 30;

if (window.location.pathname.includes("game.html")) {
    startGameScreen();
}

function startGameScreen() {
    let difficulty = localStorage.getItem("difficulty");
    let color = localStorage.getItem("color");

    if (difficulty === "easy") {
        timeForClick = 3;
        pixelSize = 60;
    }

    if (difficulty === "medium") {
        timeForClick = 2;
        pixelSize = 30;
    }

    if (difficulty === "hard") {
        timeForClick = 1;
        pixelSize = 15;
    }

    createPixel(color);
}

function createPixel(color) {
    let oldPixel = document.getElementById("pixel");
    if (oldPixel) oldPixel.remove();

    clearTimeout(timer);
    clearInterval(countdown);

    timeLeft = timeForClick;

    document.getElementById("score").textContent = "score: " + score;
    document.getElementById("time").textContent = "time left for click: " + timeLeft;

    let pixel = document.createElement("div");
    pixel.id = "pixel";

    pixel.style.width = pixelSize + "px";
    pixel.style.height = pixelSize + "px";
    pixel.style.backgroundColor = color;
    pixel.style.position = "absolute";
    pixel.style.cursor = "pointer";

    let maxX = window.innerWidth - pixelSize;
    let maxY = window.innerHeight - pixelSize;

    pixel.style.left = Math.floor(Math.random() * maxX) + "px";
    pixel.style.top = Math.floor(Math.random() * maxY) + "px";

    pixel.onclick = function () {
        score++;
        createPixel(color);
    };

    document.body.appendChild(pixel);

    countdown = setInterval(function () {
        timeLeft--;

        document.getElementById("time").textContent =
            "time left for click: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
        }
    }, 1000);

    timer = setTimeout(function () {
        clearInterval(countdown);
        alert("Game over! Your score is " + score);
        window.location.href = "index.html";
    }, timeForClick * 1000);
}
