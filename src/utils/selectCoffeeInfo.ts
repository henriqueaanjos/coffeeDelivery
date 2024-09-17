import { coffeeDescriptions } from "./coffeeDescriptions";

export function selectCoffeeInfo(id: number){
    const coffeeTypes = [...coffeeDescriptions[0].data, 
    ...coffeeDescriptions[1].data, 
    ...coffeeDescriptions[2].data]

    return coffeeTypes[id - 1];
}

export function selectCoffeeType(id: number){
    return coffeeDescriptions.find(item => item.data.find(coffee => coffee.id === id))?.title;
}