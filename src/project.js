const projects = [];

const createProject = (name) => {
      let newProject = {};

      newProject.name = name;
      newProject.toDoList = [];

      return projects.push(newProject);
}

const getProjectIndex = (projectName) => {
      return projects.findIndex(project => project.name.toLowerCase() === projectName.toLowerCase());
}

const getProject = (projectName) => {
      let index = getProjectIndex(projectName);
      if(index !== -1){
            return projects[index];
      }else{
            return index;
      }
}

const editProject = (project, ...newValues) => {
      if(project == -1) {
            return console.error('Project not found');  
      }  
      const keys = Object.keys(project);
      for(let i = 0; i < keys.length - 1; i++){
            project[keys[i]] = newValues[i] != undefined ? newValues[i] :  project[keys[i]];
      }
}

const deleteProject = (projectName) => {
      projects.splice(getProjectIndex(projectName), 1);
}

//NOTE: Double Check on delete functions.

const ProjectA = createProject('Project A');
//console.log(projects);
//console.log(getProject('Project A'));
editProject(getProject('Project A'), undefined);
deleteProject('asdf');
console.log(projects);


// const addTaskToProject = (project, task) => {
//       project.toDoList.push(task);
// }