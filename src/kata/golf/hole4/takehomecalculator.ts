import {Incalculable} from "./incalculable";

export class Money {
    public value: number;
    public currency: string;


    constructor(value: number, currency: string) {
        this.value = value;
        this.currency = currency;
    }

    plus(other: Money): Money {
        if(other.currency !== this.currency){
            throw new Incalculable();
        }
        return new Money(this.value + other.value, other.currency);
    }
}

export class Takehomecalculator {
    private percent: number;

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
        const tax: Money = new Money(Math.trunc(amount), first.currency);

        if (total.currency !== tax.currency) {
            throw new Incalculable()
        }
        return new Money(total.value - tax.value, first.currency)
    }

}