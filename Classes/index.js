// Activity 1: Class Definition
// Task 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

module.exports = Person;
// Task 2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

const person = new Person("John", 30);
person.updateAge(31);

// Activity 2: Class Inheritance
// Task 3
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }
}

const student = new Student("John", 20, "S12345");
console.log(`Student ID: ${student.getStudentId()}`);

// Task 4
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }

    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

const student = new Student("John", 20, "S12345");
console.log(student.greeting());

// Activity 3: Static Methods and Properties
// Task 5
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello, this is a generic greeting.";
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }

    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

console.log(Person.genericGreeting());

// Task 6
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello, this is a generic greeting from the Person class.";
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }

    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

console.log(Person.genericGreeting());

// Activity 4: Getters and Setters
// Task 7
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    greeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello, this is a generic greeting from the Person class.";
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }

    greeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

const person = new Person("Satya", "Rout", 30);
console.log(`Full name: ${person.fullName}`);

// Task 8
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    greeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello, this is a generic greeting from the Person class.";
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }

    greeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

const person = new Person("Satya", "Rout", 30);
console.log(`Full name: ${person.fullName}`);


person.fullName = "Kunal Rout";
console.log(`Updated full name: ${person.fullName}`);

// Activity 5: Private Fieds
// Task 9
class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else if (amount > this.#balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new Account(100);
console.log(`Initial balance: $${myAccount.getBalance()}`);
myAccount.deposit(50);
myAccount.withdraw(30);
myAccount.withdraw(150);
console.log(`Final balance: $${myAccount.getBalance()}`);

// Task 10
class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else if (amount > this.#balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new Account(100);
console.log(`Initial balance: $${myAccount.getBalance()}`);

myAccount.deposit(50);
console.log(`Balance after deposit: $${myAccount.getBalance()}`);

myAccount.withdraw(30);
console.log(`Balance after withdrawal: $${myAccount.getBalance()}`);

myAccount.withdraw(150);
console.log(`Balance after attempting overdraft: $${myAccount.getBalance()}`);

console.log(`Final balance: $${myAccount.getBalance()}`);
