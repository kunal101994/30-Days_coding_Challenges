// Activity 1: Basic Error Handling with Try-
// Task 1
function throwErrorFunction() {
    throw new Error("This is an error");
}

try {
    throwErrorFunction();
} catch (error) {
    console.error("An error occurred: " + error.message);
}

// task 2
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero");
    }
    return numerator / denominator;
}

try {
    let result = divideNumbers(10, 0); // Change the denominator to test different cases
    console.log("Result:", result);
} catch (error) {
    console.error("An error occurred: " + error.message);
}

// Activity 2: Finally Block
// Task 3
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero");
    }
    return numerator / denominator;
}

try {
    console.log("Entering try block");
    let result = divideNumbers(10, 0); // Change the denominator to test different cases
    console.log("Result:", result);
} catch (error) {
    console.log("Entering catch block");
    console.error("An error occurred: " + error.message);
} finally {
    console.log("Entering finally block");
}

console.log("Code execution continues after try-catch-finally block");


// Activity 3:Custom Error Objects
// Task 4
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function doSomethingRisky() {
    throw new CustomError("This is a custom error");
}

// Try-catch block to handle the custom error
try {
    console.log("Entering try block");
    doSomethingRisky();
} catch (error) {
    console.log("Entering catch block");
    if (error instanceof CustomError) {
        console.error("Caught a CustomError: " + error.message);
    } else {
        console.error("An unexpected error occurred: " + error.message);
    }
} finally {
    console.log("Entering finally block");
}

console.log("Code execution continues after try-catch-finally block");

// Task 5
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateUserInput(input) {
    if (!input || typeof input !== 'string' || input.trim() === "") {
        throw new ValidationError("Invalid input: Input must be a non-empty string.");
    }
    return true;
}

function processUserInput(input) {
    try {
        console.log("Entering try block");
        validateUserInput(input);
        console.log("User input is valid:", input);
    } catch (error) {
        console.log("Entering catch block");
        if (error instanceof ValidationError) {
            console.error("Validation Error: " + error.message);
        } else {
            console.error("An unexpected error occurred: " + error.message);
        }
    } finally {
        console.log("Entering finally block");
    }
}


processUserInput("valid input"); 
processUserInput("");
processUserInput(123);
processUserInput(null); 

console.log("Code execution continues after try-catch-finally block");

// Activity 4: Error Handling in Promise
// Task 6
function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() >= 0.5;
        setTimeout(() => {
            if (isSuccess) {
                resolve("Promise resolved successfully!");
            } else {
                reject(new Error("Promise rejected."));
            }
        }, 1000); 
    });
}
randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("An error occurred: " + error.message);
    });

console.log("Waiting for the promise to settle...");

// Task 7
function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() >= 0.5; 
        setTimeout(() => {
            if (isSuccess) {
                resolve("Promise resolved successfully!");
            } else {
                reject(new Error("Promise rejected."));
            }
        }, 1000); 
    });
}
async function handleRandomPromise() {
    try {
        console.log("Entering try block");
        const message = await randomPromise();
        console.log(message);
    } catch (error) {
        console.log("Entering catch block");
        console.error("An error occurred: " + error.message);
    } finally {
        console.log("Entering finally block");
    }
}
handleRandomPromise();

console.log("Waiting for the async function to complete...");

// Activity 5: Graceful Error Handling in Fetch
// Task 8
function fetchDataFromInvalidURL() {
    const invalidURL = "https://invalid.url/endpoint";

    fetch(invalidURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data received:", data);
        })
        .catch(error => {
            console.error("An error occurred while fetching data: " + error.message);
        });
}

fetchDataFromInvalidURL();

console.log("Requesting data from an invalid URL...");

// Task 9
async function fetchDataFromInvalidURL() {
    const invalidURL = "https://invalid.url/endpoint";

    try {
        console.log("Requesting data from an invalid URL...");
        const response = await fetch(invalidURL);
        
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error("An error occurred while fetching data: " + error.message);
    }
}

fetchDataFromInvalidURL();
