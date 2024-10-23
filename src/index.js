import { isAfter, parseISO, format } from 'date-fns';
import { createNewTask, getTask, editTask, deleteTask } from "./task.js";
import { createProject, getProject, editProject, deleteProject, getProjects} from "./project.js"
import './style.css';

// DIALOGS

// Setting Up Dialogs
function setupDialog(openBtnSelector, dialogSelector, closeBtnSelector) {
    // Select Dialog Elements
    const dialog = document.querySelector(dialogSelector);
    const openBtn = document.querySelector(openBtnSelector);
    const closeBtn = dialog.querySelector(closeBtnSelector);
    const form = dialog.querySelector('form'); 

    // Dialog Open and Close Functions
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

// Make Dialogs for Creating Projects and Tasks
setupDialog('#create-project-btn', '#project-dialog', 'button#cancel-btn');
setupDialog('#add-task-btn', '#task-dialog', 'button#cancel-btn');

// Get Inputs from Dialog
const getTaskInputs = (dialog) => {
    // Get Input Values from Dialogs
    let taskName = document.querySelector(`#${dialog}-dialog #input-task-name`).value;
    let taskDescription = document.querySelector(`#${dialog}-dialog #input-description`).value;
    let date = document.querySelector(`#${dialog}-dialog input#input-deadline`).value;
    let taskPriority = document.querySelector(`#${dialog}-dialog input[name="importance"]:checked`).value;
    let formattedDate = undefined;
    let status = undefined;

    // Decline Empty Values
    if (!taskName || !taskDescription) {
        alert("Task Name and Description must be filled out");
        return false;
    }

    // Change Date Format
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

// UI: TASK

// Construct New Task
const newTask = (name, description, formattedDate, priority, status) => {
    // Create Elements and Select Parent Elements
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

    // Add Class to Task Elements
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
    
    // Add Text Content in Task Elements
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

    // Add Task Component to Task Container
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

    // Expand Task Details
    dropBtn.addEventListener('click', () => {
        if (taskBody.style.display === "none" || !taskBody.style.display) {
            taskBody.style.display = "grid";
            dropBtn.textContent = "▲"; 
        } else {
            taskBody.style.display = "none";
            dropBtn.textContent = "▼"; 
        }
    });

    // Change Task Status(In progress/ Completed)
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

    // Edit This Task
    editBtn.addEventListener("click", function() {
        // Edit Task Dialog
        const editDialog = document.querySelector('#edit-dialog');
        const save = document.querySelector("#edit-dialog button#save-btn");

        // Select Task Nodes to be Changed
        const taskName = this.closest(".task-container").querySelector(".task-name");
        const taskDescription = this.closest(".task-container").querySelector(".description");
        const taskDate = this.closest(".task-container").querySelector(".due-date");
        const priority = this.closest(".task-container").querySelector(".priority");

        // Store Task Nodes and Data Temporarily
        let oldData = getTask(getProject(projectTitle()), taskName.innerText, taskDescription.innerText);
        let taskComponents = [taskName, taskDescription, taskDate, priority];

        // Get Edit Task Input Nodes
        let newTaskName = document.querySelector('#edit-dialog #input-task-name')
        let newTaskDescription = document.querySelector('#edit-dialog #input-description');
        let newTaskDate = document.querySelector('#edit-dialog .current-date');
        let newTaskPriority = document.querySelectorAll('#edit-dialog input[name="importance"]');

        // Get Current Node Values
        newTaskName.value = taskName.innerText;
        newTaskDescription.value = taskDescription.innerText;
        newTaskDate.innerText = taskDate.innerText;
        for (let currentTaskPriority of newTaskPriority) {
            if(priority.innerText == currentTaskPriority.value) {
                currentTaskPriority.setAttribute("checked", "checked");
                break;
            }
        }

        // When Saved, Edit Node and Task in Project To Do List
        save.addEventListener("click", () => {
            if(getTaskInputs('edit') == false) {
                return;
            }

            editTask(getProject(projectTitle()), oldData['title'], oldData['description'], ...getTaskInputs('edit'));
            for(let i = 0; i <= 3; i++) {
                taskComponents[i].innerText = getTaskInputs('edit')[i];
            }

            priorityColor(priority, taskName);
        });

        editDialog.showModal();
    });

    // Delete This Task
    deleteBtn.addEventListener("click", function() {
        // Get this Task's Task Name and Description
        let taskName = this.closest(".task-container").querySelector(".task-name").innerText;
        let taskDescription = this.closest(".task-container").querySelector(".description").innerText;

        // Delete Node and Remove in Project To Do List
        this.closest(".task-container").remove();
        deleteTask(getProject(projectTitle()), taskName, taskDescription);
    });
    
    taskList.prepend(taskContainer);
}

// Change Task Color Theme Based on Priority
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

// Add Task to Project
const addTaskToProject = document.querySelector("#task-dialog button#submit-btn");
addTaskToProject.addEventListener("click", () => {
    // if(!getTaskInputs('task')) {
    //     return;
    // }
    getProject(projectTitle()).toDoList.push(createNewTask(...getTaskInputs('task')));
    newTask(...Object.values(getProject(projectTitle()).toDoList.at(-1)));
});

// Load Task from Selected Project
const loadTasks = () => {
    const taskList = getProject(projectTitle()).toDoList;
    if(taskList.length === 0) {
        return;
    } else {
        taskList.forEach((task) => {
                newTask(...Object.values(task));
        });
    }
}

// UI: PROJECT

// Construct New Project
const newProject = (title = "Project X") => {
    // Create Elements and Select Parent Elements
    const projectText = document.querySelector("#project-name");
    const projContainer = document.querySelector('.project-list');
    const project = document.createElement('li');
    const projectName = document.createElement('p');
    const taskList = document.querySelector(".task-list");
    const iconContainer = document.createElement("div");
    const editBtn = document.createElement("span");
    const deleteBtn = document.createElement("span");

    // Created Elements Text Values
    projectName.innerText = title;
    editBtn.innerText = "edit";
    deleteBtn.innerText = "delete";

    // Class to Project Elements
    iconContainer.classList.add("icons");
    editBtn.classList.add("edit");
    editBtn.classList.add("material-symbols-outlined");
    deleteBtn.classList.add("delete");
    deleteBtn.classList.add("material-symbols-outlined");

    // Add Elements to their Perspective Containers
    project.appendChild(projectName);
    project.appendChild(iconContainer);
    iconContainer.appendChild(editBtn);
    iconContainer.appendChild(deleteBtn);
    projContainer.appendChild(project);

    // Load this Project's Task
    projectName.addEventListener('click', () => {
        switchProject(projectText, title, taskList);
    });

    // Edit This Project
    editBtn.addEventListener('click', function() {
        const editProjName = document.querySelector('#editProjName-dialog');
        const projName = this.closest("li").querySelector("p");

        // Old Node Values and Data
        let oldProjName = getProject(projName.innerText);
        let projNameText = projName;

        // Edit Project Name
        const projNameInput = document.querySelector('#editProjName-dialog #input-project-name');
        projNameInput.value = projName.innerText;

        // When Saved, Invoke Changes
        const save = document.querySelector("#editProjName-dialog button#save-btn");
        save.addEventListener("click", () => {
            editProject(oldProjName.name, projNameInput.value);
            projNameText.innerText = projNameInput.value;
        });

        editProjName.showModal();
    });

    // Delete This Project
    deleteBtn.addEventListener("click", function() {
        const li = this.closest("li");
        const sibling = li.nextElementSibling || li.previousElementSibling;
        
        // After Delete, Load Previous or Next Project
        if(sibling){
            switchProject(projectText, sibling.querySelector('p').innerText, taskList);
        } else {
            const tasks = document.querySelectorAll(".task-container");
            projectText.innerText = "Create/Select a Project";
            tasks.forEach(task => {
                taskList.removeChild(task);
            });
        }
    
        deleteProject(li.querySelector('p').innerText);
        li.remove();
    });

    createProject(title);
} 

// Get Current Selected Project Title
const projectTitle = () => {
    const projectTitle = document.querySelector("#project-name").innerText;
    return projectTitle;
}

// Add New Project to Project List
const addProjectToList = document.querySelector('#create');
addProjectToList.addEventListener('click', () => {
    const projectName = document.querySelector('#input-project-name').value;
    const projectTitle = document.querySelector("#project-name");
    const taskList = document.querySelector(".task-list");
    if (!projectName) {
        alert("Project name must be filled out");
        return false;
    } else {
        newProject(projectName);
        switchProject(projectTitle, projectName, taskList);
    }
});

// Load Tasks from Selected Project
const switchProject = (projectTitle, newTitle, taskList) => {
    const tasks = document.querySelectorAll(".task-container");
    projectTitle.innerText = newTitle;
    tasks.forEach(task => {
        taskList.removeChild(task);
    })
    loadTasks();
}

// Default
window.onload = function() {
    if(getProjects().length == 0) {
        const defaultTask = ["Task Title", "Sample Description", "No Date Set", "Marginal", "In progress"];
        newProject();
        getProject("Project X").toDoList.push(createNewTask(...defaultTask));
        newTask(...Object.values(getProject("Project X").toDoList.at(-1)));
    }
}














   












