//JS code
const tasks=["Meditate for 10 minutes",
    "Buy groceries",
    "Finish report",
    "Project submission",
    "watch prev lecture",
    "write practical"
];
function loadTasks(){
    localStorage.setItem('alltasks',JSON.stringify(tasks));
    const div =document.getElementById("div");
    div.innerHTML="";
    for(const task of tasks){
        div.innerHTML += `<div class="do-item> ${task}  <button class="delbtn" type = "button" onclick = "deleteTask('${task}')"> Delete </button> </div>`;
    }
}
loadTasks();
