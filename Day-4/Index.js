//Activity-1
//Task-1
console.log("<---------Task 1 ------------>");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//Task-2
console.log("<---------Task 2 ------------>");
const number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

//Activity-2
//Task-3
console.log("<---------Task 3 ------------>");
let sum = 0;
let iteration = 1;
while (iteration <= 10) {
    sum = sum + iteration;
    iteration++;
}
console.log(`Total sum of from number 1-10 is: ${sum}`);

//Task-4
console.log("<---------Task 4 ------------>");
let iteration1 = 10;
while (iteration1 >= 1) {
    console.log(iteration1);
    iteration1--;
}

//Activity-3
//Task-5
console.log("<---------Task 5 ------------>");
let iteration2 = 1;
do {
    console.log(iteration2);
    iteration2++;
} while (iteration2 <= 5);

//Task-6
console.log("<---------Task 6 ------------>");
let factorial = 1;
const num = 5;
let iteration3 = 1;
do {
    factorial = factorial * iteration3;
    iteration3++;
} while (iteration3 <= num);
console.log(`Factorial of ${num} is = ${factorial}`);

//Activity -4
//Task 7
console.log("<---------Task 7 ------------>");
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}

//Activity-5
//Task 8
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

//Task 9
for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}