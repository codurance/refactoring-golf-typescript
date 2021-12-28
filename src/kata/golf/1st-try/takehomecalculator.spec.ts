import {Pair, Takehomecalculator} from "./takehomecalculator";

describe('TakeHomeCalculator', () => {
    it("can calculate tax", () => {
        const first: number = new Takehomecalculator(10).netAmount(new Pair(40, "GBP"), new Pair(50, "GBP"), new Pair(60, "GBP")).first;
        expect(Math.trunc(first)).toBe(135)
    })

    it("cannot sum different currencies", () => {
        expect(() => new Takehomecalculator(10).netAmount(new Pair(4, "GBP"), new Pair(5, "USD"))).toThrow()
    })
})