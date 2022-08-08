import { PizzaBuilder } from "./pizza-builder";
import { IPizzaBuilder } from "../shared/interfaces/pizza-builder.interface";

export class MushroomsPizzaBuilder extends PizzaBuilder {
    addToppings():IPizzaBuilder {
        this.pizza
            .addTopping('Porcini')
            .addTopping('Сhampignons');
        return this;
    }
}
