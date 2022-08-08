import { PizzaBuilder } from "./pizza-builder";
import { IPizzaBuilder } from "../shared/interfaces/pizza-builder.interface";

export class PineapplePizzaBuilder extends PizzaBuilder {
    addToppings():IPizzaBuilder {
        this.pizza
            .addTopping('Pineapple')
            .addTopping('Сhicken');
        return this;
    }
}
