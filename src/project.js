const projects = [];
// {name: "Project X", toDoList: ["Task 1", "Sample Description", "No Date Set", "Moderate", "In Progress" ]}

const createProject = (name) => {
      let newProject = {};

      newProject.name = name;
      newProject.toDoList = [];
      projects.push(newProject);

      return newProject;
}

const getProjectIndex = (projectName) => {
      return projects.findIndex(project => project.name.toLowerCase() == projectName.toLowerCase());
}

const getProject = (projectName) => {
      const index = getProjectIndex(projectName);
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


//Newly Added
const projectLength = () => {
      return projects.length;
}

const projectList = () => {
      console.log(projects);
}

export {createProject, getProject, editProject, deleteProject, projectLength, projectList};


// const ProjectA = createProject('Project A');
// const ProjectB = createProject('Project B');
//console.log(projects);
//console.log(getProject('Project A'));
// editProject(getProject('Project A'), undefined);
// deleteProject('Project B');
// console.log(projects);

// const addTaskToProject = (project, task) => {
//       project.toDoList.push(task);
// }