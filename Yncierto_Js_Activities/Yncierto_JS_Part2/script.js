const taskButton = document.getElementById("btnTask");
const taskInput = document.getElementById("toDo");
const tasks = document.getElementById("list");

let taskList = [];

taskButton.addEventListener("click",() =>{
    const todoitem = taskInput.value;
    taskList.push(todoitem);
    update();
    taskInput.value = "";
});

function update(){
    let listItem = "";
    for(let i=0; i<taskList.length; i++){
        listItem += "<li>" + taskList[i] +"</li>";
    }
    tasks.innerHTML = listItem;
};
    //const taskInput = document.getElementById("toDo");
    //const tasks = document.getElementById("list");
    //const newTask = document.createElement("li");
    //newTask.textContent = taskInput.value; 
    //tasks.appendChild(newTask);
    //taskInput.value = "";