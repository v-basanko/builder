import { Cook } from "./cook/cook";
import { CheesePizzaBuilder } from "./pizza-builder/cheese-pizza-builder";
import { MeatPizzaBuilder } from "./pizza-builder/meat-pizza-builder";
import { MushroomsPizzaBuilder } from "./pizza-builder/mushrooms-pizza-builder";
import { PineapplePizzaBuilder } from "./pizza-builder/pineapple-pizza-builder";
import { SeafoodPizzaBuilder } from "./pizza-builder/seafood-pizza-builder";

const run = ()=>{
    const cook = new Cook();

    cook.setBuilder(new CheesePizzaBuilder());
    const cheesePizza = cook.cookPizza();
    console.log(cheesePizza.toString());

    cook.setBuilder(new MeatPizzaBuilder());
    const meetPizza = cook.cookPizza();
    console.log(meetPizza.toString());

    cook.setBuilder(new MushroomsPizzaBuilder());
    const mushromsPizza = cook.cookPizza();
    console.log(mushromsPizza.toString());

    cook.setBuilder(new PineapplePizzaBuilder());
    const pineapplePizza = cook.cookPizza();
    console.log(pineapplePizza.toString());

    cook.setBuilder(new SeafoodPizzaBuilder());
    const seafoodPizza = cook.cookPizza();
    console.log(seafoodPizza.toString());
}

run();
