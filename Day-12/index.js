//Activity 1
//Task 1
console.log(`<--------------Task 1-------------->`);

function addition(num) {
    try {
        if (num > 20) {
            return num;
        } else {
            return "Number is not greater than 20";
        }
    } catch (error) {
        console.log("Error", error);
        return "An error occurred";
    }
}
console.log(addition(12));
console.log(addition(25));
//Task 2
console.log(`<--------------Task 2-------------->`);

function divistion(num, divider) {
    try {
        if (divider == 0) {
            throw new Error("Divider cannot be", divider); //this will be throw error
        } else {
            let result = num / divider;
            return result;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}
console.log(divistion(40, 10));
console.log(divistion(40, 0));

//Activity 2
//Task 3
console.log(`<--------------Task 3-------------->`);

function checkstring(name) {
    try {
        if (typeof name == "string") {
            return name;
        } else {
            throw new Error("Argument should be string");
        }
    } catch (error) {
        console.log(error);
        return null;
    } finally {
        console.log("Sucsessfull");
    }
}
console.log(checkstring("Pushpendra"));
console.log(checkstring(10)); // This will be throw error beacuase arguments is the numbers
//Activity 3
//Task 4
console.log(`<--------------Task 4-------------->`);
class CError extends Error {
    constructor(msg) {
        super(msg);
        this.error = "Error from classs";
    }
}

function CustomError() {
    try {
        throw new CError("This Error from custom error");
    } catch (error) {
        if (error instanceof CError) {
            console.log("Custom Error", error.message);
        } else {
            console.log("Catch block error", error.message);
        }
    } finally {
        console.log("This output from the finally block");
    }
}
CustomError();
//Task 5
console.log(`<--------------Task 5-------------->`);
class InputValidate extends Error {
    constructor(msg) {
        super(msg);
        this.error = "Class custom Error";
    }
}

function checkInput(input) {
    if (typeof input !== "string" || input.trim() === "") {
        throw new InputValidate("Input Cannot be empty and should be string");
    }
    return input;
}

function handleInput(Input) {
    try {
        const validatingInput = checkInput(Input);
        console.log(validatingInput);
    } catch (error) {
        if (error instanceof InputValidate) {
            console.log("Class Error", error.message);
        } else {
            console.log("Normal Error", error.message);
        }
    } finally {
        console.log("finally block excuted");
    }
}
handleInput("pushpendra");
handleInput(""); // This will give error because of blank string

//Activity 4
//Task 6
console.log(`<--------------Task 6-------------->`);

const randomPromise = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum >= 0.5) {
        resolve("Success: Promise resolved");
    } else {
        reject("Error: Promise rejected");
    }
});

randomPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
//Task 7
console.log(`<--------------Task 7-------------->`);
async function handlePromise() {
    try {
        const message = await randomPromise;
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}
handlePromise();

//Activity 5
//Task 8
console.log(`<--------------Task 8-------------->`);
fetch("https://jsonplaceholder.typicode.com/posts/invalid-url")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error: Failed to fetch data");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Data:", data);
    })
    .catch((error) => {
        console.error(error.message);
    });
//Task 9
console.log(`<--------------Task 9-------------->`);

async function fetchData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/invalid-url"
        );
        if (!response.ok) {
            throw new Error("Error: Failed to fetch data");
        }
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.error(error.message);
    }
}

fetchData();