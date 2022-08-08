import { IPizza } from "./pizza.interface";
import { IPizzaBuilder } from "./pizza-builder.interface";

export interface ICook {
    setBuilder: (pizzaBuilder: IPizzaBuilder)=>void
    cookPizza: ()=>IPizza;
}
