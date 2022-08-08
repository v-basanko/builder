export interface IPizza {
    setBaze: () => IPizza;
    addCheese: () => IPizza;
    addTopping: (topping: string) => IPizza;
    setReady: ()=> IPizza;
    toString: () => String;
}
