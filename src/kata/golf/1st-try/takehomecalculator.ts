import { Money } from "./money";
import { TaxRate } from "./TaxRate";

export class Takehomecalculator {
    private taxRate: TaxRate

    constructor(taxRate: TaxRate) {
        this.taxRate = taxRate;
    }

    netAmount(first: Money, ...rest : Money[] ): Money {
        const total: Money = rest.reduce((previousValue, currentValue) => previousValue.plus(currentValue), first)

        const tax: Money = this.taxRate.apply(total)

        return total.minus(tax)
    }
}
