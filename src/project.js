const projects = JSON.parse(localStorage.getItem('projects')) || [];

const updateDB = () => {
      localStorage.setItem('projects', JSON.stringify(projects));
}

const createProject = (name) => {
      let newProject = {};

      newProject.name = name;
      newProject.toDoList = [];
      projects.push(newProject);

      return newProject;
}

const getProjectIndex = (projectName) => {
      return projects.findIndex(project => project.name == projectName);
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

const getProjects = () => {
      return projects;
}

export {createProject, getProject, editProject, deleteProject, getProjects, updateDB};
