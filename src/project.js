const projects = [];

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
      let index = getProjectIndex(projectName);
      if(index !== -1){
            return projects[index];
      }else{
            return index;
      }
}

const editProject = (project, ...newValues) => {
      let thisProject = getProject(project);

      thisProject['name'] = newValues[0];
}

const deleteProject = (projectName) => {
      projects.splice(getProjectIndex(projectName), 1);
}


//Newly Added
const getProjects = () => {
      return projects;
}

export {createProject, getProject, editProject, deleteProject, getProjects};


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