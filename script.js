"use strict";
// Select elements from the DOM
const bodyElement = document.querySelector("body");
const gridContainer = document.querySelector(".container");
const gridItems = document.querySelectorAll(".grid-card");

// Function for creating new grid
function createGrid(numberOfSquaresPerRow) {
  // Remove Existing grid
  gridContainer.innerHTML = "";

  for (
    let squareIndex = 0;
    squareIndex < numberOfSquaresPerRow ** 2;
    squareIndex++
  ) {
    const newGridItem = document.createElement("div");

    newGridItem.classList.add("grid-card");
    newGridItem.textContent = "+";
    newGridItem.style.flex = `0 1 calc(100%/${numberOfSquaresPerRow}`;

    newGridItem.addEventListener("mouseover", () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);

      newGridItem.style.backgroundColor = "#" + randomColor;
    });

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
clearGridButton.textContent = "Clear";

buttonArea.appendChild(getSquaresButton);
buttonArea.appendChild(clearGridButton);

const getSquaresButtonElement = document.querySelector(".get-squares-button");
const clearButtonElement = document.querySelector(".clear-grid-button");

// Get desired grid size from user
let desiredGridSize;
getSquaresButtonElement.addEventListener("click", () => {
  desiredGridSize = Number(
    prompt("Enter the desired number of squares (Max: 100)")
  );

  if (desiredGridSize > 100) {
    desiredGridSize = Number(
      prompt("Invalid number! Please enter a value less than 100.")
    );
  }

  createGrid(desiredGridSize); // Recreate the grid with the new size
});

//Clear black color
clearButtonElement.addEventListener("click", () => {
  gridContainer.innerHTML = "";
});
