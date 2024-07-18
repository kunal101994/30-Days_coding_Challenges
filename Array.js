// Day 6: Arrays
// Activity 1: Array Creation and Access
// Task 1:
const number = [1,2,3,4,5];
console.log(number)

// Task 2:
const score = [12,36,56,78,34];
// first element of this array
console.log(score[0])
// last element of this array
console.log (score[4]);

// Activity 2: Array Methods(Basic)
// Task 3:
const bookList = ["Hindi", "english", "punjabi", "telugu"];
bookList.push("bengli");
console.log(bookList);

//Task 4:
bookList.pop();
console.log(bookList);

// Task 5:
bookList.shift();
console.log(bookList);

// Task 6:
bookList.unshift("tamil");
console.log(bookList);

// Activity 3: Array Methods(intermediate)
// Task 7:
const originalArray = [1, 2, 3, 4, 5];

const doubledArray = originalArray.map((number) => number * 2);

console.log("Original array:", originalArray);
console.log("Doubled array:", doubledArray);

// Task 8:
const originalArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenArray = originalArray1.filter((number) => number % 2 === 0);

console.log("Original array:", originalArray1);
console.log("Even numbers array:", evenArray);

// Task 9:
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Original array:", numbers);
console.log("Sum of all numbers:", sum);

// Activity 4: Array iteration
// Task 10
const myArray = [10, 20, 30, 40, 50];

for (let i = 0; i < myArray.length; i++) {
    console.log(`Element at index ${i}: ${myArray[i]}`);
}

// Task 11
const myArray1 = [10, 20, 30, 40, 50];

myArray1.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});

// Activity 15: Multi-dimensional Arrays
// Task 12
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matrix);

  // Task 13:
  const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  
  const specificElement = matrix[1][2];
  console.log("The specific element is:", specificElement);
  
  
