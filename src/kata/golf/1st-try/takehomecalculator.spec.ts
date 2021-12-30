import {Takehomecalculator} from "./takehomecalculator";
import { Money } from "./money";
import { taxRate } from "./TaxRate";

describe('TakeHomeCalculator', () => {
    it("can calculate tax", () => {
        const first: number = new Takehomecalculator(taxRate(10)).netAmount(new Money(40, "GBP"), new Money(50, "GBP"), new Money(60, "GBP")).value;
        expect(Math.trunc(first)).toBe(135)
    })

    it("cannot sum different currencies", () => {
        expect(() => new Takehomecalculator(taxRate(10)).netAmount(new Money(4, "GBP"), new Money(5, "USD"))).toThrow()
    })
})