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

const generateProject = (name) => {
      let project = {};

      project.name = name;
      project.toDoList = [];

      return project;
}

const addTaskToProject = (project, task) => {
      project.toDoList.push(task);
}

const getTaskIndex = (project, taskName) => {
      return project.toDoList.findIndex(task => task.title.toLowerCase() === taskName.toLowerCase());
}

const getTask = (project, taskName) => {
      let index = getTaskIndex(project, taskName);
      if(index !== -1){
            return project.toDoList[index];
      }else{
            return index;
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

const toDoItem = createNewTask('Code', 'Make ToDo App', 'YYYY/MM/DD', 'Low', 'on hold');
const toDoItem1 = createNewTask('Code1', 'Make ToDo App1', 'YYYY/MM/DD', 'Mid', 'in progress');
const project1 = generateProject('Project X');
addTaskToProject(project1, toDoItem);
addTaskToProject(project1, toDoItem1);

//console.log(getTask(project1, 'Code'))
//editTask(getTask(project1, 'Code1'), 'Eat', undefined, '2000/09/01/', 'High');

//deleteTask(project1, 'Code');

console.log(project1);


