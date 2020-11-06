"use strict";

const inputNumber = document.querySelector(".js-number");
const button = document.querySelector(".js-button");
let clue = document.querySelector(".js-clue-text");
let attempts = document.querySelector(".js-attempts");

//let attemps = 0;

//Genero funcion random
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);

console.log(randomNumber);

//Genero funcion para añadir números y pista
function addNumber() {
  let inputValue = parseInt(inputNumber.value);

  if (inputValue < 1 || inputValue > 100) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
    console.log("num no válido");
  } else if (inputValue < randomNumber) {
    clue.innerHTML = "Tu número es demasiado bajo";
    console.log("num bajo");
  } else if (inputValue > randomNumber) {
    clue.innerHTML = "Tu número es demasiado alto";
    console.log("num alto");
  } else {
    clue.innerHTML = "Has ganado, campeona!!";
  }
  counter();
}

//Función contador: declarar constante y luego función

let counterclick = 0;

function counter() {
  counterclick++;
  attempts.innerHTML = counterclick;
}

button.addEventListener("click", addNumber);
