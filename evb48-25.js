/*Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!*/
var fav_fruits = ["Mangoes", "Oranges", "Apples"];
var fruit = "Mangoes";
if (fruit == fav_fruits[0]) {
    console.log("I really like Mangoes!");
}
else if (fruit == fav_fruits[1]) {
    console.log("I really like Bananas!");
}
else if (fruit == fav_fruits[2]) {
    console.log("I really like Apples!");
}
else {
    console.log("This is not my favourtie fruit:(");
}
