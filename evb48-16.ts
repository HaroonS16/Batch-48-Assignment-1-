/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/

let favPlaces=["DUBAI","ABU DHABI","RIYADH","MADINAH","ISTANBUL","DOHA"];

/*console.log('My favourite places I would love to visit are: ',favPlaces);// printed in original order*/

 const favPlacesA = favPlaces.map(item => item);// using .map() to copy items from original array to this array(favPlacesA)

 favPlacesA.sort();// sorting the array Alphabetically

 console.log('Original Array:',favPlaces, '\n'); // Printed the original order 

 console.log('Alphabetical Order:',favPlacesA, '\n'); //Printed the Alphabetical order 
 

 const favPlacesRA = favPlacesA.map(item => item);
 
 favPlacesRA.reverse();// sorting the array in revese Alphabetical order

 console.log('Reversed Alphabetcial Order:', favPlacesRA, '\n');// Printed the Reversed Alphabetical Order

 favPlaces.reverse();

 console.log('Original Array Reversed: ', favPlaces, '\n');

 favPlaces.reverse();

 console.log('Original Array Back to Normal:', favPlaces, '\n');

 favPlaces.sort();
 
 console.log('Original Array Aphabetical Order:', favPlaces, '\n');

 favPlaces.reverse();

 console.log('Original Array Reversed Alphabetical Order:',favPlaces, '\n');