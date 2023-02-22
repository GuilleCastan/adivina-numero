//1º Paso : seleccionar, guardar y modficar los elementos del dom mediante el uso de variables.
const scoreField = document.querySelector(".score");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const numberShow = document.querySelector(".number");
const message = document.querySelector(".message");
const showHighScore = document.querySelector(".highscore");
const guess = document.querySelector(".guess");
const body = document.querySelector("body");

// 2º Paso : Crear las variables de estado de la aplicación necesarias
let secretNumber;
let score;
let highScore = 0;
fnInitApp();

// 3º Paso : Crear los eventos y sus funciones
function fnInitApp() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  localStorage.getItem("highscore")
    ? (highScore = localStorage.getItem("highscore"))
    : (highScore = 0);
  showHighScore.textContent = highScore;
  scoreField.textContent = score;
  numberShow.textContent = "?";
  message.textContent = `Start guesing...`;
  guess.value = "";
  body.style = "background-color: black";
  checkButton.disabled = false;
  console.log(secretNumber);
  console.log(
    `La mejor puntuación guardada es ${(highScore =
      localStorage.getItem("highscore"))}`
  );
}
againButton.addEventListener("click", fnInitApp);
checkButton.addEventListener("click", function comprobar() {
  let guessNumber = parseInt(guess.value);

  if (secretNumber == guessNumber) {
    message.textContent = `¡Has acertado!, el número es ${secretNumber}`;
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("highscore", highScore);
    }
    numberShow.textContent = secretNumber;
    body.style = "background-color: green";
    checkButton.disabled = true;
  } else {
    secretNumber > guessNumber
      ? (message.textContent = `Demasiado bajo`)
      : (message.textContent = `Demasiado alto`);
    score -= 2;
    score < 0 ? (score = 0) : score;
  }
  scoreField.textContent = score;
  if (score == 0) {
    (message.textContent = `HAS PERDIDO`),
      (body.style = "background-color: red");
    checkButton.disabled = true;
  }
});
