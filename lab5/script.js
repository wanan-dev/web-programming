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
let timeForClick = 0;
let gameTimer;

if (window.location.pathname.includes("game.html")) {
    startRealGame();
}

function startRealGame() {
    let difficulty = localStorage.getItem("difficulty");
    let color = localStorage.getItem("color");

    if (difficulty === "easy") {
        timeForClick = 2;
    } else if (difficulty === "medium") {
        timeForClick = 1;
    } else if (difficulty === "hard") {
        timeForClick = 0.5;
    }

    createPixel(color);
}

function createPixel(color) {
    let gameArea = document.getElementById("gameArea");

    let oldPixel = document.querySelector(".pixel");
    if (oldPixel) {
        oldPixel.remove();
    }

    document.getElementById("score").textContent = "score: " + score;
    document.getElementById("timer").textContent = "time left for click: " + timeForClick;

    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.backgroundColor = color;

    let maxX = window.innerWidth - 30;
    let maxY = window.innerHeight - 30;

    pixel.style.left = Math.random() * maxX + "px";
    pixel.style.top = Math.random() * maxY + "px";

    pixel.onclick = function () {
        score++;
        clearTimeout(gameTimer);
        createPixel(color);
    };

    gameArea.appendChild(pixel);

    gameTimer = setTimeout(function () {
        alert("Game over! Your score is " + score + ", congratulations!\nPlease, reload the page to start a new game.");
        window.location.href = "index.html";
    }, timeForClick * 1000);
}
