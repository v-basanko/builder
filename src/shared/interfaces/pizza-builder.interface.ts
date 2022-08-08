import { IPizza } from "./pizza.interface";

export interface IPizzaBuilder {
    pizza: IPizza;
    createBase: ()=>IPizzaBuilder;
    addToppings: ()=>IPizzaBuilder;
    addCheese: ()=>IPizzaBuilder;
    bakePizza: ()=>IPizzaBuilder;
}
