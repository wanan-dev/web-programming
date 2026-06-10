const games = [
  {
    id: 1,
    title: "The Witcher 3",
    genre: "RPG",
    year: 2015,
    platform: "PC, PlayStation, Xbox, Nintendo Switch",
    rating: 9.8,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    description: "Рольова гра з відкритим світом, великою кількістю квестів і глибоким сюжетом."
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    genre: "RPG",
    year: 2020,
    platform: "PC, PlayStation, Xbox",
    rating: 8.7,
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d7?auto=format&fit=crop&w=900&q=80",
    description: "Футуристична RPG у місті Night City з відкритим світом і нелінійними завданнями."
  },
  {
    id: 3,
    title: "God of War",
    genre: "Action",
    year: 2018,
    platform: "PC, PlayStation",
    rating: 9.6,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
    description: "Екшен-пригода про Кратоса та його сина, заснована на скандинавській міфології."
  },
  {
    id: 4,
    title: "Minecraft",
    genre: "Adventure",
    year: 2011,
    platform: "PC, PlayStation, Xbox, Nintendo Switch",
    rating: 9.4,
    image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=900&q=80",
    description: "Пісочниця, де гравець може будувати, досліджувати світ і виживати."
  },
  {
    id: 5,
    title: "Counter-Strike 2",
    genre: "Shooter",
    year: 2023,
    platform: "PC",
    rating: 8.4,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    description: "Командний шутер, де гравці змагаються у тактичних матчах."
  },
  {
    id: 6,
    title: "Civilization VI",
    genre: "Strategy",
    year: 2016,
    platform: "PC, PlayStation, Xbox, Nintendo Switch",
    rating: 9.1,
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=900&q=80",
    description: "Покрокова стратегія, у якій потрібно розвивати власну цивілізацію."
  },
  {
    id: 7,
    title: "FIFA 23",
    genre: "Sport",
    year: 2022,
    platform: "PC, PlayStation, Xbox, Nintendo Switch",
    rating: 8.2,
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=900&q=80",
    description: "Футбольний симулятор із командами, турнірами та режимом кар'єри."
  },
  {
    id: 8,
    title: "Red Dead Redemption 2",
    genre: "Adventure",
    year: 2018,
    platform: "PC, PlayStation, Xbox",
    rating: 9.7,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description: "Пригодницька гра у відкритому світі про Дикий Захід."
  }
];

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

  let filteredGames = games.filter(function(game) {
    const titleMatches = game.title.toLowerCase().includes(searchText);
    const genreMatches = selectedGenre === "all" || game.genre === selectedGenre;

    return titleMatches && genreMatches;
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

searchInput.addEventListener("input", filterGames);
genreSelect.addEventListener("change", filterGames);
closeBtn.addEventListener("click", closeDetails);

showGames(games);
