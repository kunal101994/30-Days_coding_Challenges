// Task 6
const _ = require('lodash');

const array = [1, 2, 3, 4, 5, 6];
const evens = _.filter(array, num => num % 2 === 0);

console.log("Even numbers:", evens);

// Task 7
// app.js
const axios = require('axios');
async function fetchData() {
    try {
        const response = await axios.get('https://api.github.com/users/satyanarayan');
        console.log("Data received:", response.data);
    } catch (error) {
        console.error("An error occurred while fetching data:", error.message);
    }
}

// Call the function to fetch data
fetchData();

