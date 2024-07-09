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

const getTaskIndex = (project, taskName) => {
      return project.toDoList.findIndex(task => task.title.toLowerCase() === taskName.toLowerCase());
}

const getTask = (project, taskName) => {
      let index = getTaskIndex(project, taskName);
      if(index !== -1){
            return project.toDoList[index];
      }else{
            return 'Task not found';
      }
};

const editTask = (task, ...newValues) => {
      if(task == -1) {
            return console.error('Task not found');  
      }  
      let i = 0;
      Object.keys(task).forEach((keys) => {
            task[keys] = newValues[i] != undefined ? newValues[i] : task[keys];
            i++;
      });
}

const deleteTask = (project, taskName) => {
      project.toDoList.splice(getTaskIndex(project, taskName), 1);
}


export {createNewTask, getTask, editTask, deleteTask}