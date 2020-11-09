import {Incalculable} from "./incalculable";
import {money, Money} from "./money";

export class Takehomecalculator {
    private readonly percent: number;

    constructor(percent: number) {
        this.percent = percent;
    }

    netAmount(first: Money, ...rest : Money[] ): Money {

        const monies: Array<Money> = Array.from(rest);
        let total: Money = first;

        for (const next of monies) {
            total = total.plus(next);
        }

        const amount:number = total.value * (this.percent / 100.0 );
        const tax: Money = money(Math.trunc(amount), first.currency);

        if (total.currency !== tax.currency) {
            throw new Incalculable();
        }
        return total.minus(tax);
    }

}