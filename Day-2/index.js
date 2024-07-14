// Activiy-1: Arithmetic Operations
let num1 = 20;
let num2 = 5;
console.log(`Addition of two number is:- ${num1+num2}`);
console.log(`Subtraction of two number is:- ${num1-num2}`);
console.log(`Multiplication of two number is:- ${num1*num2}`);
console.log(`Division of two number is:- ${num1/num2}`);
console.log(`Remainder of two number is:- ${num1%num2}`);

//Activity-2: Assignment Operators
let mathMark = 77
let englishMark = 100
mathMark += 10
englishMark -= 1
console.log(`mathMark:- ${mathMark} englishMark:- ${englishMark}`)

//Activiy-3 Comparison Operators
//Task 8
let passingMark = 33
let student1Mark = 55
let student2tMark = 20
console.log(student1Mark > passingMark, ": Student Pass: ", student1Mark)
console.log(student2tMark < passingMark, " :Student Is Failed: ", student2tMark)
    //Task 9
const QualifyingMark = 40
const Aspirant1mark = 55
console.log(Aspirant1mark >= QualifyingMark, " :You Are Qualfyied :", QualifyingMark)
const RollNumber = 30
console.log(RollNumber <= 50, ":Your Examhall on 1st floor")
    //Task 10
let sessionID = 12345678
let cookieId = 12345678
let userToken = "12345678"
console.log(sessionID == cookieId, ": User Already Logged In")
console.log(sessionID === userToken, ": User can loggin") //This statement will not be print becuase of variable types

//Activity-4 Logical Operator
const passingMarks = 33;
const hindiMarks = 50;
const englishMarks = 55
const mathMarks = 5
const isStudentPass = true
console.log(hindiMarks > passingMark && englishMark > passingMark, " :Student is passed")
console.log(hindiMarks > passingMark || mathMarks > passingMark, " :Student is passed")
console.log(!isStudentPass)

//Activity-5 Ternary Operator
const RoomNumber = 39
const check = RollNumber > 0 ? "Possitive" : "Negative"
console.log(check);