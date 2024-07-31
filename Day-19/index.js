//Activity 1
//Task 1
console.log(`<-------------- Task 1 ------------->`)
const str1 = "JavaScript is a popular language. JavaScript is used for web development.";
const regex1 = /JavaScript/g;
const matches1 = str1.match(regex1);
console.log(matches1);
//Task 2
console.log(`<-------------- Task 2 ------------->`)
const str2 = "There are 123 apples and 456 oranges.";
const regex2 = /\d+/g;
const matches2 = str2.match(regex2);
console.log(matches2);

//Activity 2
//Task 3
console.log(`<-------------- Task 3 ------------->`)
const str3 = "The Quick Brown Fox Jumps Over The Lazy Dog.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches3 = str3.match(regex3);
console.log(matches3);
//Task 4
console.log(`<-------------- Task 4 ------------->`)
const str4 = "My phone number is 1234567890 and my zip code is 12345.";
const regex4 = /\d+/g;
const matches4 = str4.match(regex4);
console.log(matches4);

//Activity 3
//Task 5
console.log(`<-------------- Task 5 ------------->`)
const str5 = "(123) 456-7890";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches5 = str5.match(regex5);
console.log(matches5);
//Task 6
console.log(`<-------------- Task 6 ------------->`)
const str6 = "user@example.com";
const regex6 = /(\w+)@(\w+\.\w+)/;
const matches6 = str6.match(regex6);
console.log(matches6);

//Activity 4
//Task 7
console.log(`<-------------- Task 7 ------------->`)
const str7 = "Hello world!";
const regex7 = /^\w+/;
const matches7 = str7.match(regex7);
console.log(matches7);
//Task 8
console.log(`<-------------- Task 8 ------------->`)
const str8 = "Welcome to the world";
const regex8 = /\w+$/;
const matches8 = str8.match(regex8);
console.log(matches8);

//Activity 5
//Task 9
console.log(`<-------------- Task 9 ------------->`)
const password = "Passw0rd!";
const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isValidPassword = regex9.test(password);
console.log(isValidPassword);
//Task 10
console.log(`<-------------- Task 10 ------------->`)
const url = "https://www.example.com";
const regex10 = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+)(\.[a-zA-Z]{2,})([\/\w \.-]*)*\/?$/;
const isValidURL = regex10.test(url);
console.log(isValidURL);