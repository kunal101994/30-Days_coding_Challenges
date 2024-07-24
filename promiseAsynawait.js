// Activity 1: Understanding Promises
// Task 1
// Function that returns a promise
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved after 2 seconds");
        }, 2000);
    });
}

// Using the promise
resolveAfter2Seconds().then((message) => {
    console.log(message);
});

// Task 2
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// Activity 2: Promise Chaining
function fetchData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data fetched for id: ${id}`);
        }, 1000); 
    });
}

fetchData(1)
    .then((message) => {
        console.log(message);
        return fetchData(2);
    })
    .then((message) => {
        console.log(message);
        return fetchData(3);
    })
    .then((message) => {
        console.log(message);
        return fetchData(4);
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    // Activity 3: Async/Await
    // Task 4:
    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if (!error) {
                resolve({username: "javascript", password: "123"})
            } else {
                reject('ERROR: JS went wrong')
            }
        }, 1000)
    });
    
    async function consumePromiseFive(){
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    // Task 5
function fetchDataWithError(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id % 2 === 0) {
                resolve(`Data fetched for id: ${id}`);
            } else {
                reject(`Error fetching data for id: ${id}`);
            }
        }, 1000);
    });
}

async function fetchDataHandler(id) {
    try {
        const data = await fetchDataWithError(id);
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDataHandler(1); 
fetchDataHandler(2);

// Activity 4: Fetching Data from an API
// Task 6
fetch('https://api.publicapis.org/entries')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    // Task 7
    async function fetchData() {
        try {
            const response = await fetch('https://api.publicapis.org/entries');
            
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
    
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
    
    fetchData();

    // Activity 5: Concurrent Promises
    // Task 8:
function fetchData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data fetched for id: ${id}`);
        }, 1000); // Simulating a 1-second delay for each fetch
    });
}

function fetchMultipleData() {
    const promises = [
        fetchData(1),
        fetchData(2),
        fetchData(3),
        fetchData(4)
    ];

    Promise.all(promises)
        .then(results => {
            console.log('All data fetched:');
            results.forEach(result => console.log(result));
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchMultipleData();

// Task 9

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data fetched for id: ${id}`);
        }, delay);
    });
}


function raceMultipleData() {
    const promises = [
        fetchData(1, 3000),
        fetchData(2, 1000),
        fetchData(3, 2000) 
    ];

    Promise.race(promises)
        .then(result => {
            console.log('First data fetched:', result);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

raceMultipleData();

    


