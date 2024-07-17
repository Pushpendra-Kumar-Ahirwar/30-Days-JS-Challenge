// task 1 to check number is odd and even
function checknumber(n) {
    n % 2 == 0 ? console.log("even ") : console.log("odd");
}
checknumber(5);

// task 2 to check squar
function Sqar(num) {
    return num * num;
}
console.log(Sqar(4));
const a = Sqar(4);
console.log(a);

// task 3 to find max number
function max(a, b) {
    a > b ? console.log(`max number is ${a}`) : console.log(`max number is ${b}`);
}
max(7, 55);

// task 4 to concatenate to string
function conatenate(a, b) {
    // return  `your string is = ${a}  ${b}`;
    console.log(`your string is = ${a} + ${b}`);
}
conatenate("shivam", "pandey");

// task 5 to sum two number
const d = (s, c) => {
    return s + c;
};
console.log(d(4, 4));

// task 6 to check find string contains number
const containNumber = (str, num) => str.includes(num.toString());

console.log(containNumber("shivam4234", 4234)); // Output: true
console.log(containNumber("shivam4234", 4234)); // Output: false

// Task 7:
function product(a, b = 2) {
    return a * b;
}
console.log(product(5));

// Task 8:
function greeting(name, age = 20) {
    return `Hello ${name}, you are ${age} years old.`;
}
console.log(greeting("shivam"));

// Task 9: high order function