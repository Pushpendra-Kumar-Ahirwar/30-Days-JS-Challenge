//Activity 1
//Task 1
const ch = document.getElementById("changetext");
ch.addEventListener("click", () => {
    document.getElementById("chtext").innerText = "You have clicked on button";
});
//Task 2
const img1 = document.getElementById("img1");
img1.addEventListener("dblclick", (e) => {
    console.log("Testing");
    if (img1.style.display == "none") {
        img1.style.display = "block";
    } else {
        img1.style.display = "none";
    }
});

//Activity 2
//Task 3
const hd = document.getElementById("heading1");
hd.addEventListener("mouseover", () => {
    hd.style.backgroundColor = "green";
});
//Task 4
hd.addEventListener("mouseout", () => {
    hd.style.backgroundColor = "";
});

//Activity 3
//Task 5
const inp1 = document.getElementById("input1");
inp1.addEventListener("keydown", (e) => {
    const result = e.key;
    console.log(`Key Pressed : ${result}`);
});
//Task 6
let dpara = document.getElementById("dispara");
const inp2 = document.getElementById("input2");
inp2.addEventListener("keyup", (e) => {
    dpara.textContent = inp2.values;
});

//Activity 4
//Task 7
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formdata = new FormData(form);
    const maindata = Object.fromEntries(formdata.entries());
    console.log(maindata);
});
//Task 8
const selectval = document.getElementById("mySelect");
const displaypara = document.getElementById("dpara");
selectval.addEventListener("change", () => {
    displaypara.textContent = selectval.value;
});

//Activity 10
//Task 9
const list = document.getElementById("myList");
const addItemButton = document.getElementById("addItem");
list.addEventListener("click", (event) => {
    if (event.target && event.target.nodeName === "LI") {
        console.log("Clicked item text:", event.target.textContent);
    }
});

//Task 10
addItemButton.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
});