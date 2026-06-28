function saveTasks(){
    localStorage.setItem("studyPlannerTasks",
         JSON.stringify(tasks))
}

function loadTasks(){
    return JSON.parse(
        localStorage.getItem("studyPlannerTasks"))
    
}