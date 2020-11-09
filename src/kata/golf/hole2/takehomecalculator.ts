import {Incalculable} from "./incalculable";

export class Pair<A, B> {
    public first: A;
    public second: B;

    constructor(first: A, second: B) {
        this.first = first;
        this.second = second;
    }
}

export class Takehomecalculator {
    private percent: number

    constructor(percent: number) {
        this.percent = percent;
    }

    netAmount(first: Pair<number, string>, ...rest : Pair<number, string>[] ): Pair<number, string> {

        const pairs: Array<Pair<number, string>> = Array.from(rest);
        let total: Pair<number, string> = first

        for (let next of pairs) {
            if (next.second !== total.second) {
                throw new Incalculable()
            }
        }

        for (const next of pairs) {
            total = new Pair<number, string>(total.first + next.first, next.second)
        }

        const amount:number = total.first * (this.percent / 100.0 );
        const tax: Pair<number, string> = new Pair(Math.trunc(amount), first.second);

        if (total.second !== tax.second) {
            throw new Incalculable()
        }
        return new Pair(total.first - tax.first, first.second)
    }

}