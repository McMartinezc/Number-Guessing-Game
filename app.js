// Good luck!

// Variables de estado iniciales. Puede que falta alguna...

let isPlaying = true;
let correctNumber = Math.floor(Math.random() * 100) + 1;
let remainingAttempts = 10;

// Actualizar el innerHTML del nodo adecuado con el número de intentos iniciales

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Impedimos que el formulario haga un petición GET

  // Comprobar si el número que ha puesto el usuario es mayor o menor que el numeroCorrecto. Tomar decisiones

  if (isPlaying) {
    let userValueInput = +(document.querySelector("#guessField").value);
    const info = document.querySelector(".lowOrHi");
    const numGuesses = document.querySelector(".guesses");

    if (userValueInput > correctNumber) {
      info.textContent = `Too High! Try again.`;
    } else if (userValueInput < correctNumber) {
      info.textContent = `Too low! Try again.`;
    } else {
      info.textContent = `Correct number!`;
      isPlaying = false; 
    }

    numGuesses.textContent = userValueInput;
    remainingAttempts--;

    if (remainingAttempts <= 0 && isPlaying) {
      info.textContent = `¡You have exhausted the number of attempts! The correct number is ${correctNumber}.`;
      isPlaying = false;
    }

    document.querySelector(".lastResult").textContent = remainingAttempts;

  } else {
    info.textContent = `End Game!`;
  }
});
