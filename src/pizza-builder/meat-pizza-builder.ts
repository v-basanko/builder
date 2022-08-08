import { IPizza } from "../shared/interfaces/pizza.interface";
import { PizzaBuilder } from "./pizza-builder";
import { IPizzaBuilder } from "../shared/interfaces/pizza-builder.interface";

export class MeatPizzaBuilder extends PizzaBuilder {
    addToppings():IPizzaBuilder {
         this.pizza
            .addTopping('Bacon')
            .addTopping('Tomato');
        return this;
    }
}
