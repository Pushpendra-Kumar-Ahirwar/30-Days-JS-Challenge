const number = 20;
const friendName = "Aniket";
const Istakecompleted = true;
const todoList = ["Breakfast", "Js lecture", "Lunch", "React Lecture"];
const myInfo = {
    age: 23,
    hobby: "Cricket",
};

console.log(`${number}--> ${typeof(number)}`)
console.log(`${friendName}--> ${typeof(friendName)}`)
console.log(`${Istakecompleted}--> ${typeof(Istakecompleted)}`)
console.log(`${todoList}--> ${typeof(todoList)}`)
console.log((Object.keys(myInfo).map((key) => `${key}: ${myInfo[key]}`)),
    `--> ${typeof(myInfo)}`)