//Activity 1
//Task 1
console.log(`<--------------- Task 1 --------------->`);

function factorial(number) {
    if (number < 0) {
        return `Negative number does not have a factoril`;
    } else if (number == 0 || number == 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(7)); // Output: 5040
console.log(factorial(-3)); // Output: Negative number does not have a factoril
//Task 2
console.log(`<--------------- Task 2 --------------->`);

function fibonacci(n) {
    if (n < 0) {
        return "Undefined for negative numbers";
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(-3)); // Output: Undefined for negative numbers

//Activity 2
//Task 3
console.log(`<--------------- Task 3 --------------->`);

function sumArray(arr, n = arr.length) {
    if (n <= 0) {
        return 0;
    }
    return arr[n - 1] + sumArray(arr, n - 1);
}
// Test cases
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, -2, 3, 5])); // Output: 16
console.log(sumArray([]));
//Task 4
console.log(`<--------------- Task 4 --------------->`);

function maxArray(arr, n = arr.length) {
    if (n === 1) {
        return arr[0];
    }
    return Math.max(arr[n - 1], maxArray(arr, n - 1));
}

// Test cases
console.log(maxArray([1, 2, 3, 4, 5])); // Output: 5
console.log(maxArray([10, -2, 3, 5])); // Output: 10
console.log(maxArray([-5, -1, -10])); // Output: -1

//Activity 3
//Task 5
console.log(`<--------------- Task 5 --------------->`);

function reverseString(str) {
    if (str === "") {
        return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}

// Test cases
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("")); // Output: ""
//Task 6
console.log(`<--------------- Task 6 --------------->`);

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str.charAt(0) !== str.charAt(str.length - 1)) {
        return false;
    }
    return isPalindrome(str.substr(1, str.length - 2));
}

// Test cases
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("")); // Output: true

//Activity 4
//Task 7
console.log(`<--------------- Task 7 --------------->`);

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1;
    }
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, high);
}

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([10, 20, 30, 40, 50], 25)); // Output: -1
console.log(binarySearch([], 3)); // Output: -1
//Task 8
console.log(`<--------------- Task 8 --------------->`);

function countOccurrences(arr, target, n = arr.length) {
    if (n <= 0) {
        return 0;
    }
    return (arr[n - 1] === target ? 1 : 0) + countOccurrences(arr, target, n - 1);
}

// Test cases
console.log(countOccurrences([1, 2, 3, 4, 5, 3], 3)); // Output: 2
console.log(countOccurrences([10, 20, 30, 10, 10], 10)); // Output: 3
console.log(countOccurrences([], 3)); // Output: 0

//Activity 5
//Task 9
console.log(`<--------------- Task 9 --------------->`);
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root); // Output: 4 2 5 1 3
//Task 10
console.log(`<--------------- Task 10 --------------->`);

function treeDepth(node) {
    if (node === null) {
        return 0;
    }
    const leftDepth = treeDepth(node.left);
    const rightDepth = treeDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.left.left.left = new TreeNode(6);
console.log(treeDepth(root2)); // Output: 4