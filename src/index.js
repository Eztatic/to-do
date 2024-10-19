import { isAfter, parseISO, format } from 'date-fns';
import { createNewTask, getTask, editTask, deleteTask } from "./task.js";
import { createProject, getProject, editProject, deleteProject, projectLength} from "./project.js"
import './style.css';

//FOR TEST
// const testProject = createProject("Project X");

function setupDialog(openBtnSelector, dialogSelector, closeBtnSelector) {
    const dialog = document.querySelector(dialogSelector);
    const openBtn = document.querySelector(openBtnSelector);
    const closeBtn = dialog.querySelector(closeBtnSelector);
    const form = dialog.querySelector('form'); 

    if (openBtn && dialog && closeBtn) {
        openBtn.addEventListener("click", () => {
            dialog.showModal();
            if (form) {
                form.reset();
            }
        });
  
        closeBtn.addEventListener("click", () => {
            dialog.close();
            if (form) {
                form.reset();
            }
        });
    }
}
setupDialog('#create-project-btn', '#project-dialog', 'button#cancel-btn');
setupDialog('#add-task-btn', '#task-dialog', 'button#cancel-btn');

const getTaskInputs = (dialog) => {
    let taskName = document.querySelector(`#${dialog}-dialog #input-task-name`).value;
    let taskDescription = document.querySelector(`#${dialog}-dialog #input-description`).value;
    let date = document.querySelector(`#${dialog}-dialog input#input-deadline`).value;
    let taskPriority = document.querySelector(`#${dialog}-dialog input[name="importance"]:checked`).value;
    let formattedDate = undefined;
    let status = undefined;

    if (!taskName || !taskDescription) {
        alert("Task Name and Description must be filled out");
        return false;
    }

    if(date){
        formattedDate = format(date, 'MM-dd-yyyy HH:mm a');
        const parsedDate = parseISO(date);
        const today = new Date();
        const checkDeadline = isAfter(today, parsedDate);
        if(checkDeadline) {
            status = "Late";
        } else {
            status = "In Progress";
        } 
    } else {
        formattedDate = "No Date Set";
        status = "In Progress";
    }
    
    return [taskName, taskDescription, formattedDate, taskPriority, status];
}

const priorityColor = (taskPriority, taskName) => {
    const taskHead = taskName.parentElement;
    if(taskPriority.innerText == "Marginal") {
        taskPriority.style.color = "#1cd131";
        taskHead.style.backgroundColor = "#1cd131";
    } else if (taskPriority.innerText == "Moderate") {
        taskPriority.style.color = "#FFC000";
        taskHead.style.backgroundColor = "#FFC000";
    } else if (taskPriority.innerText == "Critical") {
        taskPriority.style.color = "#ff3030";
        taskHead.style.backgroundColor = "#ff3030";
    }        
}

