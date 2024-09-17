document.addEventListener('DOMContentLoaded', () => {
      const taskContainers = document.querySelectorAll('.task-container');
      const taskList = document.querySelector('.task-list');

      const arrow = document.createElement('span');
      arrow.textContent = "▼";
      //arrow.classList.add("invert-arrow");

      const dropBtn = document.createElement('button');
      dropBtn.classList.add("dropdown-btn");
      dropBtn.appendChild(arrow);
      
      taskContainers.forEach((container) => {
            container.appendChild(dropBtn);
      });


      dropBtn.addEventListener('click', (e) => {
            const taskContainer = e.target.closest('.task-container');
            if (!taskContainer) return;
            
            const taskBody = taskContainer.querySelector('.task-body');
            if (!taskBody) return;

            const taskBtn = e.target.closest('.dropdown-btn span');

            if(e.target.classList.contains("invert-arrow")) {
                taskBody.style.display = "none";
                taskBtn.classList.remove("invert-arrow");
            } else {
                taskBody.style.display = "grid";
                taskBtn.classList.add("invert-arrow");
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

// dropBtn.addEventListener('click', (e) => {
//     const taskContainer = e.target.closest('.task-container');
//     if (!taskContainer) return;
    
//     const taskBody = taskContainer.querySelector('.task-body');
//     if (!taskBody) return;

//     const taskBtn = e.target.closest('.dropdown-btn span');
//     console.log(taskBtn);

//     // const computedStyle = window.getComputedStyle(taskBtn);
//     // console.log(computedStyle);

//     // const currentDisplay = computedStyle.getPropertyValue('display');

//     //console.log(taskBtn.classList.contains("invert-arrow"));

//     if(taskBtn.classList.contains("invert-arrow")) {
//         taskBody.style.display = "grid";
//         taskBtn.classList.add("invert-arrow");
//     } else {
//         taskBody.style.display = "none";
//         taskBtn.classList.remove("invert-arrow");
//     }
    
    
//     // if (currentDisplay === "none") {
//     //     taskBody.style.display = "grid";
//     //     taskContainer.setAttribute("data-after", "▲");
//     // } else {
//     //     taskBody.style.display = "none";
//     //     taskContainer.setAttribute("data-after", "▼");
//     // }
// });





