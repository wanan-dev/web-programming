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
const genreFilter = document.getElementById("genreFilter");
const platformFilter = document.getElementById("platformFilter");
const sortSelect = document.getElementById("sortSelect");
const resultCount = document.getElementById("resultCount");
const showFavoritesBtn = document.getElementById("showFavoritesBtn");
const showAllBtn = document.getElementById("showAllBtn");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalGenre = document.getElementById("modalGenre");
const modalYear = document.getElementById("modalYear");
const modalPlatform = document.getElementById("modalPlatform");
const modalRating = document.getElementById("modalRating");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let showOnlyFavorites = false;

function renderGames(list) {
  gamesList.innerHTML = "";
  resultCount.textContent = `Знайдено ігор: ${list.length}`;

  if (list.length === 0) {
    gamesList.innerHTML = "<p class='empty'>Ігри не знайдено.</p>";
    return;
  }

  list.forEach(game => {
    const isFavorite = favorites.includes(game.id);

    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <div class="game-info">
        <h3>${game.title}</h3>
        <p><strong>Жанр:</strong> ${game.genre}</p>
        <p><strong>Рік:</strong> ${game.year}</p>
        <p><strong>Рейтинг:</strong> ${game.rating}</p>
        <div class="card-buttons">
          <button class="details-btn" onclick="openDetails(${game.id})">Детальніше</button>
          <button class="favorite-btn" onclick="toggleFavorite(${game.id})">
            ${isFavorite ? "В обраному" : "В обране"}
          </button>
        </div>
      </div>
    `;

    gamesList.appendChild(card);
  });
}

function getFilteredGames() {
  let filtered = [...games];
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedGenre = genreFilter.value;
  const selectedPlatform = platformFilter.value;
  const sortValue = sortSelect.value;

  if (searchText !== "") {
    filtered = filtered.filter(game => game.title.toLowerCase().includes(searchText));
  }

  if (selectedGenre !== "all") {
    filtered = filtered.filter(game => game.genre === selectedGenre);
  }

  if (selectedPlatform !== "all") {
    filtered = filtered.filter(game => game.platform.includes(selectedPlatform));
  }

  if (showOnlyFavorites) {
    filtered = filtered.filter(game => favorites.includes(game.id));
  }

  if (sortValue === "rating-desc") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortValue === "year-desc") {
    filtered.sort((a, b) => b.year - a.year);
  } else if (sortValue === "year-asc") {
    filtered.sort((a, b) => a.year - b.year);
  }

  return filtered;
}

function updateList() {
  renderGames(getFilteredGames());
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(gameId => gameId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateList();
}

function openDetails(id) {
  const game = games.find(item => item.id === id);

  modalImage.src = game.image;
  modalTitle.textContent = game.title;
  modalDescription.textContent = game.description;
  modalGenre.textContent = game.genre;
  modalYear.textContent = game.year;
  modalPlatform.textContent = game.platform;
  modalRating.textContent = game.rating;

  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

searchInput.addEventListener("input", updateList);
genreFilter.addEventListener("change", updateList);
platformFilter.addEventListener("change", updateList);
sortSelect.addEventListener("change", updateList);

showFavoritesBtn.addEventListener("click", () => {
  showOnlyFavorites = true;
  updateList();
});

showAllBtn.addEventListener("click", () => {
  showOnlyFavorites = false;
  updateList();
});

renderGames(games);
