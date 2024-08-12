//JS code
const tasks=[];

function loadFromLocalStorage(){
    const allTasks = JSON.parse(localStorage.getItem("allTasks"));

    if(allTasks){
        tasks.push(...allTasks);
    }

    loadTasks();
}
loadFromLocalStorage();

function loadTasks(){
    localStorage.setItem("alltasks",JSON.stringify(tasks));

    const tasksContainer =document.getElementById("div");
    tasksContainer.innerHTML="";
    for (const task of tasks) {
        tasksContainer.innerHTML += `
      <div class="todo-item">
        ${task}
        <button class="btn-del" type="button" onclick="deleteTask('${task}')">
          Delete
        </button>
      </div>
      `;
      }
    }

function deleteTask(task)
{
    const index = tasks.indexOf(task);
    tasks.splice(index,1);

    loadTasks();
}

function add(){
    const addtask =document.getElementById("addtask");
    const addedtask = addtask.value;
    
    if(!addedtask){
        alert("Please enter a task");
        return;
    }
    
        tasks.unshift(addedtask);
        loadTasks();

        addtask.value ="";
    }