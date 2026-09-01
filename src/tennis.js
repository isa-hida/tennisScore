class Tennis {

    constructor() {
        this.puntosJugador1 = 0;
    }
    obtenerScore() {
        if (this.puntosJugador1 === 1) {
            return "15 - Love";
        }
        if (this.puntosJugador1 === 2) {
            return "30 - Love";
        }
        return "Love - Love";
    }
    anotaPuntoJugador1() {
        this.puntosJugador1++;
    }
}
export default Tennis;
