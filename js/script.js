const input = document.getElementById("context");
const btn = document.getElementById("enter-button");
const contain = document.getElementsByClassName("container")[0];
let todo = "";
const getItems = localStorage.getItem("todo");

let addElement = (val) => {
    if (val != "") {
        //Creates Element and adds the className
        const divi = document.createElement("div");
        divi.className = "item";

        //creates the para tag and adds the text
        const para = document.createElement("p");
        para.appendChild(document.createTextNode(val));

        todo += val + ","
        localStorage.setItem("todo", todo);

        //creates the button element and adds the className
        const btn = document.createElement("button");
        btn.className = "style-cross";
        btn.appendChild(document.createTextNode("x"));

        //Everything is appended
        divi.appendChild(para);
        divi.appendChild(btn);
        contain.appendChild(divi);
        input.value = "";
    }
}

//Enter button action
function addCardAfterKeyPress(event) {
    if (event.keyCode === 13) {
        addElement(input.value);
    }
}

//Enter click button
btn.addEventListener("click", function () {
    addElement(input.value);
});

input.addEventListener("keypress", addCardAfterKeyPress);

//Removes element
let divs = document.querySelector(".container");

divs.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        localStorage.setItem("todo", getItems.replace(`${e.target.previousElementSibling.textContent},`, ""));
    };
});

//loads in any previous cards
getItems.split(",").forEach(item => {
    addElement(item);
});