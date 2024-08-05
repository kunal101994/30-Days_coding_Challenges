// Activity 1: Understanding LocalStorage
// Task 1
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
    console.log(`Saved value: '${value}' to localStorage with key: '${key}'`);
}

// Function to retrieve a value from localStorage
function retrieveFromLocalStorage(key) {
    let retrievedValue = localStorage.getItem(key);
    console.log(`Retrieved value from localStorage with key '${key}': '${retrievedValue}'`);
    return retrievedValue;
}

let key = "myStringKey";
let value = "Hello, World!";

// Save the string value to localStorage
saveToLocalStorage(key, value);

// Retrieve the string value from localStorage
let retrievedValue = retrieveFromLocalStorage(key);

// Task 2
// Function to log all items in localStorage
function logLocalStorageContent() {
    console.log("Current localStorage content:");
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(`Key: '${key}', Value: '${value}'`);
    }
    console.log("End of localStorage content.\n");
}

// Function to remove an item from localStorage
function removeFromLocalStorage(key) {
    console.log(`Attempting to remove item with key: '${key}'`);
    localStorage.removeItem(key);
}

let keyToRemove = "myStringKey";

// Add some data to localStorage for demonstration
localStorage.setItem("myStringKey", "Hello, World!");
localStorage.setItem("anotherKey", "Another value");

// Log localStorage content before removal
logLocalStorageContent();

// Remove the specified item from localStorage
removeFromLocalStorage(keyToRemove);

// Log localStorage content after removal
logLocalStorageContent();

// Activity 2: Using LocalStorage
// Task 3
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Form with LocalStorage</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             padding: 20px;
//         }
//         form {
//             margin-bottom: 20px;
//         }
//         label {
//             display: block;
//             margin-bottom: 8px;
//         }
//         input[type="text"] {
//             padding: 8px;
//             margin-bottom: 12px;
//             width: 100%;
//             max-width: 300px;
//         }
//         button {
//             padding: 8px 16px;
//         }
//         .saved-data {
//             margin-top: 20px;
//             font-size: 1.2em;
//         }
//     </style>
// </head>
// <body>

//     <h1>Save and Display User Input</h1>

//     <form id="userForm">
//         <label for="username">Enter your name:</label>
//         <input type="text" id="username" name="username" required>
//         <button type="submit">Save</button>
//     </form>

//     <div class="saved-data" id="displayData"></div>

//     <script>
//         document.addEventListener('DOMContentLoaded', function() {
//             // Retrieve and display saved data on page load
//             const savedData = localStorage.getItem('username');
//             const displayData = document.getElementById('displayData');
//             if (savedData) {
//                 displayData.textContent = `Saved Name: ${savedData}`;
//             }

//             // Save data to localStorage when form is submitted
//             document.getElementById('userForm').addEventListener('submit', function(event) {
//                 event.preventDefault(); // Prevent form from refreshing the page

//                 const username = document.getElementById('username').value;
//                 localStorage.setItem('username', username);

//                 displayData.textContent = `Saved Name: ${username}`;
//             });
//         });
//     </script>

// </body>
// </html>

//Task 4
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>LocalStorage Removal Example</title>
// </head>
// <body>

//     <h1>LocalStorage Removal Example</h1>
//     <button id="removeItem">Remove 'username' from LocalStorage</button>

//     <script>
//         // Function to log the current state of localStorage
//         function logLocalStorage() {
//             console.log('Current localStorage content:');
//             for (let i = 0; i < localStorage.length; i++) {
//                 const key = localStorage.key(i);
//                 console.log(`${key}: ${localStorage.getItem(key)}`);
//             }
//             if (localStorage.length === 0) {
//                 console.log('localStorage is empty.');
//             }
//         }

//         // Adding an example item to localStorage (if not already present)
//         if (!localStorage.getItem('username')) {
//             localStorage.setItem('username', 'JohnDoe');
//             console.log("Example 'username' added to localStorage.");
//         }

//         // Log localStorage content before removal
//         console.log('Before removal:');
//         logLocalStorage();

//         // Set up the event listener for the removal button
//         document.getElementById('removeItem').addEventListener('click', function() {
//             // Remove the 'username' item from localStorage
//             localStorage.removeItem('username');
//             console.log("'username' has been removed from localStorage.");

