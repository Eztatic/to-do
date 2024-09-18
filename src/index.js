import { createNewTask, getTask, editTask, deleteTask } from "./task.js";

document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.querySelector('.task-list');

    taskList.querySelectorAll('.task-container').forEach(container => {
        const dropBtn = document.createElement('button');
        dropBtn.classList.add("dropdown-btn");
        dropBtn.textContent = "▼";
        
        container.appendChild(dropBtn);

        dropBtn.addEventListener('click', () => {
            const taskBody = container.querySelector('.task-body');
            if (!taskBody) return;

            if (taskBody.style.display === "none" || !taskBody.style.display) {
                taskBody.style.display = "grid";
                dropBtn.textContent = "▲"; 
            } else {
                taskBody.style.display = "none";
                dropBtn.textContent = "▼"; 
            }
        });
    });
});


function setupDialog(openBtnSelector, dialogSelector, closeBtnSelector) {
      const openBtn = document.querySelector(openBtnSelector);
      const dialog = document.querySelector(dialogSelector);
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
      } else {
          console.warn("Dialog setup failed: Missing element(s) for " + dialogSelector);
      }
  }
  
setupDialog('#create-project-btn', '#project-dialog', 'button#cancel-btn');
setupDialog('#add-task-btn', '#task-dialog', 'button#cancel-btn');

//CRUD Methods