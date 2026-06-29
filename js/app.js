//import { addTask } from "./taskManager.js"

let tasks = loadTasks() || []

const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById("description")
const categorySelect = document.getElementById("category")
const prioritySelect = document.getElementById("priority")
const dueDateInput = document.getElementById("dueDate")
const addTaskbtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")
const totalCount = document.getElementById("total")
const completedCount = document.getElementById("completed")
const pendingCount = document.getElementById("pending")



renderTasks(tasks)
addTaskbtn.addEventListener("click", () => {
    if(editingTaskId===null){
        addTask()
    }
    else{
        updateTask()
    }
})