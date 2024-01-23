const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
//if the input box is empty then it will show th alert msgs
    if(inputBox.value === ''){
        alert("You must right something!");
    }
    else{
        let li = document.createElement("li");// in this line it is creating 1 html element with the tag name li document.create elenet li and it it storing this eelement inside thi li variable
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();