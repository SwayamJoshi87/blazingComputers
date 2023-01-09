/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      description:<Swayam Joshi>
 *      Student ID: <166456210>
 *      Date:       <27-11-2022>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

function createCategoryButtons() {
  const nav = document.querySelector("#menu");

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.id = `category-${category.id}-btn`;
    button.type = "button";
    button.innerText = category.description;

    button.onclick = () => showCategory(category);

    nav.appendChild(button);
  });
}

function getCategoryProducts(category) {
  return products
    .filter((product) => product.categories.includes(category.id))
    .filter((product) => !product.discontinued);
}

function showCategory(selectedCategory = categories[0]) {
  document.querySelector("#selected-category").innerText = selectedCategory.description;

  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";

  const categoryProducts = getCategoryProducts(selectedCategory);
  categoryProducts.forEach((product) => {
    const productCard = createProductCard(product);
    document.querySelector(".card-container").append(productCard);
  });
}

function createProductCard(product) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card");

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  const cardDetail = document.createElement("div");
  cardDetail.classList.add("card_detail");

  const spanCategory = document.createElement("span");
  spanCategory.textContent = product.categories
    .map((id) => {
      return categories
        .filter((category) => category.id === id)
        .map((category) => category.description);
    })
    .toString();

  const nmdiv = document.createElement("div");
  nmdiv.classList.add("name");
  nmdiv.textContent = product.title;

  const desPara = document.createElement("p");
  desPara.classList.add("description");
  desPara.textContent = product.description;

  const prcSpn = document.createElement("span");
  prcSpn.classList.add("price");
  prcSpn.textContent = `$${product.price.toFixed(2)} CAD`;

  cardDetail.append(nmdiv);
  cardDetail.append(desPara);
  cardDetail.append(prcSpn);

  card.append(productImage);
  card.append(cardDetail);

  // Return the card’s <div> element to the caller
  return card;
}

function init() {
  createCategoryButtons();
  showCategory();
}

addEventListener("DOMContentLoaded", init);
