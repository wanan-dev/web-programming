let games = [];

let score = 0;
let time = 20;
let timer;
let isGameStarted = false;

const gamesList = document.getElementById("gamesList");
const searchInput = document.getElementById("searchInput");
const genreSelect = document.getElementById("genreSelect");
const countText = document.getElementById("countText");

const detailsBlock = document.getElementById("detailsBlock");
const closeBtn = document.getElementById("closeBtn");
const detailsImage = document.getElementById("detailsImage");
const detailsTitle = document.getElementById("detailsTitle");
const detailsDescription = document.getElementById("detailsDescription");
const detailsGenre = document.getElementById("detailsGenre");
const detailsYear = document.getElementById("detailsYear");
const detailsPlatform = document.getElementById("detailsPlatform");
const detailsRating = document.getElementById("detailsRating");

const gameScore = document.getElementById("gameScore");
const gameTime = document.getElementById("gameTime");
const gameArea = document.getElementById("gameArea");

fetch("data/games.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    games = data;
    showGames(games);
  })
  .catch(function(error) {
    console.log("Error:", error);
    gamesList.innerHTML = "<p>Не вдалося завантажити ігри.</p>";
  });

function showSection(name) {
  document.getElementById("catalogSection").classList.remove("active");
  document.getElementById("gameSection").classList.remove("active");

  document.getElementById(name + "Section").classList.add("active");

  if (name === "catalog") {
    filterGames();
  }
}

function showGames(gamesArray) {
  gamesList.innerHTML = "";
  countText.textContent = "Знайдено ігор: " + gamesArray.length;

  if (gamesArray.length === 0) {
    gamesList.innerHTML = "<p>Ігри не знайдено.</p>";
    return;
  }

  gamesArray.forEach(function(game) {
    gamesList.innerHTML += `
      <div class="game-card">
        <img src="${game.image}" alt="${game.title}">
        <div class="game-info">
          <h3>${game.title}</h3>
          <p><b>Жанр:</b> ${game.genre}</p>
          <p><b>Рік:</b> ${game.year}</p>
          <p><b>Рейтинг:</b> ${game.rating}</p>
          <button onclick="showDetails(${game.id})">Детальніше</button>
        </div>
      </div>
    `;
  });
}

function filterGames() {
  const searchText = searchInput.value.toLowerCase();
  const selectedGenre = genreSelect.value;

  const filteredGames = games.filter(function(game) {
    const titleOk = game.title.toLowerCase().includes(searchText);
    const genreOk = selectedGenre === "all" || game.genre === selectedGenre;

    return titleOk && genreOk;
  });

  showGames(filteredGames);
}

function showDetails(id) {
  const game = games.find(function(item) {
    return item.id === id;
  });

  detailsImage.src = game.image;
  detailsTitle.textContent = game.title;
  detailsDescription.textContent = game.description;
  detailsGenre.textContent = game.genre;
  detailsYear.textContent = game.year;
  detailsPlatform.textContent = game.platform;
  detailsRating.textContent = game.rating;

  detailsBlock.classList.remove("hidden");
}

function closeDetails() {
  detailsBlock.classList.add("hidden");
}

function startMiniGame() {
  score = 0;
  time = 20;
  isGameStarted = true;

  gameScore.textContent = "Score: " + score;
  gameTime.textContent = "Time: " + time;

  gameArea.innerHTML = "";

  createTarget();

  clearInterval(timer);

  timer = setInterval(function() {
    time--;
    gameTime.textContent = "Time: " + time;

    if (time <= 0) {
      finishMiniGame();
    }
  }, 1000);
}

function createTarget() {
  if (isGameStarted === false) {
    return;
  }

  const oldTarget = document.getElementById("target");

  if (oldTarget) {
    oldTarget.remove();
  }

  const target = document.createElement("div");
  target.id = "target";
  target.className = "target";
  target.textContent = "🎮";

  const maxX = gameArea.clientWidth - 55;
  const maxY = gameArea.clientHeight - 55;

  target.style.left = Math.floor(Math.random() * maxX) + "px";
  target.style.top = Math.floor(Math.random() * maxY) + "px";

  target.onclick = function() {
    score++;
    gameScore.textContent = "Score: " + score;
    createTarget();
  };

  gameArea.appendChild(target);
}

function finishMiniGame() {
  isGameStarted = false;
  clearInterval(timer);

  gameArea.innerHTML = `
    <p class="start-text">Game over! Your score: ${score}</p>
  `;
}

searchInput.addEventListener("input", filterGames);
genreSelect.addEventListener("change", filterGames);
closeBtn.addEventListener("click", closeDetails);
