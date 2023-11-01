const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false}, 
    {name: "Tofu", isVegan: true}, 
    {name: "Burger", isVegan: false}, 
    {name: "Rice", isVegan: true}, 
    {name: "Pasta", isVegan: true}
];

let fruitIndex = 0;

for (let i = 0; i <foodSchedule.length; i++) {
    let food = foodSchedule[i];
    if(!food.isVegan){
        if(fruitIndex === fruits.length) {
            console.log("No hay más frutas");
        } else {
        foodSchedule[i].name = fruits[fruitIndex];
        foodSchedule[i].isVegan = true;
        fruitIndex++;
    }
}
}
console.log(foodSchedule);