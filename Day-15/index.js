//Activity 1
//Task 1
function outer() {
    let myname = "Testing";

    function inner() {
        return myname;
    }
    return inner;
}
const infun = outer();
console.log(`<--------------- Task 1 -------------->`);
console.log(infun());
//Task 2
console.log(`<--------------- Task 2 -------------->`);

function outer1() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        getValue: function() {
            return count;
        },
    };
}
const mycounter = outer1();
mycounter.increment();
mycounter.increment();
console.log(`Counter Value :- ${mycounter.getValue()}`);

//Activity 2
//Task 3
console.log(`<--------------- Task 3 -------------->`);

function uiId() {
    let id = 0;

    function generateId() {
        id++;
        return id;
    }
    return generateId;
}
const uniqueId = uiId();
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
//Task 4
console.log(`<--------------- Task 4 -------------->`);

function Myname(name) {
    return function() {
        return `Your name is ${name}`;
    };
}
const username = Myname("Pushpendra");
console.log(username());

//Activity 3
//Task 5
console.log(`<--------------- Task 5 -------------->`);
const functions = [];
for (let i = 0; i < 6; i++) {
    functions.push(
        (function(index) {
            return function() {
                console.log(index);
            };
        })(i)
    );
}
functions[0]();
functions[1]();
functions[2]();
functions[3]();
functions[4]();
functions[5]();

//Activity 4
//Task 6
console.log(`<--------------- Task 6 -------------->`);

function FriendList() {
    let friends = [];
    return {
        addFriends: function(friend) {
            friends.push(friend);
        },
        removeFriend: function(friend) {
            const index = friends.indexOf(friend);
            if (index !== -1) {
                friends.splice(index, 1);
            }
        },
        listFriend: function() {
            return friends.slice();
        },
    };
}
const CreateFriend = FriendList();
CreateFriend.addFriends("Aniket");
CreateFriend.addFriends("Naman");
CreateFriend.addFriends("Lokendra");
console.log(CreateFriend.listFriend());
CreateFriend.removeFriend("Aniket");
console.log(CreateFriend.listFriend());

//Activity 5
// Task 7 And 8
console.log(`<--------------- Task 7 & 8 -------------->`);

function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(5));