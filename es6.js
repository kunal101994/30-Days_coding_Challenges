//ES6+ Features
// Activity 1: Template Literals
// Task 1:
const personName = "Alice";
const personAge = 30;

const greeting = `Hello, ${personName}! You are ${personAge} years old.`;
console.log(greeting);

// Task 2
const personName1 = "Satyanarayan";
const personAge1 = 25;

const bio = `
  Name: ${personName1}
  Age: ${personAge1}
  Occupation: Software Developer
  Hobbies: Reading, hiking, and playing guitar
`;

console.log(bio);

// Activity 2: Destructuring
// Task 1
const numbers = [10, 20, 30, 40, 50];

const [firstElement, secondElement] = numbers;

console.log("First element:", firstElement);
console.log("Second element:", secondElement);

// Task 2
const favoriteQuote = `
  "The only way to do great work
   is to love what you do."
                  — Steve Jobs
`;

console.log(favoriteQuote);

//Activity 3: Spread and rest Operators
// Task 5
const existingArray = [1, 2, 3];

const additionalElements = [4, 5, 6];

const combinedArray = [...existingArray, ...additionalElements];
console.log("Combined array:", combinedArray);

// Task 6
function sumNumbers(...numbers) {
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  const result1 = sumNumbers(1, 2, 3);
  const result2 = sumNumbers(10, 20, 30, 40);
  
  console.log("Result 1:", result1);
  console.log("Result 2:", result2);

// Activity 4: //Default Parameters
// Task 7
function calculateProduct(a, b = 1) {
    return a * b;
  }

  const result3 = calculateProduct(5);
  const result4 = calculateProduct(3, 4);
  
  console.log("Result 1:", result3);
  console.log("Result 2:", result4);

//   Activity 5: Enhanced Object Literals
// Task 8
// Creating an object with enhanced object literals
const myAwesomeObject = {
    name: "Copper",
    age: 42,
    favoriteColor: "Cerulean",
    greet() {
      console.log(`Hello, I'm ${this.name}! Nice to meet you.`);
    },
  
    square(number) {
      return number * number;
    }
  };
  
  myAwesomeObject.greet();
  
  const result = myAwesomeObject.square(7);
  console.log(`The square of 7 is ${result}.`);
  console.log("Meet myAwesomeObject:", myAwesomeObject);

//   Task 9
// Variables
const fruit = "apple";
const quantity = 3;

const groceryList = {
  [fruit]: quantity,
  totalItems: quantity + 2 
};

console.log("Grocery list:", groceryList);

  
  

