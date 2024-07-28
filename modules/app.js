// Task 1
// const addTwoNumbers = require('./modules.js');

// const result = addTwoNumbers(3, 4);
// console.log("The result of adding 3 and 4 is:", result);

// Task 2
// const person = require('./modules.js');

// person.greet();
// person.celebrateBirthday();
// person.greet();

// Task 3
// const { add, subtract, multiply, divide } = require('./modules.js');

// console.log("Addition of 5 and 3:", add(5, 3));
// console.log("Subtraction of 5 and 3:", subtract(5, 3));
// console.log("Multiplication of 5 and 3:", multiply(5, 3));
// try {
//     console.log("Division of 5 and 3:", divide(5, 3));
//     console.log("Division of 5 and 0:", divide(5, 0)); // This will throw an error
// } catch (error) {
//     console.error("An error occurred: " + error.message);
// }

// Task 4
// const add = require('./modules.js');

// const result = add(5, 3);
// console.log("Addition of 5 and 3:", result);

// Task 5
const utility = require('./modules.js');

console.log("Value of PI:", utility.PI);
console.log("Value of E:", utility.E);

console.log("Addition of 5 and 3:", utility.add(5, 3));
console.log("Subtraction of 5 and 3:", utility.subtract(5, 3));
console.log("Multiplication of 5 and 3:", utility.multiply(5, 3));
try {
    console.log("Division of 5 and 3:", utility.divide(5, 3));
    console.log("Division of 5 and 0:", utility.divide(5, 0)); 
} catch (error) {
    console.error("An error occurred: " + error.message);
}
