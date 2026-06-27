

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
    renderTasks()
    titleInput.value=""
    descriptionInput.value=""
    console.log(task)
}

function renderTasks(){
    taskList.innerHTML = ""

    tasks.forEach((tsk) => {
        const li = document.createElement("li")
        li.innerHTML = `Title: ${tsk.title} <br>
         Category: ${tsk.category}<br>
         Priority: ${tsk.priority}<br>
         DueDate: ${tsk.dueDate}<br>
         Status: ${tsk.completed}`

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit Task"

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete Task"

        li.appendChild(editBtn)
        li.appendChild(deleteBtn)
        taskList.appendChild(li)


    })
}
