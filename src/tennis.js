class Tennis {

    constructor() {
        this.puntosJugador1 = 0;
        this.puntosJugador2 = 0;
    }
    obtenerScore() {
        if (this.puntosJugador1 >= 4 && this.puntosJugador1 - this.puntosJugador2 >= 2) {
            return "Game for Player 1";
        }
        if (this.puntosJugador2 >= 4 && this.puntosJugador2 - this.puntosJugador1 >= 2) {
            return "Game for Player 2";
        }

        if (this.puntosJugador1 >= 3 && this.puntosJugador2 >= 3) {
            if (this.puntosJugador1 === this.puntosJugador2) {
                return "Deuce";
            }
            if (this.puntosJugador1 === this.puntosJugador2 + 1) {
                return "Advantage Player 1";
            }
            if (this.puntosJugador2 === this.puntosJugador1 + 1) {
                return "Advantage Player 2";
            }
        }

        if (this.puntosJugador1 === 1 && this.puntosJugador2 === 1) {
            return "15 - 15";
        }
        if (this.puntosJugador1 === 2 && this.puntosJugador2 === 2) {
            return "30 - 30";
        }

        if (this.puntosJugador1 === 2 && this.puntosJugador2 === 1) {
            return "30 - 15";
        }
        if (this.puntosJugador1 === 1 && this.puntosJugador2 === 2) {
            return "15 - 30";
        }
        if (this.puntosJugador1 === 3 && this.puntosJugador2 === 1) {
            return "40 - 15";
        }

        if (this.puntosJugador1 === 1 && this.puntosJugador2 === 3) {
            return "15 - 40";
        }
        if (this.puntosJugador1 === 3 && this.puntosJugador2 === 2) {
            return "40 - 30";
        }
        if (this.puntosJugador1 === 2 && this.puntosJugador2 === 3) {
            return "30 - 40";
        }

        if (this.puntosJugador1 === 1 && this.puntosJugador2 === 0) {
            return "15 - Love";
        }
        if (this.puntosJugador1 === 2 && this.puntosJugador2 === 0) {
            return "30 - Love";
        }
        if (this.puntosJugador1 === 3 && this.puntosJugador2 === 0) {
            return "40 - Love";
        }

        if (this.puntosJugador2 === 1 && this.puntosJugador1 === 0) {
            return "Love - 15";
        }
        if (this.puntosJugador2 === 2 && this.puntosJugador1 === 0) {
            return "Love - 30";
        }
        if (this.puntosJugador2 === 3 && this.puntosJugador1 === 0) {
            return "Love - 40";
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
