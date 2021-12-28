import {Incalculable} from "./incalculable";

export class Money {
    public first: number;
    public second: string;

    constructor(first: number, second: string) {
        this.first = first;
        this.second = second;
    }
}

export class Takehomecalculator {
    private percent: number

    constructor(percent: number) {
        this.percent = percent;
    }

    netAmount(first: Money, ...rest : Money[] ): Money {

        const pairs: Array<Money> = Array.from(rest);
        let total: Money = first

        for (let next of pairs) {
            if (next.second !== total.second) {
                throw new Incalculable()
            }
        }

        for (const next of pairs) {
            total = new Money(total.first + next.first, next.second)
        }

        const amount:number = total.first * (this.percent / 100.0 );
        const tax: Money = new Money(Math.trunc(amount), first.second);

        if (total.second !== tax.second) {
            throw new Incalculable()
        } else {
            return new Money(total.first - tax.first, first.second)
        }
    }

}