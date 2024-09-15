document.addEventListener('DOMContentLoaded', () => {
      const taskContainers = document.querySelectorAll('.task-container');
      const taskList = document.querySelector('.task-list');

      const arrow = document.createElement('span');
      arrow.textContent = "▼";
      arrow.classList.add("arrow");

      const dropBtn = document.createElement('button');
      dropBtn.classList.add("dropdown-btn");
      dropBtn.appendChild(arrow);
      
      taskContainers.forEach((container) => {
            container.appendChild(dropBtn);
      });

      taskList.addEventListener('click', (e) => {
            const taskContainer = e.target.closest('.task-container');
            if (!taskContainer) return;
            console.log(taskContainer);
            
            const taskBody = taskContainer.querySelector('.task-body');
            if (!taskBody) return;
            console.log(taskBody);
    
            const computedStyle = window.getComputedStyle(taskBody);
            console.log(computedStyle);
            const currentDisplay = computedStyle.getPropertyValue('display');
            console.log(currentDisplay);
            
            if (currentDisplay === "none") {
                taskBody.style.display = "grid";
                taskContainer.setAttribute("data-after", "▲");
            } else {
                taskBody.style.display = "none";
                taskContainer.setAttribute("data-after", "▼");
            }
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





