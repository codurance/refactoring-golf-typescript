import {money, Money} from "./money";

export function taxRate(percent: number): TaxRate {
    return TaxRate.taxRate(percent);
}

export class TaxRate {

    public percent: number;

    private constructor(percent: number) {
        this.percent = percent;
    }

    static taxRate(percent: number): TaxRate {
        return new TaxRate(percent);
    }

    apply(total: Money): Money {
        const amount: number = total.value * (this.percent / 100.0);
        return money(Math.trunc(amount), total.currency);
    }
}