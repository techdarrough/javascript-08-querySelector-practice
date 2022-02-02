// The Warm Up
// 0. Replace the variable 'yourName' with your name
const credit = document.querySelector("#credit");
let yourName = "Peter Parker";
credit.textContent = `Created by ${yourName}`;

// COMPLETE THE HTML
// 1. Append watermelon, grapes, and strawberries to the menu-container
// watermelon is done as an example
let watermelonDiv = document.createElement("div");
watermelonDiv.innerHTML = `<div class="menu">
<h3>Watermelon</h3>
<img class ='fruit' src="assets/images/watermelon.jpeg" alt="watermelon">
<div class="button-container">
    <button id="minus-watermelon">-</button>
    <button id="add-watermelon">+</button>
</div>
</div>`;

const menuContainer = document.querySelector(".menu-container");
menuContainer.appendChild(watermelonDiv);

// 1a. Create divs and append grapes to the page
// *** type your code here ***

// EDIT THE CSS
// Update Fruit Images with Javascript

// 2a. create a new variable named fruitImages and set it equal to a document.querySelectorAll to select all images with a class of 'fruit'
// *** type your code here ***

// 2b. Use a For Loop or forEach higher order function to change each fruit's width to 20vw & height to 20vw  // hint: style.width = "20vw"
// *** type your code here ***

// TRACK DATA WITH JAVASCRIPT
// Data
let apples = 0;
let bananas = 0;
let oranges = 0;
let watermelon = 0;
let grapes = 0;
let strawberries = 0;
let total = 0;

// Selectors
// Selectors for each fruit's - and + button
// 3a. add querySelectors for grapes and strawberries
const applePlusBtn = document.querySelector("#add-apple");
const appleMinusBtn = document.querySelector("#minus-apple");
const bananaPlusBtn = document.querySelector("#add-banana");
const bananaMinusBtn = document.querySelector("#minus-banana");
const orangePlusBtn = document.querySelector("#add-orange");
const orangeMinusBtn = document.querySelector("#minus-orange");
const watermelonPlusBtn = document.querySelector("#add-watermelon");
const watermelonMinusBtn = document.querySelector("#minus-watermelon");
// *** type your code here ***
const grandTotalDisplay = document.querySelector("#qty-total");

// +/- Button Event listeners
// 3b. Add Event Listeners for grapes and strawberries
applePlusBtn.addEventListener("click", function () {
  apples++;
  total = apples + bananas + oranges;
  applesQuantityDisplay.textContent = apples;
  grandTotalDisplay.textContent = total;
});

appleMinusBtn.addEventListener("click", () => {
  if (apples > 0) {
    apples--;
    total = apples + bananas + oranges;
    applesQuantityDisplay.textContent = apples;
    grandTotalDisplay.textContent = total;
  }
});

bananaPlusBtn.addEventListener("click", () => {
  bananas++;
  total = apples + bananas + oranges;
  bananasQuantityDisplay.textContent = bananas;
  grandTotalDisplay.textContent = total;
});

bananaMinusBtn.addEventListener("click", () => {
  if (bananas > 0) {
    bananas--;
    total = apples + bananas + oranges + watermelon + grapes + strawberries;
    bananasQuantityDisplay.textContent = bananas;
    grandTotalDisplay.textContent = total;
  }
});

orangePlusBtn.addEventListener("click", () => {
  oranges++;
  total = apples + bananas + oranges + watermelon + grapes + strawberries;
  orangesQuantityDisplay.textContent = oranges;
  grandTotalDisplay.textContent = total;
});

orangeMinusBtn.addEventListener("click", () => {
  if (oranges > 0) {
    oranges--;
    total = apples + bananas + oranges + watermelon + grapes + strawberries;
    orangesQuantityDisplay.textContent = oranges;
    grandTotalDisplay.textContent = total;
  }
});

watermelonPlusBtn.addEventListener("click", () => {
  watermelon++;
  total = apples + bananas + oranges + watermelon + grapes + strawberries;
  watermelonQuantityDisplay.textContent = watermelon;
  grandTotalDisplay.textContent = total;
});

watermelonMinusBtn.addEventListener("click", () => {
  if (watermelon > 0) {
    watermelon--;
    total = apples + bananas + oranges + watermelon + grapes + strawberries;
    watermelonQuantityDisplay.textContent = watermelon;
    grandTotalDisplay.textContent = total;
  }
});
