import Tennis from "./tennis.js";

describe("Tennis", () => {
    it("deberia mostrar love - love cuando ningun jugador anota", () => {
        let tennis = new Tennis();
        expect(tennis.obtenerScore()).toEqual("Love - Love");
    });

    it("deberia mostrar 15 - love cuando jugador 1 anota 1 punto", () => {
        let tennis = new Tennis();
        tennis.anotaPuntoJugador1();
        expect(tennis.obtenerScore()).toEqual("15 - Love");
    });

    it("deberia mostrar 30 - love cuando jugador 1 anota 2 puntos", () => {
        let tennis = new Tennis();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        expect(tennis.obtenerScore()).toEqual("30 - Love");
    });

    it("deberia mostrar 40 - love cuando jugador 1 anota 3 puntos", () => {
        let tennis = new Tennis();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        expect(tennis.obtenerScore()).toEqual("40 - Love");
    });

    it("deberia mostrar Game for player 1 cuando jugador 1 anota 4 puntos", () => {
        let tennis = new Tennis();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        expect(tennis.obtenerScore()).toEqual("Game for player 1");
    });

    it("deberia mostrar Love - 15 cuando jugador 2 anota 1 punto", () => {
        let tennis = new Tennis();
        tennis.anotaPuntoJugador2();
        expect(tennis.obtenerScore()).toEqual("Love - 15");
    });

    it("deberia mostrar 30 - Love cuando jugador 2 anota 2 puntos", () => {
        let tennis = new Tennis();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        expect(tennis.obtenerScore()).toEqual("Love - 30");
    });
    it("deberia mostrar 40 - Love cuando jugador 2 anota 3 puntos", () => {
        let tennis = new Tennis();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        expect(tennis.obtenerScore()).toEqual("Love - 40");
    });

    it("deberia mostrar Game for player 2 cuando jugador 2 anota 4 puntos", () => {
        let tennis = new Tennis();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        expect(tennis.obtenerScore()).toEqual("Game for player 2");
    });

    it("deberia mostrar 30 - 15 cuando  jugador 1 anota 2 y jugador 2 anota 1", () => {
        let tennis = new Tennis();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador2();
        expect(tennis.obtenerScore()).toEqual("30 - 15");
    });
    it("deberia mostrar Deuce cuando  jugador 1 anota 3 y jugador 2 anota 3", () => {
        let tennis = new Tennis();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        expect(tennis.obtenerScore()).toEqual("Deuce");
    });

    it("deberia mostrar Advantage Player 1 cuando  jugador 1 anota 4 y jugador 2 anota 3", () => {
        let tennis = new Tennis();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        expect(tennis.obtenerScore()).toEqual("Advantage Player 1");
    });

    it("deberia mostrar Advantage Player 2 cuando  jugador 1 anota 3 y jugador 2 anota 4", () => {
        let tennis = new Tennis();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador1();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        tennis.anotaPuntoJugador2();
        expect(tennis.obtenerScore()).toEqual("Advantage Player 2");
    });
});


