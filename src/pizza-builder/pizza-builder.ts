import { IPizzaBuilder } from "../shared/interfaces/pizza-builder.interface";
import { IPizza } from "../shared/interfaces/pizza.interface";
import { Pizza } from "../pizza/pizza";

export abstract class PizzaBuilder implements IPizzaBuilder {

    get pizza() {
        return this._pizza;
    }

    private _pizza: IPizza;

    constructor() {
        this._pizza = new Pizza();
    }

    createBase():IPizzaBuilder {
        this.pizza.setBaze();
        return this;
    }

    addCheese():IPizzaBuilder {
        this.pizza.addCheese();
        return this;
    }

    addToppings():IPizzaBuilder {
        return this;
    }

    bakePizza():IPizzaBuilder {
        this.pizza.setReady();
        return this;
    }
}
