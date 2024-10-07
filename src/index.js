import {isAfter, parseISO, format} from 'date-fns';
import { createNewTask, getTask, editTask, deleteTask } from "./task.js";
import { createProject, getProject, editProject, deleteProject } from "./project.js"
import './style.css';

const testProject = createProject("Project X");

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

const getTaskInputs = () => {
    const taskName = document.querySelector('#input-task-name').value;
    const taskDescription = document.querySelector('#input-description').value;
    const date = document.querySelector("#task-dialog input#deadline").value;
    const formattedDate = format(date, 'MM-dd-yyyy HH:mm');
    const parsedDate = parseISO(date);
    const today = new Date();
    const checkDeadline = isAfter(today, parsedDate);
    let status = undefined;
    if(checkDeadline == true) {
        status = "Late";
    } else {
        status = "In Progress";
    }

    let taskPriority = document.querySelector('input[name="importance"]:checked').value;
    return [taskName, taskDescription, formattedDate, taskPriority, status];
}

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


    taskName.addEventListener("click", (e) => {
        taskName.classList.toggle("checked");
        let status = e.target.parentElement.parentElement.querySelector(".status");
        if(taskName.classList.contains("checked")) {
            status.innerText = "Completed";
        } else {
            status.innerText = "In Progress";   
        }
    });
    
    taskList.prepend(taskContainer);
}
//newTask();

const submit = document.querySelector("#task-dialog button#submit-btn");
submit.addEventListener("click", () => {
    testProject.toDoList.push(createNewTask(...getTaskInputs()));
    newTask(...getTaskInputs())
    //console.log(testProject.toDoList.at(-1));
});


// const submit = document.querySelector("#task-dialog button#submit-btn");
// submit.addEventListener("click", (e) => {
//     const date = document.querySelector("#task-dialog input#deadline").value;
//     const parsedDate = parseISO(date);
//     const today = new Date();
//     const check = isAfter(today, parsedDate);
//     const formattedDate = format(date, 'MMMM-dd-yyyy hh:mm a');
//     console.log(formattedDate);
//     if(check == true) {
//         console.log("Late");
//     } else {
//         console.log("Ongoing");
//     }
// });








   












