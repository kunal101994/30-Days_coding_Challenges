// Activity 1: Creating and Exporting Modules
// Task 1
// mathModule.js
function addTwoNumbers(a, b) {
    return a + b;
}

module.exports = addTwoNumbers;

// Task 2
const person = {
    name: "John Doe",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    celebrateBirthday: function() {
        this.age += 1;
        console.log(`Happy Birthday! I am now ${this.age} years old.`);
    }
};

module.exports = person;


// Activity 3: Named and defualt Exports
// Task 3
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

module.exports = { add, subtract, multiply, divide };

// Task 4
function add(a, b) {
    return a + b;
}

module.exports = add;

// Activity 3: importing Entire Modules
// Task 5
const PI = 3.14159;
const E = 2.71828;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

module.exports = { PI, E, add, subtract, multiply, divide };
