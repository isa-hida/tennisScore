import Tennis from "./tennis.js";

describe("Tennis", () => {
    it("deberia mostrar love - love cuando ningun jugador anota", () => {
        let tennis = new Tennis();
        expect(tennis.obtenerScore()).toEqual("Love - Love");
    });
});

