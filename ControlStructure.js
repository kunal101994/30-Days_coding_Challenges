// Activity:1: If-else Statement
// Task:1
const value  = 0;
if(value > 0) {
    console.log("Positive")
}
if(value < 0){
    console.log("Negative");
}
else {
    console.log("Zero");
}
// 2nd method
if(value > 0 ){
    console.log("Positive Number");
}
else {
    console.log("Negative Number");
}

// Task:2
const age = 25;
if(age >= 18) {
    console.log("Eligible for Vote");
}
else {
    console.log("Not Eligible for vote");
}

// Activity-2;
// Nested if-Else Statements
// Task:3
let number1 = 10;
let number2 = 25;
let number3 = 45;

if(number1 > number2) {
    console.log("number1 is greater");
}
else if(number2 > number3) {
    console.log("number2 is greater");
}
else {
    console.log("number3 is greater");
}

// Activity-3
// Task 4:
const day = 2;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day. Please choose a valid Day");                               
}

// Task 5:
const score = 89;
switch(true) {
    case (score >= 90):
        console.log("Grade : A")
        break;
    case (score >= 80):
        console.log("Grade: B");
        break;
    case (score >= 70):
    console.log("Grade: C");
        break;
    case (score >= 60):
    console.log("Grade: D");
        break;
    case (score >= 50):
        console.log("Grade: Pass");
        break;
    case (score >= 40):
        console.log("Grade: Fail");
        break;
    default:
        console.log("Invalid Score");
}
// Activity 4:
// Task 6:

let number = 7;
let result = (number % 2 == 0 ) ? "Even": "Odd";
console.log(result);

// Activity 5
// Task 7;
let year = 2024;
let isLeapYear = (year % 4 == 0 && year % 100 !== 0) ||(year % 400 === 0);
if(isLeapYear){
    console.log(`This ${year} is leap year`);
} else {
    console.log(`This ${year} is not leap year`);
}
