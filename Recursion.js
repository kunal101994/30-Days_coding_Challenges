// Activity 1: basic recursion
// Task 1
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1); 
}

console.log(factorial(0)); 
console.log(factorial(1)); 
console.log(factorial(5)); 
console.log(factorial(7)); 
console.log(factorial(10)); 

// Task 2
function fibonacci(n) {
    if (n <= 0) return 0; 
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(10));

// Activity 2: Recursion with Arrays
// Task 3
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([10, 20, 30])); 
console.log(sumArray([5]));
console.log(sumArray([]));
console.log(sumArray([-1, -2, -3]));

// Task 4
function findMax(arr) {
    if (arr.length === 1) return arr[0];
    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMax([10, 20, 30]));
console.log(findMax([5])); 
console.log(findMax([-1, -2, -3])); 
console.log(findMax([3, 5, 2, 8, 1, 9])); 
console.log(findMax([0, -1, 1, -2, 2])); 

// Activit 3: String Manipulation with Recursion
// Task 5
function reverseString(str) {
    if (str.length <= 1) return str;
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));   
console.log(reverseString("world"));   
console.log(reverseString("JavaScript"));
console.log(reverseString("a")); 
console.log(reverseString("")); 
console.log(reverseString("abcfed"));

// Task 6
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("Madam, in Eden, I'm Adam")); 
console.log(isPalindrome("12321")); 
console.log(isPalindrome("123456")); 
console.log(isPalindrome("a"));     
console.log(isPalindrome("")); 


// Activity 4: String Manipulation with recursion
// Task 7
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    } 
    else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([10, 20, 30, 40, 50], 30)); 
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));
console.log(binarySearch([2, 4, 6, 8, 10], 5));
console.log(binarySearch([2, 4, 6, 8, 10], 8));
console.log(binarySearch([], 1)); 
console.log(binarySearch([1], 1));
console.log(binarySearch([1], 2));

// Task 8
function countOccurrences(arr, target, index = 0) {
    if (index >= arr.length) return 0;
    const count = arr[index] === target ? 1 : 0;
    return count + countOccurrences(arr, target, index + 1);
}

// Test cases
console.log(countOccurrences([1, 2, 3, 4, 5], 3));
console.log(countOccurrences([1, 3, 3, 3, 5], 3));
console.log(countOccurrences([10, 20, 30, 40, 50], 60));
console.log(countOccurrences([1, 1, 1, 1, 1], 1)); 
console.log(countOccurrences([], 1));
console.log(countOccurrences([7, 8, 9, 10], 7));
console.log(countOccurrences([2, 4, 6, 2, 2], 2));

// Activity 5: Tree Traversal
// task 9
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function inOrderTraversal(node) {
    if (node === null) return;

    // Traverse the left subtree
    inOrderTraversal(node.left);

    // Visit the root node
    console.log(node.value);

    // Traverse the right subtree
    inOrderTraversal(node.right);
}


const root = new TreeNode(4);
root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
root.right = new TreeNode(6, new TreeNode(5), new TreeNode(7));

inOrderTraversal(root); // Output: 1, 2, 3, 4, 5, 6, 7


// Task 10
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function calculateDepth(node) {
    if (node === null) return 0;

    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}


const root = new TreeNode(4);
root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
root.right = new TreeNode(6, new TreeNode(5), new TreeNode(7));

console.log(calculateDepth(root));
      1

const singleNodeTree = new TreeNode(1);

console.log(calculateDepth(singleNodeTree));

console.log(calculateDepth(null));

const complexTree = new TreeNode(1);
complexTree.left = new TreeNode(2, new TreeNode(4, new TreeNode(6)), null);
complexTree.right = new TreeNode(3, null, new TreeNode(5, null, new TreeNode(7)));

console.log(calculateDepth(complexTree));


