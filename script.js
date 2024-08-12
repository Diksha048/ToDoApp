//JS code
const tasks=[];

function loadTasks(){
    localStorage.setItem('alltasks',JSON.stringify(tasks));
    const div =document.getElementById("div");
    div.innerHTML="";
    for(const task of tasks){
        div.innerHTML += `<div class="do-item> ${task}  <button class="delbtn" type = "button" onclick = "deleteTask('${task}')"> Delete </button> </div>`;
    }
}

loadTasks();

function deleteTask(task)
{
    const index = tasks.indexOf(task);
    tasks.splice(index,1);

    loadTasks();
}

function add(){
    const addtask =document.getElementById(addtask);
    const addedtask = addtask.value;
    
    if(!addedtask){
        alert("Please enter a task");
        return;
    }
    
        tasks.unshift(addedtask);
        loadTasks();

        addtask.value ="";
    }