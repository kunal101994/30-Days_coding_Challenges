// Activity 1: For Loop
// Task: 1
for(let count=1; count<=10; count++){
    console.log(count)
}
// Task: 2
for(let i=1;i<=5;i++){
    for(j=1;j<=10; j++ ){
        console.log(i + "*" + j + ' = ' + i*j)
    }
}

// Activity 2: While Loop
// Task: 3
let sum = 0;
let i = 1;

while(i<=10) {
    sum+=i;
    i++;
}

console.log(`The sum of numbers from 1 to 10 is: ${sum} `);

// Task: 4
let k = 10;
while(k>=1){
    console.log(k);
    k--;
}

// Activity 3: Document...While Loop
// Task:5
let score = 1;
do{
    console.log(score);
    score++;
} while(score<=5);

// Task:6
const number = 5;
let factorial = 1;
let s = 1;

do{
    factorial *= s;
    s++;
} while(s <= number);

console.log(`The factorial of ${number} is: ${factorial}`)

// Activity-4: Nested Loop
//Task:7
const rows = 5; // Change this to the desired number of rows

for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// Activity-5: Loop Control Statements
// Task:8
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

// Task:9
for (let index = 1; index <= 10; index++) {
    if (index == 7) {
        console.log(`Detected 7`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}

