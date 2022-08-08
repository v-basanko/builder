import { ICook } from "../shared/interfaces/cook.interface";
import { IPizzaBuilder } from "../shared/interfaces/pizza-builder.interface";
import { IPizza } from "../shared/interfaces/pizza.interface";

export class Cook implements ICook {
    pizzaBuilder: IPizzaBuilder;

    setBuilder(pizzaBuilder: IPizzaBuilder) {
        this.pizzaBuilder = pizzaBuilder;
    }

    cookPizza():IPizza {
       return this.pizzaBuilder
           .createBase()
           .addCheese()
           .addToppings()
           .bakePizza()
           .pizza;
    }
}
