"use strict";

// Select elements from the DOM
const bodyElement = document.querySelector("body");
const gridContainer = document.querySelector(".container");
const gridItems = document.querySelectorAll(".grid-card");

function createGrid(numberOfSquaresPerRow) {
  gridContainer.innerHTML = "";

  for (
    let squareIndex = 0;
    squareIndex < numberOfSquaresPerRow ** 2;
    squareIndex++
  ) {
    const newGridItem = document.createElement("div");

    newGridItem.classList.add("grid-card");

    newGridItem.addEventListener("mouseover", () => {
      newGridItem.style.backgroundColor = "#000";
    });

    newGridItem.style.flex = `0 1 calc(100%/${numberOfSquaresPerRow}`;

    gridContainer.appendChild(newGridItem);
  }
}

createGrid(16);

// Create a container for buttons
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

bodyElement.insertBefore(buttonContainer, gridContainer);
const buttonArea = document.querySelector(".button-container");

// Create buttons for getting user input and clearing the grid
const getSquaresButton = document.createElement("button");
getSquaresButton.classList.add("button", "get-squares-button");
getSquaresButton.textContent = "Set Grid Size";

const clearGridButton = document.createElement("button");
clearGridButton.classList.add("button", "clear-grid-button");
clearGridButton.textContent = "Clear Grid";

buttonArea.appendChild(getSquaresButton);
buttonArea.appendChild(clearGridButton);

const getSquaresButtonElement = document.querySelector(".get-squares-button");

getSquaresButtonElement.addEventListener("click", () => {
  let desiredGridSize = Number(
    prompt("Enter the desired number of squares (Max: 100)")
  );

  if (desiredGridSize >= 100) {
    desiredGridSize = Number(
      prompt("Invalid number! Please enter a value less than 100.")
    );
  }

  createGrid(desiredGridSize); // Recreate the grid with the new size
});
