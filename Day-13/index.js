import { addition, person, subtract, multiply, getData, task6 } from "./modules.js";
import { helloaniket, hellonaman, firstfrend, secondfrend } from './modules1.js'
import greet from "./modules.js";
console.log(`<-------------- Task 1--------------->`)
console.log(addition(10, 20))
console.log(`<-------------- Task 2--------------->`)
console.log(person.name);
console.log(`<-------------- Task 3--------------->`)
console.log(subtract(10, 20))
console.log(multiply(10, 20))
console.log(`<-------------- Task 4--------------->`)
console.log(greet("Pushpendra"));
console.log(`<-------------- Task 5--------------->`)
console.log(helloaniket("Aniket"));
console.log(hellonaman("Naman"));
console.log(firstfrend);
console.log(secondfrend);
console.log(`<-------------- Task 6--------------->`)
console.log(task6())
console.log(`<-------------- Task 7--------------->`)
getData().then(data => console.log(data))