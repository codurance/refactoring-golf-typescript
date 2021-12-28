import {Incalculable} from "./incalculable";

export class Money {
    public value: number;
    public currency: string;

    constructor(first: number, second: string) {
        this.value = first;
        this.currency = second;
    }
}

export class Takehomecalculator {
    private percent: number

    constructor(percent: number) {
        this.percent = percent;
    }

    netAmount(first: Money, ...rest : Money[] ): Money {

        const monies: Array<Money> = Array.from(rest);
        let total: Money = first

        for (let next of monies) {
            if (next.currency !== total.currency) {
                throw new Incalculable()
            }
        }

        for (const next of monies) {
            total = new Money(total.value + next.value, next.currency)
        }

        const amount:number = total.value * (this.percent / 100.0 );
        const tax: Money = new Money(Math.trunc(amount), first.currency);

        if (total.currency !== tax.currency) {
            throw new Incalculable()
        } else {
            return new Money(total.value - tax.value, first.currency)
        }
    }

}