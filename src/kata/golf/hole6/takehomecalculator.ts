import {Money} from "./money";
import {TaxRate} from "./taxrate";

export class Takehomecalculator {
    private readonly taxRate: TaxRate;

    constructor(taxRate: TaxRate) {
        this.taxRate = taxRate;
    }

    netAmount(first: Money, ...rest : Money[] ): Money {

        const monies: Array<Money> = Array.from(rest);
        let total: Money = first;

        for (const next of monies) {
            total = total.plus(next);
        }

        const tax: Money = this.taxRate.apply(total);
        return total.minus(tax);
    }

}