//             // Log localStorage content after removal
//             console.log('After removal:');
//             logLocalStorage();
//         });
//     </script>

// </body>
// </html>


// Activity 3: Understanding SessionStorage
// Task 5
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>SessionStorage Example</title>
// </head>
// <body>

//     <h1>SessionStorage Example</h1>
//     <button id="saveButton">Save to SessionStorage</button>
//     <button id="retrieveButton">Retrieve from SessionStorage</button>

//     <script>
//         // String value to be stored in sessionStorage
//         const valueToSave = "Hello, this is a test string!";

//         // Event listener for saving the string to sessionStorage
//         document.getElementById('saveButton').addEventListener('click', function() {
//             sessionStorage.setItem('testString', valueToSave);
//             console.log(`Saved to sessionStorage: ${valueToSave}`);
//         });

//         // Event listener for retrieving the string from sessionStorage
//         document.getElementById('retrieveButton').addEventListener('click', function() {
//             const retrievedValue = sessionStorage.getItem('testString');
//             if (retrievedValue) {
//                 console.log(`Retrieved from sessionStorage: ${retrievedValue}`);
//             } else {
//                 console.log('No value found in sessionStorage for "testString".');
//             }
//         });
//     </script>

// </body>
// </html>

// Task 6
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>SessionStorage with JSON</title>
// </head>
// <body>

//     <h1>SessionStorage with JSON Example</h1>
//     <button id="saveButton">Save Object to SessionStorage</button>
//     <button id="retrieveButton">Retrieve and Log Object</button>

//     <script>
//         // Object to be stored in sessionStorage
//         const user = {
//             name: "John Doe",
//             age: 30,
//             email: "johndoe@example.com"
//         };

//         // Event listener for saving the object to sessionStorage
//         document.getElementById('saveButton').addEventListener('click', function() {
//             const userJSON = JSON.stringify(user);
//             sessionStorage.setItem('user', userJSON);
//             console.log("Object saved to sessionStorage:", userJSON);
//         });

//         // Event listener for retrieving the object from sessionStorage
//         document.getElementById('retrieveButton').addEventListener('click', function() {
//             const userJSON = sessionStorage.getItem('user');
//             if (userJSON) {
//                 const parsedUser = JSON.parse(userJSON);
//                 console.log("Retrieved and parsed object:", parsedUser);
//             } else {
//                 console.log('No object found in sessionStorage for "user".');
//             }
//         });
//     </script>

// </body>
// </html>

// Activity 4: Using SessionStorage
// Task 7
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Save Form Data to SessionStorage</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             padding: 20px;
//         }
//         form {
//             margin-bottom: 20px;
//         }
//         label {
//             display: block;
//             margin-bottom: 8px;
//         }
//         input[type="text"], input[type="email"] {
//             padding: 8px;
//             margin-bottom: 12px;
//             width: 100%;
//             max-width: 300px;
//         }
//         button {
//             padding: 8px 16px;
//         }
//         .saved-data {
//             margin-top: 20px;
//             font-size: 1.2em;
//         }
//     </style>
// </head>
// <body>

//     <h1>Save and Display User Data</h1>

//     <form id="userForm">
//         <label for="name">Name:</label>
//         <input type="text" id="name" name="name" required>

//         <label for="email">Email:</label>
//         <input type="email" id="email" name="email" required>

//         <button type="submit">Save</button>
//     </form>

//     <div class="saved-data" id="displayData"></div>

//     <script>
//         document.addEventListener('DOMContentLoaded', function() {
//             // Retrieve and display saved data on page load
//             const savedUserData = sessionStorage.getItem('userData');
//             const displayData = document.getElementById('displayData');

//             if (savedUserData) {
//                 const userData = JSON.parse(savedUserData);
//                 displayData.innerHTML = `Saved Name: ${userData.name} <br> Saved Email: ${userData.email}`;
//             }

//             // Save data to sessionStorage when form is submitted
//             document.getElementById('userForm').addEventListener('submit', function(event) {
//                 event.preventDefault(); // Prevent form from refreshing the page

//                 const name = document.getElementById('name').value;
//                 const email = document.getElementById('email').value;
//                 const userData = { name, email };

//                 sessionStorage.setItem('userData', JSON.stringify(userData));

