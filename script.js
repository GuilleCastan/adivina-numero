//1º pasp: seleccionar, guardar y modficar los elementos del dom mediante el uso de variables.
const scoreField = document.querySelector(".score");
scoreField.textContent = 10;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const checkButton = document.querySelector(".check");

checkButton.addEventListener("click", function alerta() {
  alert("hola mundo, soy el check");
});

const againButton = document.querySelector(".again");
console.log(againButton);

againButton.addEventListener("click", function alerta() {
  alert("hola mundo, soy el btn again");
});

//Pillamso y comprobamos el número
const numberShow = document.querySelector(".number");
console.log(numberShow);

//Pillamos y comprobamos el mensaje
const message = document.querySelector(".message");
console.log(message);

//Pillamos y comprobamos el score máximo
const highScore = document.querySelector(".highscore");
console.log(highScore);

//Pillamos y comprobamos el número que creemos que es
const guess = document.querySelector(".guess");
console.log(guess);
