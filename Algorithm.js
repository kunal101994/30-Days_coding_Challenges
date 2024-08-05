// Activity 1: Sorting Algorithms
// Task 1
function bubbleSort(arr) {
    let n = arr.length;
    // Traverse through all elements in the array
    for (let i = 0; i < n - 1; i++) {
        // Flag to check if any swapping happened
        let swapped = false;
        // Traverse the array from 0 to n-i-1
        // Last i elements are already sorted
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // Logging the array state after each outer loop iteration
        console.log(`Array after iteration ${i + 1}:`, arr);
        // If no swapping happened, array is already sorted
        if (!swapped) break;
    }
}

let arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr);
console.log("Sorted array is:", arr);

// Task 2
function selectionSort(arr) {
    let n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        console.log(`Array after iteration ${i + 1}:`, arr);
    }
}

let arr = [64, 34, 25, 12, 22, 11, 90];
selectionSort(arr);
console.log("Sorted array is:", arr);

// Task 3
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot element
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    // Partition the array into two halves
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the left and right halves, and combine them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = quickSort(arr);
console.log("Sorted array is:", sortedArray);

// Activity 2: Searching Algorithms
// Task 4
function linearSearch(arr, target) {
    // Traverse through all elements in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is equal to the target
        if (arr[i] === target) {
            console.log(`Target value ${target} found at index: ${i}`);
            return i; // Return the index if the target is found
        }
    }
    console.log(`Target value ${target} not found in the array`);
    return -1; // Return -1 if the target is not found
}
let arr = [64, 34, 25, 12, 22, 11, 90];
let target = 22;
linearSearch(arr, target);

// Task 5
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate the middle index
        let mid = Math.floor((left + right) / 2);

        // Check if the target is at the middle index
        if (arr[mid] === target) {
            console.log(`Target value ${target} found at index: ${mid}`);
            return mid;
        }

        // If target is greater, ignore the left half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore the right half
        else {
            right = mid - 1;
        }
    }

    // If the target is not found, log and return -1
    console.log(`Target value ${target} not found in the array`);
    return -1;
}

let arr = [11, 12, 22, 25, 34, 64, 90];
let target = 25;
binarySearch(arr, target);

// Acctivity 3: String Algorithms
// Task 6
function countCharacterOccurrences(str) {
    // Create an empty object to store character counts
    let charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // If the character is already in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } 
        // Otherwise, initialize the count to 1
        else {
            charCount[char] = 1;
        }
    }

    // Log the character counts
    for (let char in charCount) {
        console.log(`Character '${char}' occurs ${charCount[char]} times`);
    }
}
let str = "hello world";
countCharacterOccurrences(str);
// Task 7
function longestSubstringWithoutRepeatingCharacters(str) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < str.length; end++) {
        let currentChar = str[end];

        // If the character is already in the map, move the start pointer
        if (charIndexMap.has(currentChar)) {
            start = Math.max(charIndexMap.get(currentChar) + 1, start);
        }

        // Update the map with the current character's index
        charIndexMap.set(currentChar, end);

        // Calculate the maximum length of substring
        maxLength = Math.max(maxLength, end - start + 1);
    }

    // Log the length of the longest substring
    console.log(`Length of the longest substring without repeating characters is: ${maxLength}`);
    return maxLength;
}

let str = "abcabcbb";
longestSubstringWithoutRepeatingCharacters(str);

// Activity 4: Array Algorithms
// Task 8
function rotateArray(arr, k) {
    // Ensure k is within the bounds of the array length
    k = k % arr.length;

    // Slice the array into two parts and concatenate them in reversed order
    let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));

    // Log the rotated array
    console.log(`Rotated array by ${k} positions:`, rotatedArray);

    return rotatedArray;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotateArray(arr, k);
// Task 9
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    // Traverse both arrays and merge them in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to mergedArray
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    // Log the merged sorted array
    console.log("Merged sorted array:", mergedArray);
    return mergedArray;
}

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
mergeSortedArrays(arr1, arr2);

// Activity 5: Dynamic Programming
// Task 10
function fibonacciDynamic(n) {
    if (n < 0) {
        console.log("Invalid input: n must be a non-negative integer.");
        return;
    }

    // Array to store Fibonacci numbers
    let fib = new Array(n + 1);

    // Base cases
    if (n >= 0) fib[0] = 0;
    if (n >= 1) fib[1] = 1;

    // Compute the Fibonacci sequence
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    // Log the Fibonacci numbers
    console.log(`Fibonacci numbers up to index ${n}:`, fib);
    return fib;
}

let n = 10;
fibonacciDynamic(n);

// Task 11
function knapsack(values, weights, capacity) {
    let n = values.length;
    // Create a 2D array to store the maximum value at each capacity and item index
    let dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    // Fill the dp array
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                // Include the item and see if it gives a better value
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                // Exclude the item
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    // The maximum value that can be obtained with the given capacity
    let maxValue = dp[n][capacity];
    console.log(`Maximum value that can be obtained: ${maxValue}`);
    return maxValue;
}

let values = [60, 100, 120];
let weights = [10, 20, 30];
let capacity = 50;
knapsack(values, weights, capacity);





