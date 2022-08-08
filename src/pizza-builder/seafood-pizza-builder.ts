import { IPizza } from "../shared/interfaces/pizza.interface";
import { PizzaBuilder } from "./pizza-builder";
import {IPizzaBuilder} from "../shared/interfaces/pizza-builder.interface";

export class SeafoodPizzaBuilder extends PizzaBuilder {
    addToppings():IPizzaBuilder {
         this.pizza
            .addTopping('Shrimps')
            .addTopping('Squid')
            .addTopping('Salmon');
         return this;
    }
}
