const createNewTask = (title, description, dueDate, priority, status) => {
      let newTask = {
            title,
            description,
            dueDate,
            priority,
            status
      };

      return newTask;
} 

const getTask = (project, taskName) => {
      if(taskName){
            return project.toDoList.find(task => task.title.toLowerCase() === taskName.toLowerCase())
      }else {
            return;
      }
};

const editTask = (task, ...newValues) => {
      if(!task) {
            return;
      }
      let i = 0;
      Object.keys(task).forEach((keys) => {
            task[keys] = newValues[i] != undefined ? newValues[i] : task[keys];
            i++;
      })
}

const deleteTask = (project, taskName) => {
      const toDelete = project.toDoList.findIndex(obj => obj.title.toLowerCase() === taskName.toLowerCase());
      project.toDoList.splice(toDelete, 1);
}

export {createNewTask, getTask, editTask, deleteTask}