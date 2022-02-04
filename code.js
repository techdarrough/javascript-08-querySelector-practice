// The Warm Up
// 0. Replace the variable 'yourName' with your name
const credit = document.querySelector("#credit");
let yourName = "Batman";
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

let grapesDiv = document.createElement("div");
grapesDiv.innerHTML = `<div class="menu">
<h3>Grapes</h3>
<img class ='fruit' src="assets/images/grapes.jpeg" alt="grapes">
<div class="button-container">
    <button id="minus-grapes">-</button>
    <button id="add-grapes">+</button>
</div>
</div>`;
menuContainer.appendChild(grapesDiv);

// 1b. Create divs and append watermelon to the page
// *** type your code here ***
let strawberriesDiv = document.createElement("div");
strawberriesDiv.innerHTML = `<div class="menu">
<h3>strawberries</h3>
<img class ='fruit' src="assets/images/strawberry.jpeg" alt="strawberries">
<div class="button-container">
    <button id="minus-strawberries">-</button>
    <button id="add-strawberries">+</button>
</div>
</div>`;
menuContainer.appendChild(strawberriesDiv);
// EDIT THE CSS
// Update Fruit Images with Javascript

// 2a. create a new variable named fruitImages and set it equal to a document.querySelectorAll to select all images with a class of 'fruit'
// *** type your code here ***
let fruitImags = document.querySelectorAll(".fruit");





fruitImags.forEach((fruit)=>{
  fruit.style.width = "20vw";
  fruit.style.height = "20vw";
}));

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
// plus button
const applePlusBtn = document.querySelector("#add-apple");
const bananaPlusBtn = document.querySelector("#add-banana");
const orangePlusBtn = document.querySelector("#add-orange");
const watermelonPlusBtn = document.querySelector("#add-watermelon");
// *** type your code here ***
const grapesPlusBtn = document.querySelector('#add-grape')
const strawberriesPlusBtn = document.querySelector('#add-strawberry')
const grapesPlusBtn = document.querySelector('#add-grape')


// minus button
const appleMinusBtn = document.querySelector("#minus-apple");
const bananaMinusBtn = document.querySelector("#minus-banana");
const orangeMinusBtn = document.querySelector("#minus-orange");
const watermelonMinusBtn = document.querySelector("#minus-watermelon");
// *** type your code here ***
// quantity display
const applesQuantityDisplay = document.querySelector("#qty-apples");
const bananasQuantityDisplay = document.querySelector("#qty-bananas");
const orangesQuantityDisplay = document.querySelector("#qty-oranges");
const watermelonQuantityDisplay = document.querySelector("#qty-watermelon");
// *** type your code here ***
const grandTotalDisplay = document.querySelector("#qty-total");

// +/- Button Event listeners
// 3a. Add Event Listeners for Each Fruit's - or + sign
// 3b. Add Javascript that updates each fruit's count and the total count  // hint: textContent
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

// *** type your code here ***
