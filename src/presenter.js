import Tennis from "./tennis";

const juego = new Tennis();

const form = document.querySelector("#love-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (event.submitter && event.submitter.id === "jugador1-button") {
    juego.anotaPuntoJugador1();
  } else if (event.submitter && event.submitter.id === "jugador2-button") {
    juego.anotaPuntoJugador2();
  }

  div.innerHTML = "<p>" + juego.obtenerScore() + "</p>";
});
