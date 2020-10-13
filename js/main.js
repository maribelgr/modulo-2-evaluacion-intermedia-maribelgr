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

// Añadir número de intentos
function addAttempts() {
  attemps += 1;
}

//Genero funcion para añadir números y pista
function addNumber() {
  const inputNumber = inputNumber.value;
  if (inputNumber < 1 || inputNumber > 100) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
    addAttempts();
  } else if (inputNumber < randomNumber) {
    clue.innerHTML = "Tu número es demasiado bajo";
    addAttempts();
  } else if (inputNumber > randomNumber) {
    clue.innerHTML = "Tu número es demasiado alto";
    addAttempts();
  } else {
    clue.innerHTML = "Has ganado, campeona!!";
  }
}

console.log(clue);

//funcion para mostrar textos

button.addEventListener("click", showText);
