// Activity 1: Understanding Closures
// Task 1
function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeter("Hello");
console.log(sayHello("Alice"));

// Task 2
function createCounter() {
    let count = 0; // Private variable
    function increment() {
        count++;
        console.log(`Counter incremented: ${count}`);
    }

    function getCurrentValue() {
        return count;
    }

    return {
        increment,
        getCurrentValue
    };
}

const counter = createCounter();

counter.increment(); 
counter.increment(); 


console.log(`Current counter value: ${counter.getCurrentValue()}`); // Output: Current counter value: 2

// Activity 2: Practical Closures
// Task 3
function createIdGenerator() {
    let lastId = 0; 
    return function() {
        lastId++;
        return `ID-${lastId}`;
    };
}
const generateId = createIdGenerator();

console.log(generateId()); 
console.log(generateId()); 
console.log(generateId()); 

// Task 4
function createGreeter(name) {
    return function() {
        return `Hello, ${name}!`;
    };
}

const greetAlice = createGreeter("Alice");
console.log(greetAlice());

// Activity 3: Closure in Loops
// Task 5
const functionsArray = [];

for (let i = 0; i < 5; i++) {
    functionsArray.push((function(index) {
        return function() {
            console.log(`Index: ${index}`);
        };
    })(i));
}
functionsArray.forEach(func => func());

// Activity 4: Module Pattern
// Task 6
function createItemManager() {
    let items = [];

    function addItem(item) {
        items.push(item);
        console.log(`Added item: ${item}`);
    }

    function removeItem(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
            console.log(`Removed item: ${item}`);
        } else {
            console.log(`Item not found: ${item}`);
        }
    }

    function listItems() {
        console.log('Current items:', items);
    }

    return {
        addItem,
        removeItem,
        listItems
    };
}

const itemManager = createItemManager();

itemManager.addItem('Apple');
itemManager.addItem('Banana');
itemManager.listItems();

itemManager.removeItem('Apple');
itemManager.listItems();

itemManager.removeItem('Orange');


// Activity 5: Memoization
// Task 7
function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log('Fetching from cache:', key);
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        console.log('Computing result for:', key);
        return result;
    };
}


function slowFunction(num) {
    for (let i = 0; i < 1e9; i++) {}
    return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(10));

// Task 8
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Fetching from cache:', key);
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        console.log('Computing result for:', key);
        return result;
    };
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));