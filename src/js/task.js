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

const getTaskIndex = (project, taskName, taskDescription) => {
      return project.toDoList.findIndex(task => task.title.toLowerCase() === taskName.toLowerCase() && task.description.toLowerCase() === taskDescription.toLowerCase());
}

const getTask = (project, taskName, taskDescription) => {
      let index = getTaskIndex(project, taskName, taskDescription);
      if(index !== -1){
            return project.toDoList[index];
      }else{
            return index;
      }
};

const editTask = (project, oldTaskName, oldTaskDescription, ...newValues) => {
      let thisTask = getTask(project, oldTaskName, oldTaskDescription);

      if(newValues.length == 1) {
            thisTask['status'] = newValues[0];
      } else {
            thisTask['title'] = newValues[0];
            thisTask['description'] = newValues[1];
            thisTask['dueDate'] = newValues[2];
            thisTask['priority'] = newValues[3];
      }
}

const deleteTask = (project, taskName, taskDescription) => {
      project.toDoList.splice(getTaskIndex(project, taskName, taskDescription), 1);
}

export {createNewTask, getTask, editTask, deleteTask};
