import {Incalculable} from "./incalculable";

export class Money {
    public value: number;
    public currency: string;


    private constructor(value: number, currency: string) {
        this.value = value;
        this.currency = currency;
    }

    plus(other: Money): Money {
        if (other.currency !== this.currency) {
            throw new Incalculable();
        }
        return money(this.value + other.value, other.currency);
    }

    minus(other: Money): Money {
        if(this.currency !== other.currency) {
            throw new Incalculable();
        }
        return money(this.value - other.value, this.currency);
    }

    static money(value: number, currency: string): Money {
        return new Money(value, currency);
    }
}

export function money(value: number, currency: string): Money {
    return Money.money(value, currency);
}