const generateTask = (title, description, dueDate, priority) => {
      let task = {
            title,
            description,
            dueDate,
            priority
      };

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
      return project.toDoList.find(task => task.title.toLowerCase() === taskName.toLowerCase());
};

// const editTask = (task, ...newValues) => {
//       task.title = nTitle;
//       task.description = nDescription;
//       task.dueDate = nDueDate;
//       task.priority = nPriority;
// }

const deleteTask = (project, taskName) => {
      const toDelete = project.toDoList.findIndex(obj => obj.title.toLowerCase() === taskName.toLowerCase());
      project.toDoList.splice(toDelete, 1);
}

// const toDoItem = generateTask('Code', 'Make ToDo App', 'YYYY/MM/DD', 'Low');
// const toDoItem1 = generateTask('Code1', 'Make ToDo App1', 'YYYY/MM/DD', 'Mid');
// const project1 = generateProject('Project X');
// addTaskToProject(project1, toDoItem);
// addTaskToProject(project1, toDoItem1);

// getTask(project1, 'Code1');
// editTask(project1.toDoList[1], 'Eat', 'Eat Apple', '2000/09/01/', 'High');
// deleteTask(project1, 'Eat');

const obj = {
      
}

const test = (object, ...newValues) => {
      let i = 0;
      newValues.forEach((prop) => {
            object[prop] = i++;
      });
}

test(obj, 'a', 'b', 'c')
console.log(obj);
