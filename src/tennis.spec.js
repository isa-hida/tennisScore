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
});

