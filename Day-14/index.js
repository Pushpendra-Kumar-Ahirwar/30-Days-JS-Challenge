//Activity 1
//Task 1 And Task 2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        return `Hi Everyone my name is ${this.name} and my age is ${this.age}`;
    }
    updateAge(updateAge) {
        this.age = updateAge;
        return `Update is age ${this.age}`;
    }
}
const person = new Person("Pushpendra Kumar Ahirwar", 20);
console.log(`<---------------Task 1-------------->`);
console.log(person.greeting());
console.log(`<---------------Task 2-------------->`);
console.log(person.updateAge(22));

//Activity 2
//Task 3 And Task 4
class Students extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    StId() {
        return `Student Id is ${this.studentId}`;
    }
    greeting() {
        return `${super.greeting()} My Student id is ${this.studentId}`;
    }
}
const student = new Students("Aniket", 23, 10);
console.log(`<---------------Task 3-------------->`);
console.log(student.StId());
console.log(`<---------------Task 4-------------->`);
console.log(student.greeting());

//Activity 3
//Task 5
class Person2 {
    static greet() {
        return `This the greeeting message from static method`;
    }
}
console.log(`<---------------Task 5-------------->`);
console.log(Person2.greet());

//Task 6
class Student2 {
    static count = 0;
    constructor(stuId) {
        this.stuId = stuId;
        Student2.count++;
        console.log(`Total student is ${Student2.count}`);
    }
}
console.log(`<---------------Task 6-------------->`);
const st = new Student2(22);
console.log(st.stuId);
const st2 = new Student2(32);
console.log(st.stuId);
const st3 = new Student2(35);
console.log(st.stuId);

//Activity 4
//Task 7 And Task 8
class Person3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullname() {
        return `Full Name is ${this.firstName} ${this.lastName}`;
    }
    set fullname(name) {
        const [firstName, secondName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = secondName;
    }
}
const person3 = new Person3("Lokendra", "Pandey");
console.log(`<---------------Task 7-------------->`);
console.log(`Name before setter method : ${person3.fullname}`);
console.log(`<---------------Task 8-------------->`);
person3.fullname = "Aniket Patidar";
console.log(`Name afer setter method : ${person3.fullname}`);

//Activity  5
//Task 9 And Task 10
class Account {
    balance;
    constructor(initialAmount = 0) {
        this.balance = initialAmount;
    }
    deposite(amount) {
        if (amount <= 0) {
            return `{${amount}} Deposite ammount should be positive number`;
        } else {
            let result = this.balance + amount;
            this.balance = result;
            return `After Deposite ${amount} Current Balance is = ${result}`;
        }
    }
    widhraw(amount) {
        if (amount < 0) {
            return `{${amount}} Ammout should be Positive Number`;
        }
        if (amount > this.balance) {
            return `{${amount}} Insufficient Balanace for widhrwal, Current Balance is ${this.balance}`;
        } else {
            let result;
            result = this.balance - amount;
            this.balance = result;
            return `After Widraw ${amount} Current Balance is = ${result}`;
        }
    }
}
const account = new Account(50);
console.log(`<---------------Task 9 and Task 10-------------->`);
console.log(`Initial Balance ${account.balance}`); // Output is:--> 50
console.log(account.deposite(10)); // Output is:--> 60
console.log(account.deposite(5000)); // Output is:--> 5060
console.log(account.widhraw(40000)); // Output is:--> Insufficient Ammount
console.log(account.deposite(-500)); // Output is:--> Ammount should be positive
console.log(account.widhraw(-5560)); // Output is:--> Ammount should be positive number
console.log(account.deposite(500)); // Output is:-->  5560
console.log(account.widhraw(5400)); // Output is:--> 160