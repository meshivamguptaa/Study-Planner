

function addTask(){
    if(titleInput.value=="".trim()){
        alert("Title is required")
        return
    }
    const task={
        id: Date.now(),
        title: titleInput.value,
        description: descriptionInput.value,
        category: categorySelect.value,
        priority: prioritySelect.value,
        dueDate: dueDateInput.value,
        completed: false
    }
    tasks.push(task)
    saveTasks()
    renderTasks()
    titleInput.value=""
    descriptionInput.value=""
    console.log(task)
}

function renderTasks(){
    taskList.innerHTML = ""

    if(tasks.length===0){
    taskList.textContent = "No tasks yet. Add you first task."
}

    tasks.forEach((tsk) => {

        let status
        if(tsk.completed){
            status = "✅ Completed"

        }
        else{
            status = status = "❌ Pending"
        }

        const li = document.createElement("li")
        li.innerHTML = `Title: ${tsk.title} <br>
         Category: ${tsk.category}<br>
         Priority: ${tsk.priority}<br>
         DueDate:  ${tsk.dueDate}<br>
         Status:   ${status}`

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit Task"

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete Task"

        const toggleBtn = document.createElement("button")
        if(tsk.completed){
            toggleBtn.textContent = "Mark Pending"
        } else{
            toggleBtn.textContent = "Mark Complete"

        }

        toggleBtn.addEventListener("click", () => {
            toggleComplete(tsk.id)
        })

        deleteBtn.addEventListener("click", () => {
            deleteTask(tsk.id)
        })

        li.appendChild(editBtn)
        li.appendChild(deleteBtn)
        li.appendChild(toggleBtn)
        taskList.appendChild(li)


    })
}

function deleteTask(id){
    tasks = tasks.filter(task=>task.id !== id)
    saveTasks()

    renderTasks()
}
function toggleComplete(id){
    const task = tasks.find(task => task.id === id)
    task.completed = !task.completed

    saveTasks()

    renderTasks()
}
