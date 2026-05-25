let score = 0;
let timeLeft = 0;
let gameInterval;

function startGame() {
    let difficulty = document.getElementById("difficulty").value;
    let color = document.getElementById("color").value;

    if (difficulty === "" || color === "") {
        alert("Please choose difficulty and color!");
        return;
    }
    
    if (difficulty == "1") timeLeft = 2;
    if (difficulty == "2") timeLeft = 1;
    if (difficulty == "3") timeLeft = 0.5;

    score = 0;
    document.getElementById("score").textContent = "Score: " + score;

    spawnPixel(color);
}

function spawnPixel(color) {
    let gameArea = document.getElementById("gameArea");

    gameArea.innerHTML = ""; // очищаємо

    let pixel = document.createElement("div");

    pixel.style.width = "30px";
    pixel.style.height = "30px";
    pixel.style.backgroundColor = color;
    pixel.style.position = "absolute";

    pixel.style.left = Math.random() * 90 + "%";
    pixel.style.top = Math.random() * 90 + "%";

    pixel.onclick = function () {
        score++;
        document.getElementById("score").textContent = "Score: " + score;
        spawnPixel(color);
    };

    gameArea.appendChild(pixel);

    clearTimeout(gameInterval);
    gameInterval = setTimeout(() => {
        alert("Game over! Your score is " + score);
        location.reload();
    }, timeLeft * 1000);
}