//                 displayData.innerHTML = `Saved Name: ${name} <br> Saved Email: ${email}`;
//             });
//         });
//     </script>

// </body>
// </html>
// Task 8
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>SessionStorage Removal Example</title>
// </head>
// <body>

//     <h1>SessionStorage Removal Example</h1>
//     <button id="removeItem">Remove 'userData' from SessionStorage</button>

//     <script>
//         // Function to log the current state of sessionStorage
//         function logSessionStorage() {
//             console.log('Current sessionStorage content:');
//             for (let i = 0; i < sessionStorage.length; i++) {
//                 const key = sessionStorage.key(i);
//                 console.log(`${key}: ${sessionStorage.getItem(key)}`);
//             }
//             if (sessionStorage.length === 0) {
//                 console.log('sessionStorage is empty.');
//             }
//         }

//         // Adding an example item to sessionStorage (if not already present)
//         if (!sessionStorage.getItem('userData')) {
//             const exampleData = { name: "John Doe", email: "johndoe@example.com" };
//             sessionStorage.setItem('userData', JSON.stringify(exampleData));
//             console.log("Example 'userData' added to sessionStorage.");
//         }

//         // Log sessionStorage content before removal
//         console.log('Before removal:');
//         logSessionStorage();

//         // Set up the event listener for the removal button
//         document.getElementById('removeItem').addEventListener('click', function() {
//             // Remove the 'userData' item from sessionStorage
//             sessionStorage.removeItem('userData');
//             console.log("'userData' has been removed from sessionStorage.");

//             // Log sessionStorage content after removal
//             console.log('After removal:');
//             logSessionStorage();
//         });
//     </script>

// </body>
// </html>

// Activity 5:  Comparing localStorage and sessionStorage
// Task 9
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Storage Function Example</title>
// </head>
// <body>

//     <h1>Storage Function Example</h1>
//     <button id="testButton">Test Storage Functions</button>

//     <script>
//         /**
//          * Saves a value to both localStorage and sessionStorage with the given key.
//          * Then retrieves and logs the values from both storage mechanisms.
//          * @param {string} key - The key under which the value is stored.
//          * @param {string} value - The value to be stored.
//          */
//         function saveAndLog(key, value) {
//             // Save to localStorage
//             localStorage.setItem(key, value);
//             // Save to sessionStorage
//             sessionStorage.setItem(key, value);

//             // Retrieve from localStorage
//             const localStorageValue = localStorage.getItem(key);
//             // Retrieve from sessionStorage
//             const sessionStorageValue = sessionStorage.getItem(key);

//             // Log the retrieved values
//             console.log(`Saved and retrieved values for key "${key}":`);
//             console.log(`localStorage: ${localStorageValue}`);
//             console.log(`sessionStorage: ${sessionStorageValue}`);
//         }

//         // Example usage
//         document.getElementById('testButton').addEventListener('click', function() {
//             const key = 'exampleKey';
//             const value = 'Hello, World!';

//             // Call the function to save and log the values
//             saveAndLog(key, value);
//         });
//     </script>

// </body>
// </html>

// Task 10
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Clear Storage Example</title>
// </head>
// <body>

//     <h1>Clear Storage Example</h1>
//     <button id="clearButton">Clear All Data</button>

//     <script>
//         /**
//          * Clears all data from both localStorage and sessionStorage.
//          * Logs the state of both storages to verify they are empty.
//          */
//         function clearAllStorage() {
//             // Clear localStorage
//             localStorage.clear();
//             console.log('localStorage has been cleared.');

//             // Clear sessionStorage
//             sessionStorage.clear();
//             console.log('sessionStorage has been cleared.');

//             // Verify localStorage is empty
//             if (localStorage.length === 0) {
//                 console.log('localStorage is empty.');
//             } else {
//                 console.log('localStorage is not empty.');
//             }

//             // Verify sessionStorage is empty
//             if (sessionStorage.length === 0) {
//                 console.log('sessionStorage is empty.');
//             } else {
//                 console.log('sessionStorage is not empty.');
//             }
//         }

//         // Set up event listener for the button
//         document.getElementById('clearButton').addEventListener('click', function() {
//             clearAllStorage();
//         });
//     </script>

// </body>
// </html>
