let categories = [];

function loadCatalog() {
    fetch("data/categories.json")
        .then(response => response.json())
        .then(data => {
            categories = data;
            showCategories();
        })
        .catch(error => {
            console.log("Error loading categories:", error);
        });
}

function showCategories() {
    let content = document.getElementById("content");

    content.innerHTML = `
        <h2>Catalog</h2>
        <p>Choose a category:</p>
        <div class="category-list"></div>
    `;

    let categoryList = document.querySelector(".category-list");

    categories.forEach(category => {
        let card = document.createElement("div");
        card.className = "category-card";

        card.innerHTML = `
            <h3>${category.name}</h3>
            <p>${category.notes}</p>
        `;

        card.onclick = function () {
            loadCategory(category.shortname);
        };

        categoryList.appendChild(card);
    });
}

function loadCategory(shortname) {
    fetch("data/" + shortname + ".json")
        .then(response => response.json())
        .then(data => {
            showProducts(data);
        })
        .catch(error => {
            console.log("Error loading category:", error);
        });
}

function showProducts(data) {
    let content = document.getElementById("content");

    content.innerHTML = `
        <h2>${data.categoryName}</h2>
        <p>${data.description}</p>
        <div class="products"></div>
    `;

    let productsContainer = document.querySelector(".products");

    data.items.forEach(item => {
        let product = document.createElement("div");
        product.className = "product-card";

        product.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
        `;

        productsContainer.appendChild(product);
    });
}

function loadSpecials() {
    if (categories.length === 0) {
        fetch("data/categories.json")
            .then(response => response.json())
            .then(data => {
                categories = data;
                openRandomCategory();
            });
    } else {
        openRandomCategory();
    }
}

function openRandomCategory() {
    let randomIndex = Math.floor(Math.random() * categories.length);
    let randomCategory = categories[randomIndex];

    loadCategory(randomCategory.shortname);
}
