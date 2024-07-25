//Activity 1
//Task 1
function addition(num1, num2) {
    return num1 + num2;
}
//Task 2
const person = {
    name: "Pushpendra",
    age: 22,
};

//Activity 2
//Task 3
function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}
//Task 4
function greet(name) {
    return `How are you ${name}`;
}
export default greet;
//Activity 4
//Task 6
import _ from "lodash";

function task6() {
    const friendsname = ["Aniket", "Risharth", "Naman"];
    const reversefname = _.reverse([...friendsname]);
    return `Original Array : ${friendsname}
Reversed Array: ${reversefname}`;
}
//Task 7
import axios from "axios";
async function getData() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}
export { addition, person, subtract, multiply, getData, task6 };