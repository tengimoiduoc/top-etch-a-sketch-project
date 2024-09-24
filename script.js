"use strict";
const container = document.querySelector(".container");

// Add 16 divs to the DOM
const fragment = document.createDocumentFragment();

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-card");
  div.textContent = `Card ${i + 1}`;
  fragment.appendChild(div);
}

container.appendChild(fragment);
