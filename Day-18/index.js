//Activity 1
//Task 1
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort(array1));
//Task 2
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap arr[i] and arr[minIdx]
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let array2 = [64, 25, 12, 22, 11];
console.log("Selection Sort:", selectionSort(array2));

//Task 3
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter((x) => x < pivot);
    let right = arr.filter((x) => x > pivot);
    return [...quicksort(left), pivot, ...quicksort(right)];
}

let array3 = [10, 7, 8, 9, 1, 5];
console.log("Quicksort:", quicksort(array3));

//Activity 2
//Task4
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let array4 = [2, 3, 4, 10, 40];
let target1 = 10;
console.log("Linear Search:", linearSearch(array4, target1));
//Task 5
function binarySearch(arr, target) {
    let left = 0,
        right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let array5 = [2, 3, 4, 10, 40];
let target2 = 10;
console.log("Binary Search:", binarySearch(array5, target2));

//Activity 3
//Task 6
function countOccurrences(str) {
    let counts = {};
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}
let str1 = "hello world";
console.log("Character Occurrences:", countOccurrences(str1));

//Task 7
function longestSubstring(s) {
    let n = s.length;
    let set = new Set();
    let maxLength = 0,
        i = 0,
        j = 0;
    while (i < n && j < n) {
        if (!set.has(s[j])) {
            set.add(s[j++]);
            maxLength = Math.max(maxLength, j - i);
        } else {
            set.delete(s[i++]);
        }
    }
    return maxLength;
}

let str2 = "abcabcbb";
console.log("Longest Substring Length:", longestSubstring(str2));

//Activity 4
//Task 8
function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(k), ...arr.slice(0, k)];
}

let array6 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Rotated Array:", rotateArray(array6, k));


//Task 9
function mergeSortedArrays(arr1, arr2) {
    let merged = [],
        i = 0,
        j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }
    while (i < arr1.length) {
        merged.push(arr1[i++]);
    }
    while (j < arr2.length) {
        merged.push(arr2[j++]);
    }
    return merged;
}

let array7 = [1, 3, 5];
let array8 = [2, 4, 6];
console.log("Merged Array:", mergeSortedArrays(array7, array8));

//Activity 5
//Task 10
function fibonacci(n) {
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp.slice(0, n);
}
console.log("Fibonacci Sequence:", fibonacci(10));
//Task 11
function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1)
        .fill()
        .map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w],
                    dp[i - 1][w - weights[i - 1]] + values[i - 1]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}

let values = [60, 100, 120];
let weights = [10, 20, 30];
let capacity = 50;
console.log("Knapsack Maximum Value:", knapsack(values, weights, capacity));