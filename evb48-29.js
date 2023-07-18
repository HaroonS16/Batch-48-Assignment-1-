/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza. */
var favPizzas = ["Pepperoni", "Fajita", "Chicken-Tikka"];
for (var i = 0; i < 3; i++) {
    console.log("".concat(favPizzas[i], " pizza \n"));
    if (i == 0) {
        console.log("I like ".concat(favPizzas[i], " pizzas alot! \n "));
    }
    else if (i == 1) {
        console.log("I like ".concat(favPizzas[i], " pizza but not more than ").concat(favPizzas[0], " pizza. \n"));
    }
    else {
        console.log("I will eat a ".concat(favPizzas[i], " pizza but that's about it. \n"));
    }
}
