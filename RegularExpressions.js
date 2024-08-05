// Activity 1: Basic Regular XPathExpressions
// Task 1
function logMatches(text) {
    // Define a regular expression to match words starting with 'a'
    let regex = /\ba\w*/gi;

    // Find all matches in the input text
    let matches = text.match(regex);

    // Log the matches
    if (matches) {
        console.log("Matches found:", matches);
    } else {
        console.log("No matches found.");
    }
}

let text = "An apple a day keeps the doctor away. Amazing adventures await!";
logMatches(text);

// Task 2
function logDigitMatches(text) {
    // Define a regular expression to match all digits
    let regex = /\d+/g;

    // Find all matches in the input text
    let matches = text.match(regex);

    // Log the matches
    if (matches) {
        console.log("Digit matches found:", matches);
    } else {
        console.log("No digit matches found.");
    }
}
let text = "There are 3 apples, 4 oranges, and 12 bananas.";
logDigitMatches(text);

// Actvity 2: Character Classes and Quantifiers
// Task 3
function logCapitalizedWords(text) {
    // Define a regular expression to match words starting with a capital letter
    let regex = /\b[A-Z][a-zA-Z]*\b/g;

    // Find all matches in the input text
    let matches = text.match(regex);

    // Log the matches
    if (matches) {
        console.log("Capitalized words found:", matches);
    } else {
        console.log("No capitalized words found.");
    }
}

let text = "Alice went to Paris and met Bob at the Eiffel Tower.";
logCapitalizedWords(text);

// Task 4
function logDigitSequences(text) {
    // Define a regular expression to match sequences of one or more digits
    let regex = /\d+/g;

    // Find all matches in the input text
    let matches = text.match(regex);

    // Log the matches
    if (matches) {
        console.log("Sequences of digits found:", matches);
    } else {
        console.log("No sequences of digits found.");
    }
}

let text = "The numbers are 123, 4567, and 89. But not 12a34.";
logDigitSequences(text);

// Activity 3: Grouping and Capturing
// Task 5
function capturePhoneNumberComponents(phoneNumber) {
    // Define a regular expression to capture the area code, central office code, and number
    let regex = /^\((\d{3})\) (\d{3})-(\d{4})$/;

    // Execute the regular expression on the input phone number
    let match = phoneNumber.match(regex);

    // Log the captures
    if (match) {
        // match[0] is the entire matched string
        // match[1] is the area code
        // match[2] is the central office code
        // match[3] is the number
        console.log("Full match:", match[0]);
        console.log("Area Code:", match[1]);
        console.log("Central Office Code:", match[2]);
        console.log("Number:", match[3]);
    } else {
        console.log("No match found.");
    }
}

let phoneNumber = "(123) 456-7890";
capturePhoneNumberComponents(phoneNumber);

// Task 6:
function captureEmailComponents(email) {
    // Define a regular expression to capture the username and domain from an email address
    let regex = /^(.+)@(.+)$/;

    // Execute the regular expression on the input email
    let match = email.match(regex);

    // Log the captures
    if (match) {
        // match[0] is the entire matched string
        // match[1] is the username
        // match[2] is the domain
        console.log("Full match:", match[0]);
        console.log("Username:", match[1]);
        console.log("Domain:", match[2]);
    } else {
        console.log("No match found.");
    }
}
let email = "username@example.com";
captureEmailComponents(email);

// Activity 4: Assertions and Boundaries
// Task 7
function matchWordAtStart(text) {
    // Define a regular expression to match a word at the beginning of the string
    let regex = /^\b\w+\b/;

    // Execute the regular expression on the input text
    let match = text.match(regex);

    // Log the matches
    if (match) {
        console.log("Word at the beginning of the string:", match[0]);
    } else {
        console.log("No match found.");
    }
}

let text1 = "Hello world, this is a test.";
let text2 = "This is another test.";
matchWordAtStart(text1); 
matchWordAtStart(text2);  

// Task 8
function matchWordAtEnd(text) {
    // Define a regular expression to match a word at the end of the string
    let regex = /\b\w+\b$/;

    // Execute the regular expression on the input text
    let match = text.match(regex);

    // Log the matches
    if (match) {
        console.log("Word at the end of the string:", match[0]);
    } else {
        console.log("No match found.");
    }
}

let text1 = "This is a test";
let text2 = "Another example here";
let text3 = "Trailing word";

matchWordAtEnd(text1);  
matchWordAtEnd(text2); 
matchWordAtEnd(text3); 

// Activity 5: Practical Applications
// Task 9
function validatePassword(password) {
    // Define a regular expression to validate the password
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // Test the password against the regular expression
    let isValid = regex.test(password);

    // Log whether the password is valid
    if (isValid) {
        console.log("Password is valid.");
    } else {
        console.log("Password is invalid.");
    }
}

// Example usage
let password1 = "Passw0rd";
let password2 = "password";
let password3 = "PASSWORD123";
let password4 = "Pa1";

validatePassword(password1);  // Expected output: Password is valid.
validatePassword(password2);  // Expected output: Password is invalid.
validatePassword(password3);  // Expected output: Password is invalid.
validatePassword(password4);  // Expected output: Password is invalid.
function validatePassword(password) {
    // Define a regular expression to validate the password
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // Test the password against the regular expression
    let isValid = regex.test(password);

    // Log whether the password is valid
    if (isValid) {
        console.log("Password is valid.");
    } else {
        console.log("Password is invalid.");
    }
}

let password1 = "Passw0rd";
let password2 = "password";
let password3 = "PASSWORD123";
let password4 = "Pa1";

validatePassword(password1);  
validatePassword(password2);  
validatePassword(password3);  
validatePassword(password4); 

// Task 10
function validateURL(url) {
    // Define a regular expression to validate a URL
    let regex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/[^\s]*)?$/;

    // Test the URL against the regular expression
    let isValid = regex.test(url);

    // Log whether the URL is valid
    if (isValid) {
        console.log("URL is valid.");
    } else {
        console.log("URL is invalid.");
    }
}

let url1 = "https://www.example.com";
let url2 = "http://example.com/path/to/resource";
let url3 = "ftp://ftp.example.com:21";
let url4 = "example";
let url5 = "http://example";

validateURL(url1);  
validateURL(url2);  
validateURL(url3);  
validateURL(url4);  
validateURL(url5); 
