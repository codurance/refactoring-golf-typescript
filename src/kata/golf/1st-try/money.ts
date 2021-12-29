import { Incalculable } from "./incalculable";


export class Money {
    public value: number;
    public currency: string;

    constructor(value: number, currency: string) {
        this.value = value;
        this.currency = currency;
    }

    plus(other: Money): Money {
        if (other.currency !== this.currency) {
            throw new Incalculable();
        }
        return new Money(this.value + other.value, other.currency);
    }

    minus(other: Money): Money {
        if (this.currency !== other.currency) {
            throw new Incalculable();
        }
        return new Money(this.value - other.value, other.currency);
    }
}
