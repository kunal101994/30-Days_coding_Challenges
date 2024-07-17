// Activity 1: Function Declaration
// Task 1
function checkEvenOrOdd(number){
    if(number % 2 === 0){
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd`);
    }
}

checkEvenOrOdd(7);
checkEvenOrOdd(12);

// Task 2
function calculateSquare(number) {
    return number * number;
}

const inputNumber = 5;
const result = calculateSquare(inputNumber);
console.log(`The square of ${inputNumber} is: ${result}`);

// Activity - 2: Function Expression
// Task 3
const findMax = function(a, b){
    const max = a > b ? a : b;
    console.log(`The maximum of ${a} and ${b} id: ${max}`);
}


findMax(10, 7);
findMax(3, 9);

// Task 4
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
}

const firstString = "Hello ";
const secondString = "World!";
const totalResult = concatenateStrings(firstString, secondString);
console.log(totalResult);

// Activity 3 : Arrow function
// Task 5
const addNumbers = (a, b ) => a + b;

const num1 = 10;
const num2 = 13;
const sum = addNumbers(num1, num2);
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

// Task 6
const containsCharacter = (inputString, targetChar) => {
    return inputString.includes(targetChar);
};

const myString = "Hello, world!";
const target = "o";
const topResult = containsCharacter(myString, target);

if (topResult) {
    console.log(`The string "${myString}" contains the character "${target}".`);
} else {
    console.log(`The string "${myString}" does not contain the character "${target}".`);
}

// Activity 4 // function Parameters and defult values
// Task 7

function multiply(a, b = 1) {
    return a * b;
}

const result1 = multiply(5, 3); // 5 * 3 = 15
const result2 = multiply(7);    // 7 * 1 = 7

console.log(`Result 1: ${result1}`);
console.log(`Result 2: ${result2}`);

// Task 8
function greetPerson(name, age = "unknown") {
    return `Hello, ${name}!${age !== "unknown" ? ` You're ${age} years old.` : ""}`;
}


console.log(greetPerson("Alice", 30));
console.log(greetPerson("Bob"));      

// Activity 5 Higher-Order Functions
// Task 9
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
}
}
function greet() {
    console.log("Hello, world!");
}
repeatFunction(greet, 3);

// Task 10
function composeFunctions(fn1, fn2) {
    return function (value) {
        const intermediateResult = fn1(value);
        const finalResult = fn2(intermediateResult);
        return finalResult;
    };
}


function double(x) {
    return x * 2;
}

function addTen(x) {
    return x + 10;
}

const doubleAndAddTen = composeFunctions(double, addTen);
const totallyValue = doubleAndAddTen(5);

console.log(`Result: ${totallyValue}`);
