const taskContainer = document.querySelectorAll('.task-container');
const taskList = document.querySelector('.task-list');

taskContainer.forEach((obj) => {
      obj.setAttribute("data-after", "▼");
})

taskList.addEventListener('click', (e) => {
      const taskContainer = e.target.closest('.task-container');
      const taskBody = taskContainer.querySelector('.task-body');
      const computedStyle = window.getComputedStyle(taskBody);
      const currentDisplay = computedStyle.getPropertyValue('display');
      
      if(!taskContainer){
            return;
      }else if (currentDisplay === "none") {
            taskBody.style.display = "grid";
            taskContainer.setAttribute("data-after", "▲");
      } else {
            taskBody.style.display = "none";
            taskContainer.setAttribute("data-after", "▼");
      }
});

const openProjectDialog = document.querySelector('#create-project-btn');
const projectDialog = document.querySelector('#project-dialog');
const openTaskDialog = document.querySelector('#add-task-btn');
const taskDialog = document.querySelector('#task-dialog');
const closeBtn = document.querySelector('dialog button#cancel-btn');

openProjectDialog.addEventListener("click", () => {
      projectDialog.showModal();
});

openTaskDialog.addEventListener("click", () => {
      taskDialog.showModal();
});

closeBtn.addEventListener("click", () => {
      //fix
      dialog.close();
});




