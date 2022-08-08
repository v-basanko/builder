import { IPizza } from "../shared/interfaces/pizza.interface";
import { PizzaStates } from "../shared/enums/pizza-states.enum";

export class Pizza implements IPizza {
    private _hasBaze: boolean = false;
    private _hasCheese: boolean = false;
    private _toppings: Array<string> = [];
    private _state: PizzaStates = PizzaStates.RAW;

    setBaze():IPizza {
        this._hasBaze = true;
        return this;
    }

    addCheese():IPizza {
        this._hasCheese = true;
        return this;
    }

    addTopping(topping: string):IPizza {
        this._toppings.push(topping);
        return this;
    }

    setReady():IPizza {
        this._state = PizzaStates.READY;
        return this;
    }

    toString(): string {
        if(this._hasBaze && this._hasCheese && this.isReady() && this._toppings.length > 0) {
            return `Pizza with ${this._toppings.join(' and ')}`;
        } else {
            return 'Something strange';
        }
    }

    private isReady(): boolean {
        return this._state === PizzaStates.READY;
    }
}
