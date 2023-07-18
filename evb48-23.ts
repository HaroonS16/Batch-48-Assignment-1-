/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

let color2 = "blue";

if(color2 == "green"){
    console.log(`Congrats! You just earned 5 points.`);
}
else if(color2 == "yellow"){
    console.log(`Congrats! You just earned 10 points.`);
}
else if (color2 == "red"){
    console.log(`Congrats! You just earned 15 points.`);
}
else{

    console.log(`Sorry better luck next time!`)
}