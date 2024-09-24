"use strict";
const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-card");
  div.textContent = `Card ${i + 1}`;
  fragment.appendChild(div);
}

container.appendChild(fragment);

const gridCards = document.querySelectorAll(".grid-card");
