//Activity 1
//Task 1
console.log(`<--------------------Task 1-------------------->`);
const name = "Pushpendra Kumar Ahirwar";
const age = 24;
console.log(`My name is ${name} and my age is ${age}`);
//Task 2
console.log(`<--------------------Task 2-------------------->`);
console.log(`Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.`);

//Activity 2
//Task 3
console.log(`<--------------------Task 3-------------------->`);
let FriendList = ["Aniket", "Lokendra", "Naman", "Akshat", "Risharth"];
let bestFriend = ([First, Second] = FriendList);
console.log(First, Second);
//Task 4
console.log(`<--------------------Task 4-------------------->`);
let book = {
    title: "The Family Man",
    author: "Mrunal Thakur",
    ReleaseYear: 2023,
};
let { title, author } = book;
console.log(`Title is: ${title} and author is: ${author}`);

//Activity 3
//Task 5
console.log(`<--------------------Task 5-------------------->`);
let collegeFriend = ["Aniket", "Lokendra", "Naman", "Akshat", "Risharth"];
let CLGaurCCGFriend = [...collegeFriend, "Raksha", "Ekta", "Nikhil", "Jayesh"];
console.log("College and Coaching Friends are :-", CLGaurCCGFriend);
//Task 6
console.log(`<--------------------Task 6-------------------->`);

function sum(...numbers) {
    return numbers.reduce((total, numbers) => total + numbers, 0);
}
console.log(sum(2, 5, 6, 7, 4)); //Outpur is 24
console.log(sum(2, 5, 6, 7, 4, 30)); //Outpur is 54

//Activiy 4
//Task 7
console.log(`<--------------------Task 7-------------------->`);

function multiply(num1, num2 = 1) {
    return num1 * num2;
}
console.log(multiply(20, 2)); //Output 40
console.log(multiply(20)); // Output 20

//Activity 5
//Task 8
console.log(`<--------------------Task 8-------------------->`);
const friendName = "Aniket";
const friendAge = 22;
const friendDetail = {
    friendName,
    friendAge,
    Greeting() {
        return `Hello ${friendName} Good Morning your age is ${friendAge}`;
    },
};
console.log(friendDetail.Greeting());
//Task 9
console.log(`<--------------------Task 9-------------------->`);
const moviename = "Kalki";
const actor = "Prabhas";
const moviedetail = {
    [moviename]: "Bahubali",
    [actor]: "Tamannah",
    details() {
        return `Movies name is ${this[moviename]} and actor is ${this[actor]}`;
    },
};
console.log(moviedetail.details());