//Activity 1
//Task 1
const para = document.getElementById("first-text");
para.innerText = "Hello Aniket How are you ";
//Task 2
const para1 = document.getElementsByClassName("js-challenge");

function changeColor() {
    for (let i = 0; i < para1.length; i++) {
        para1[i].style.backgroundColor = "green";
    }
}

//Activity 2
//Task 3
let h2 = document.createElement("h2");
h2.appendChild(document.createTextNode("This heading number 2"));
document.body.appendChild(h2);
//Task 4
let li = document.createElement("li");
li.appendChild(document.createTextNode("Lokendra"));
document.getElementById("friend").appendChild(li);

//Activity 3
//Task 5
document.getElementById("remove").remove();
//Task 6
document.getElementById("friend").lastChild.remove();

//Activity 4
//Task 7
const img1 = document.getElementById("img1");
img1.getAttribute("src");
img1.setAttribute("src", "image.png");
//Task 8
const addcss = document.getElementById("add");
addcss.classList.add("heading4");
addcss.classList.remove("heading4");

//Activity 5
//Task 9
document.getElementById("change").addEventListener("click", () => {
    const changepara = document.getElementById("change-para");
    changepara.innerText = "Helo my name is Aniket Patidar and my age is 22";
});

document.getElementById("reset").addEventListener("click", () => {
    const changepara = document.getElementById("change-para");
    changepara.innerText = "Helo my name is Pushpendra and my age is 24";
});
//Task 10
const border = document.getElementById("border");
border.addEventListener("mouseover", () => {
    border.style.borderColor = "red";
});
border.addEventListener("mouseout", () => {
    border.style.borderColor = "";
});