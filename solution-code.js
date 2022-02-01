// Data
let yourName = "Eric Hoover"; // HINT: Replace this with your own name!
let apples = 0;
let bananas = 0;
let oranges = 0;
let total = 0;

// Selectors
const credit = document.querySelector("#credit");
const applePlusBtn = document.querySelector("#add-apple");
const appleMinusBtn = document.querySelector("#minus-apple");
const bananaPlusBtn = document.querySelector("#add-banana");
const bananaMinusBtn = document.querySelector("#minus-banana");
const orangePlusBtn = document.querySelector("#add-orange");
const orangeMinusBtn = document.querySelector("#minus-orange");
const applesQuantityDisplay = document.querySelector("#qty-apples");
const bananasQuantityDisplay = document.querySelector("#qty-bananas");
const orangesQuantityDisplay = document.querySelector("#qty-oranges");
const grandTotalDisplay = document.querySelector("#qty-total");

// Update Name Display
credit.textContent = `Created by ${yourName}`;

function addFruit(fruit) {
  fruit++;
  total = apples + bananas + oranges;
  grandTotalDisplay.textContent = total;
}

// +/- Button Event Listeners
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
    total = apples + bananas + oranges;
    bananasQuantityDisplay.textContent = bananas;
    grandTotalDisplay.textContent = total;
  }
});

orangePlusBtn.addEventListener("click", () => {
  oranges++;
  total = apples + bananas + oranges;
  orangesQuantityDisplay.textContent = oranges;
  grandTotalDisplay.textContent = total;
});

orangeMinusBtn.addEventListener("click", () => {
  if (oranges > 0) {
    oranges--;
    total = apples + bananas + oranges;
    orangesQuantityDisplay.textContent = oranges;
    grandTotalDisplay.textContent = total;
  }
});

// 3. Update Fruit Images
const fruit = document.querySelectorAll("#fruit");

// 3a. Use a For Loop to change each fruit's width to 20vw & height to 20vw  // hint: style.width = "20vw"

// for (let i = 0; i < fruit.length; i++) {
//   fruit[i].style.width = "20vw";
//   fruit[i].style.height = "20vw";
// }

// 3b. Comment out your above for loop, and refactor it with a ForEach higher order function

fruit.forEach((i) => {
  i.style.width = "20vw";
  i.style.height = "20vw";
});