//Construct New Task
const newTask = (name, description, formattedDate, priority, status) => {
    const taskList = document.querySelector(".task-list");
    const taskContainer = document.createElement("div");
    const taskHead = document.createElement("div");
    const taskName = document.createElement("p");
    const dateLabel = document.createElement("p");
    const date = document.createElement("span");
    const taskBody = document.createElement("div");
    const descriptionLabel = document.createElement("p");
    const taskPriority = document.createElement("p");
    const taskDescription = document.createElement("p");
    const statusLabel = document.createElement("p");
    const taskStatus = document.createElement("span");
    const iconContainer = document.createElement("div");
    const editBtn = document.createElement("span");
    const deleteBtn = document.createElement("span");
    const dropBtn = document.createElement('button');

    taskContainer.classList.add("task-container");
    taskHead.classList.add("task-head");
    taskName.classList.add("task-name");
    date.classList.add("due-date");
    taskBody.classList.add("task-body");
    taskPriority.classList.add("priority");
    taskDescription.classList.add("description");
    taskStatus.classList.add("status");
    dropBtn.classList.add("dropdown-btn");
    iconContainer.classList.add("icons");
    editBtn.classList.add("edit");
    editBtn.classList.add("material-symbols-outlined");
    deleteBtn.classList.add("delete");
    deleteBtn.classList.add("material-symbols-outlined");
    
    taskName.innerText = name;
    dateLabel.innerText = "Due:  ";
    date.innerText = formattedDate;
    descriptionLabel.innerText = "Description";
    taskPriority.innerText = priority;
    taskDescription.innerText = description;
    statusLabel.innerText = "Status:  ";
    taskStatus.innerText = status;
    editBtn.innerText = "edit";
    deleteBtn.innerText = "delete";
    dropBtn.textContent = "▼";

    taskHead.appendChild(taskName);
    taskHead.appendChild(dateLabel);
    dateLabel.appendChild(date);
    taskBody.appendChild(descriptionLabel);
    taskBody.appendChild(taskPriority);
    taskBody.appendChild(taskDescription);
    taskBody.appendChild(iconContainer);
    iconContainer.appendChild(editBtn);
    iconContainer.appendChild(deleteBtn);
    taskBody.appendChild(statusLabel);
    statusLabel.appendChild(taskStatus);
    taskContainer.appendChild(taskHead);
    taskContainer.appendChild(taskBody);
    taskContainer.appendChild(dropBtn);

    priorityColor(taskPriority, taskName);

    dropBtn.addEventListener('click', () => {
        if (!taskBody) return;
    
        if (taskBody.style.display === "none" || !taskBody.style.display) {
            taskBody.style.display = "grid";
            dropBtn.textContent = "▲"; 
        } else {
            taskBody.style.display = "none";
            dropBtn.textContent = "▼"; 
        }
    });

    taskName.addEventListener("click", function() {
        let taskName = this.closest(".task-container").querySelector(".task-name").innerText;
        let taskDescription = this.closest(".task-container").querySelector(".description").innerText;
        let status = this.parentElement.parentElement.querySelector(".status");
        this.classList.toggle("checked");
        if(this.classList.contains("checked")) {
            status.innerText = "Completed";
        } else {
            status.innerText = "In Progress";   
        }
        editTask(getProject(projectTitle()), taskName, taskDescription, status.innerText);
    });

    editBtn.addEventListener("click", function() {
        const editDialog = document.querySelector('#edit-dialog');

        // Selected Task Nodes
        const taskName = this.closest(".task-container").querySelector(".task-name");
        const taskDescription = this.closest(".task-container").querySelector(".description");
        const taskDate = this.closest(".task-container").querySelector(".due-date");
        const priority = this.closest(".task-container").querySelector(".priority");

        // Store Task Nodes and Data Temporarily
        let oldTempData = getTask(getProject(projectTitle()), taskName.innerText, taskDescription.innerText);
        let taskComp = [taskName, taskDescription, taskDate, priority];

        // Get Edit Task Input Nodes
        let getTaskName = document.querySelector('#edit-dialog #input-task-name')
        let getTaskDescription = document.querySelector('#edit-dialog #input-description');
        let getTaskDate = document.querySelector('#edit-dialog .current-date');
        let getTaskPriority = document.querySelectorAll('#edit-dialog input[name="importance"]');

        // Replace Old Task Values
        getTaskName.value = taskName.innerText;
        getTaskDescription.value = taskDescription.innerText;
        getTaskDate.innerText = taskDate.innerText;
        for (let currentTaskPriority of getTaskPriority) {
            if(priority.innerText == currentTaskPriority.value) {
                currentTaskPriority.setAttribute("checked", "checked");
                break;
            }
        }

        // Invoke Changes
        const save = document.querySelector("#edit-dialog button#save-btn");
        save.addEventListener("click", () => {
            if(getTaskInputs('edit') == false) {
                return;
            }

            editTask(getProject(projectTitle()), oldTempData['title'], oldTempData['description'], ...getTaskInputs('edit'));
            for(let i = 0; i <= 3; i++) {
                taskComp[i].innerText = getTaskInputs('edit')[i];
            }

            priorityColor(priority, taskName);
        });

        editDialog.showModal();
    });

    deleteBtn.addEventListener("click", function() {
        let taskName = this.closest(".task-container").querySelector(".task-name").innerText;
        let taskDescription = this.closest(".task-container").querySelector(".description").innerText;
        this.closest(".task-container").remove();
        deleteTask(getProject(projectTitle()), taskName, taskDescription);
    });
    
    taskList.prepend(taskContainer);
}

//Add Task to Project
const addTaskToProject = document.querySelector("#task-dialog button#submit-btn");
addTaskToProject.addEventListener("click", () => {
    if(getTaskInputs('task') == false) {
        return;
    }
    getProject(projectTitle()).toDoList.push(createNewTask(...getTaskInputs('task')));
    newTask(...Object.values(getProject(projectTitle()).toDoList.at(-1)));
});


//Load task
const loadTasks = () => {
    const taskList = getProject(projectTitle()).toDoList;
    if(taskList.length == 0) {
        console.log("empty");
    } else {
        taskList.forEach((task) => {
            newTask(...Object.values(task));
        })
    }

}

//UI: PROJECT
const constructProject = (title = "Project X") => {
    createProject(title);
}

const projectTitle = () => {
    const projectTitle = document.querySelector("#project-name").innerText;
    return projectTitle;
}

const newProject = (title = "Project X") => {
    const projectTitle = document.querySelector("#project-name");
    const projContainer = document.querySelector('.project-list');
    const project = document.createElement('li');
    const taskList = document.querySelector(".task-list");

    project.innerText = title;  
    projContainer.appendChild(project);

    project.addEventListener('click', () => {
        switchProject(projectTitle, title, taskList);
    });
} 

const addProjectToList = document.querySelector('#create');
addProjectToList.addEventListener('click', () => {
    const projectName = document.querySelector('#input-project-name').value;
    const projectTitle = document.querySelector("#project-name");
    const taskList = document.querySelector(".task-list");
    if (!projectName) {
        alert("Project name must be filled out");
        return false;
    } else {
        createProject(projectName);
        newProject(projectName);
        switchProject(projectTitle, projectName, taskList);
    }
});

const switchProject = (projectTitle, newTitle, taskList) => {
    const tasks = document.querySelectorAll(".task-container");
    projectTitle.innerText = newTitle;
    tasks.forEach(task => {
        taskList.removeChild(task);
    })
    loadTasks();
}

//Default
window.onload = function() {
    if(projectLength() == 0) {
        const defaultTask = ["Task Title", "Sample Description", "No Date Set", "Marginal", "In progress"];
        constructProject();
        newProject();
        getProject("Project X").toDoList.push(createNewTask(...defaultTask));
        newTask(...Object.values(getProject("Project X").toDoList.at(-1)));
    }
}














   












