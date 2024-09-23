import {isAfter, parseISO, format} from 'date-fns';
import { createNewTask, getTask, editTask, deleteTask } from "./task.js";
import './style.css';

function setupDialog(openBtnSelector, dialogSelector, closeBtnSelector) {
    const dialog = document.querySelector(dialogSelector);
    const openBtn = document.querySelector(openBtnSelector);
    const closeBtn = dialog.querySelector(closeBtnSelector);
    const form = dialog.querySelector('form'); 

    if (openBtn && dialog && closeBtn) {
        openBtn.addEventListener("click", () => {
            dialog.showModal();
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

const newTask = () => {
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

    taskName.innerText = "Task Name 1";
    dateLabel.innerText = "Due:  ";
    date.innerText = "YYYY/MM/DD";

    descriptionLabel.innerText = "Description";
    taskPriority.innerText = "Important";
    taskDescription.innerText = "Sample Description";
    statusLabel.innerText = "Status:  ";
    taskStatus.innerText = "In progress";
    dropBtn.textContent = "▼";

    taskHead.appendChild(taskName);
    taskHead.appendChild(dateLabel);
    dateLabel.appendChild(date);

    taskBody.appendChild(descriptionLabel);
    taskBody.appendChild(taskPriority);
    taskBody.appendChild(taskDescription);
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
    
    taskList.prepend(taskContainer);
}

newTask();

const getTaskInputs = () => {
    const taskName = document.querySelector('#input-task-name');
    const taskDescription = document.querySelector('#input-description');
    const date = document.querySelector("#task-dialog input#deadline").value;
    const formattedDate = format(date, 'MM-dd-yyyy HH:mm');
    const parsedDate = parseISO(date);
    const today = new Date();
    const checkDeadline = isAfter(today, parsedDate);
    const status = undefined;
    if(checkDeadline == true) {
        status = "Late";
    } else {
        status = "Ongoing";
    }

}

const submit = document.querySelector("button#submit-btn");
submit.addEventListener("click", () => {
    const date = document.querySelector("#task-dialog input#deadline").value;
    const parsedDate = parseISO(date);
    const today = new Date();
    const check = isAfter(today, parsedDate);
    const formattedDate = format(date, 'MMMM-dd-yyyy hh:mm a');
    console.log(formattedDate);
    if(check == true) {
        console.log("Late");
    } else {
        console.log("Ongoing");
    }
});

const complete = document.querySelector('.task-name');
complete.addEventListener("click", () => {
    complete.classList.toggle("checked");
})



   












