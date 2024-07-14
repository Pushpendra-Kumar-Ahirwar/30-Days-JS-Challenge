function performArithmetic(num1, num2) {
    const operators = ["+", "-", "*", "/", "%"];
    const operations = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => a / b,
        (a, b) => a % b,
    ];

    operators.map((operator, i) => {
        const result = operations[i](num1, num2);
        console.log(`${num1} ${operator} ${num2} = ${result}`);
    });
}
console.log("Feature 1");
performArithmetic(10, 5);

function compareTwoNumber(number1, number2) {
    const comparationOp = [">", "<", ">=", "<=", "==", "==="];
    const compare = [
        (a, b) => a > b,
        (a, b) => a < b,
        (a, b) => a >= b,
        (a, b) => a <= b,
        (a, b) => a == b,
        (a, b) => a == b,
    ];

    comparationOp.map((oprant, index) => {
        let result = compare[index](number1, number2);
        console.log(`${number1} ${oprant} ${number2} = ${result}`);
    });
}
console.log("Feature 2");
compareTwoNumber(20, 10);

console.log("Feature 3");
let number = -50;
let ternaryResult = number > 0 ? "Positive" : "Negative";
console.log(`The number ${number} is ${ternaryResult}`);