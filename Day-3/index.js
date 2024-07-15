//Activity 1
//Task 1
let number = 30;
if (number > 0) {
    console.log("Number is Positive: ", number);
} else if (number < 0) {
    console.log("Number is Negative: ", number);
} else {
    console.log("Number is Zerp");
}
//Task 2
const age = 21;
if (age > 18) {
    console.log("You Are Eligible for Voting: ", age);
} else {
    console.log("You Are not eligble for voting: ", age);
}

//Activiy 2
//Task 3
const num1 = 100;
const num2 = 20;
const num3 = 50;
if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater than ${num2} and ${num3}`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is greater than ${num1} and ${num3}`);
} else {
    console.log(`${num3} is greater than ${num1} and ${num2}`);
}

//Activity 3
//Task 4
let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Teusday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Day Should be between 1-7! Day:", day);
        break;
}
//Task 5
const grade = "D";
switch (grade) {
    case "A":
        console.log("You are passed with Grade: " + grade);
        break;
    case "B":
        console.log("You are passed with Grade: " + grade);
        break;
    case "C":
        console.log("You are passed with Grade: " + grade);
        break;
    case "D":
        console.log("You are passed with Grade: " + grade);
        break;
    case "E":
        console.log("You are fail: " + grade);
        break;

    default:
        console.log("Grade Should be A-E: ", grade);
        break;
}

//Activity 4
//Task 6
let num = 80;
num % 2 == 0 ?
    console.log("Number is Odd: ", num) :
    console.log("Number is Even: ", num);

//Activity 5
//Task 7
const year = 1998;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} is Leap Year`);
} else {
    console.log(`${year} is not Leap Year`);
}