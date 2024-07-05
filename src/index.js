const generateTask = (title, description, dueDate, priority) => {
      let task = {};

      task.title = title;
      task.description = description;
      task.dueDate = dueDate;
      task.priority = priority;

      return task;
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

const getTask = (project, taskName) => {

}


const toDoItem = generateTask('Code', 'Make ToDo App', 'YYYY/MM/DD', 'Low');
const project1 = generateProject('Project X');
addTaskToProject(project1, toDoItem);
console.log(project1);
const search =  getTask(project1, 'Code')
console.log(search);

