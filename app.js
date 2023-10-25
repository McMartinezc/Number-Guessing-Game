// Good luck!

// Variables de estado iniciales. Puede que falta alguna...

let isPlaying = true;
let correctNumber = Math.floor(Math.random() * 100) + 1;
let remainingAttempts = 10;
const previousGuesses = [];

// Actualizar el textContent del nodo adecuado con el número de intentos iniciales

//actualizamos variable remainingAttempts con los intentos
document.querySelector(".lastResult").textContent = remainingAttempts;

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Impedimos que el formulario haga un petición GET

  // Comprobar si el número que ha puesto el usuario es mayor o menor que el numeroCorrecto. Tomar decisiones
  if (isPlaying) {
    let userValueInput = +document.querySelector("#guessField").value;
    const info = document.querySelector(".lowOrHi");
    const numGuesses = document.querySelector(".guesses");

    if (userValueInput > correctNumber) {
      info.textContent = `Too High! Try again.`;
    } else if (userValueInput < correctNumber) {
      info.textContent = `Too low! Try again.`;
    } else {
      info.textContent = `Correct number!`;
      isPlaying = false;
      // Ocultar el botón
      document.querySelector("#subt").style.display= "none";
      // Bloquear el campo de entrada
      document.querySelector("#guessField").disabled = true;
    }


    //Añadimos el número introducido por el usuario
    previousGuesses.push(userValueInput);
    numGuesses.textContent = previousGuesses.join(" - ");

    //Descontamos intentos
    remainingAttempts--;

    //Comprovamos intentos y si no hemos adivinado el número
    if (remainingAttempts <= 0 && isPlaying) {
      info.textContent = `¡You have exhausted the number of attempts! The correct number is ${correctNumber}.`;
      isPlaying = false;
    }

    document.querySelector(".lastResult").textContent = remainingAttempts;

     // Limpiar el input para que el usuario pueda ingresar otro número
     document.querySelector("#guessField").value = ""; 


  } else {
    info.textContent = `End Game!`;
  }
});
