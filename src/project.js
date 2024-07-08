const projects = [];

const createProject = (name) => {
      let newProject = {};

      newProject.name = name;
      newProject.toDoList = [];

      return newProject;
}

const getProject = (projectName) => {
      if(projectName){
            return projects.find(project => project.name.toLowerCase() === projectName.toLowerCase())
      }
}

const editProject = (...newValues) => {
      if(!task) {
            return;
      }
      let i = 0;
      Object.keys(task).forEach((keys) => {
            task[keys] = newValues[i] != undefined ? newValues[i] : task[keys];
            i++;
      })
}

const addTaskToProject = (project, task) => {
      project.toDoList.push(task);
}