//1º Paso : seleccionar, guardar y modficar los elementos del dom mediante el uso de variables.
const scoreField = document.querySelector(".score");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const numberShow = document.querySelector(".number");
const message = document.querySelector(".message");
const showHighScore = document.querySelector(".highscore");
const guess = document.querySelector(".guess");

// 2º Paso : Crear las variables de estado de la aplicación necesarias
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);

// 3º Paso : Crear los listeners
againButton.addEventListener("click", function reset() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreField.textContent = score;
  numberShow.textContent = "?";
  message.textContent = `Start guesing...`;
  guess.value = "";

  console.log(secretNumber);
});

checkButton.addEventListener("click", function comprobar() {
  let guessNumber = parseInt(guess.value);

  if (secretNumber == guessNumber) {
    message.textContent = `¡Has acertado!, el número es ${secretNumber}`;

    highScore < score ? (highScore = score) : highScore;
    showHighScore.textContent = highScore;
    numberShow.textContent = secretNumber;
  } else {
    secretNumber > guessNumber
      ? (message.textContent = `Demasiado bajo`)
      : (message.textContent = `Demasiado alto`);
    score -= 2;
    score < 0 ? (score = 0) : score;
  }
  scoreField.textContent = score;
});
