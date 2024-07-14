// Activity: 1
//Arithmetic Operations
// Task-1
// Write a program to add two numbers and log the result to the console.
let firstNumber = 12;
let secondNumber = 23;
let totalNumber = firstNumber + secondNumber;
console.log(totalNumber);
// Task-2
// Write a program to subtract two numbers and log the result to the console.
const num1 = 234;
const num2 = 100;
const totalNum = num1 - num2;
console.log(totalNum);
// Task-3
// Write a program to mul two numbers and log the result to the console.
const val1  = 12;
const val2 = 12;
const totalVal = val1 * val2;
console.log(totalVal);
// Task-4
// Write a program to divide two numbers and log the result to the console.
const div1 = 24;
const div2 = 12;
const totalDiv = div1 / div2;
console.log(totalDiv);
// Task-5
// Write a program to remainder two numbers and log the result to the console.
let rem1 = 13;
let rem2 = 2;
let totalRem = rem1 % rem2;
console.log(totalRem);

// Activity: 2
//Assignment Operations
// Task-6
let score = 100;
score += 100;
console.log(score);
// Task-7
let noteBook = 10;
noteBook -=5;
console.log(noteBook)

// Activity: 3
// Comparison Operators
// Task-8
let cricketScore = 200;
if(score > 200) {
    console.log("India Win");
}
else if(score < 200) {
    console.log("India Loss the match")
}
else {
    console.log("Draw the match");
}
// second method
let cricScore1 = 5;
let cricScore2 = "5";
console.log(cricScore1 > 5);
console.log(cricScore1 > "10");
console.log(cricScore1 < "10");
console.log(cricScore1 < 15);

// Task-9
let value1 = 10;
let value2 = "20";
console.log(value1 >= "10");
console.log(value1 >= 20);
console.log(value2 <= 20);
console.log(value2 <= "10");

// Task-10
let count1 = 100;
let count2 = "200";
console.log(count1 == "200");
console.log(count1 == 100);
console.log(count2 === "200");
console.log(count2 === 100);

// Activity: 4
// logical Operator
// Task-11
const Number1 = 10;
const Number2 = 20;
console.log(Number1 && Number2 );
// Task-12
console.log(Number1 || Number2);
//Task-13
console.log(Number1 != Number2);

// Activity: 5
// Ternary Operator
// Task 14
let totalScore = 100;
let result = totalScore > 100 ? "Positive" : totalScore > 100 ? "Negative": "Zero";
console.log(result);