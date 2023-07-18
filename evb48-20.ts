/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
 */

const stringA = 'Superior', stringB = '1.2.3.4.5.6.7.8';

console.log(`Is stringA == StringB?. I predict false`);

console.log(stringA.length == stringB.length);

console.log(`Is stringA === StringB?. I predict false`);

console.log(stringA.length === stringB.length);

console.log(`Is stringA < StringA.toLowerCase()?. I predict true`);

console.log(stringA < stringA.toLowerCase());

let number = 500, number1 = 1000;
console.log(`Is ${number} == ${number1}?. I predict false.`);
console.log(number == number1);
console.log(`Is ${number} >= ${number1}?. I predict false.`);
console.log(number >= number1);
console.log(`Is ${number} <= ${number1}?. I predict true.`);
console.log(number <= number1);
console.log(`Is ${number} != ${number1}?. I predict true.`);
console.log(number != number1);

let numberA = 500, number1A = 1000;
console.log(`Is ${numberA} == ${number1A} && ${numberA} < ${number1A}?. I predict false.`);
console.log(numberA == number1A && numberA < number1A);
console.log(`Is ${numberA} > ${number1A} || ${numberA} < ${number1A}?. I predict true.`);
console.log(numberA != number1A || numberA < number1A);

let shortF =["UAE","KSA","UK"];
console.log(`Is shortF == Array?.I predict true`);
console.log(Array.isArray(shortF));
let shortF1=`"UAE","KSA","UK"`;
console.log(`Is shortF == Array?.I predict false`);
console.log(Array.isArray(shortF1));

