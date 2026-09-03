class Tennis {

    constructor() {
        this.puntosJugador1 = 0;
        this.puntosJugador2 = 0;
    }
    obtenerScore() {
        if (this.puntosJugador1 === 1) {
            return "15 - Love";
        }
        if (this.puntosJugador1 === 2) {
            return "30 - Love";
        }
        if (this.puntosJugador1 === 3) {
            return "40 - Love";
        }
        if (this.puntosJugador1 === 4) {
            return "Game for player 1";
        }
        if (this.puntosJugador2 === 1) {
            return "Love - 15";
        }
        if (this.puntosJugador2 === 2) {
            return "Love - 30";
        }
        return "Love - Love";
    }
    anotaPuntoJugador1() {
        this.puntosJugador1++;
    }
    anotaPuntoJugador2() {
        this.puntosJugador2++;
    }
}
export default Tennis;
