// this function will generate 3 random numbers from 0 to 255
// base on those number a rgb color will be generated
function generateColor() {
  let min = 0;
  let max = 255;
  let numberOne = Math.floor(Math.random() * (max - min + 1) + min);
  let numberTwo = Math.floor(Math.random() * (max - min + 1) + min);
  let numberThree = Math.floor(Math.random() * (max - min + 1) + min);
  let color = `${numberOne}, ${numberTwo}, ${numberThree}`;
  return color;
}

function changeColor() {
  let color = generateColor();
  let container = document.getElementById("container");
  container.style.backgroundColor = `rgb(${color})`;
}

document
  .getElementById("changeColorButton")
  .addEventListener("click", changeColor);
