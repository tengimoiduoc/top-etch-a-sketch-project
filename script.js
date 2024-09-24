"use strict";
const body = document.querySelector("body");
const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");

  div.classList.add("grid-card");

  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "#000";
  });

  container.appendChild(div);
}

// Add button that gets user's number of square
const btnContainer = document.createElement("div");
btnContainer.classList.add("btn-container");

body.insertBefore(btnContainer, container);
const containerBtn = document.querySelector(".btn-container");

const btnGetSquare = document.createElement("btn");
btnGetSquare.classList.add("btn", "btn-get-square");
btnGetSquare.textContent = "Square";

const btnClear = document.createElement("btn");
btnClear.classList.add("btn", "btn-clear");
btnClear.textContent = "Clear";

containerBtn.appendChild(btnGetSquare);
containerBtn.appendChild(btnClear);
// 1. change the number of square === user input
// when button is clicked
//2. remove existing grid
//3. new grid have the same total space
