import { IPizza } from "../shared/interfaces/pizza.interface";
import { PizzaBuilder } from "./pizza-builder";
import { IPizzaBuilder } from "../shared/interfaces/pizza-builder.interface";

export class CheesePizzaBuilder extends PizzaBuilder {
    addToppings():IPizzaBuilder {
        this.pizza
            .addTopping('Cheddar Cheese')
            .addTopping('Camembert Cheese')
            .addTopping('Stilton Cheese');
        return this;
    }
}
