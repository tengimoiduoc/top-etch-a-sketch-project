"use strict";
const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");

  div.classList.add("grid-card");

  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "#000";
  });

  container.appendChild(div);
}
