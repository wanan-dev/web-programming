let levels = [];
let currentGrid = [];
let currentLevelIndex = 0;
let steps = 0;

fetch("./data/levels.json")
    .then(response => response.json())
    .then(data => {
        levels = data;
        loadLevel(0);
    })
    .catch(error => {
        console.log("Error loading JSON:", error);
    });

function loadLevel(index) {
    currentLevelIndex = index;
    currentGrid = JSON.parse(JSON.stringify(levels[index].grid));
    steps = 0;

    document.getElementById("levelInfo").textContent = "Level: " + levels[index].level;
    document.getElementById("minSteps").textContent = "Minimum steps: " + levels[index].minSteps;

    renderGame();
}

function resetLevel() {
    if (levels.length === 0) {
        console.log("Levels are not loaded yet");
        return;
    }

    loadLevel(currentLevelIndex);
}

function renderGame() {
    let game = document.getElementById("game");
    game.innerHTML = "";

    for (let i = 0; i < currentGrid.length; i++) {
        let row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < currentGrid[i].length; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";

            if (currentGrid[i][j] === 1) {
                cell.classList.add("on");
            } else {
                cell.classList.add("off");
            }

            cell.onclick = function () {
                clickCell(i, j);
            };

            row.appendChild(cell);
        }

        game.appendChild(row);
    }

    document.getElementById("steps").textContent = "Steps: " + steps;
}

function clickCell(i, j) {
    toggleCell(i, j);
    toggleCell(i - 1, j);
    toggleCell(i + 1, j);
    toggleCell(i, j - 1);
    toggleCell(i, j + 1);

    steps++;
    renderGame();
    checkWin();
}

function toggleCell(i, j) {
    if (i >= 0 && i < 5 && j >= 0 && j < 5) {
        currentGrid[i][j] = currentGrid[i][j] === 1 ? 0 : 1;
    }
}

function checkWin() {
    let isWin = currentGrid.flat().every(cell => cell === 0);

    if (isWin) {
        alert("You win! Steps: " + steps);
    }
}
