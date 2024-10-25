import { isAfter, parseISO, format } from 'date-fns';
import { createNewTask, getTask, editTask, deleteTask } from './task.js';
import { createProject, getProject, editProject, deleteProject, getProjects} from './project.js'
import './style.css';

// DIALOGS

// Setting Up Dialogs
function setupDialog(openBtnSelector, dialogSelector, closeBtnSelector) {
    // Select Dialog Elements
    const dialog = document.querySelector(dialogSelector);
    const openBtn = document.querySelector(openBtnSelector);
    const closeBtn = dialog.querySelector(closeBtnSelector);
    const form = dialog.querySelector('form'); 

    // Dialog Open and Close Functions
    if (openBtn && dialog && closeBtn) {
        openBtn.addEventListener('click', () => {
            dialog.showModal();
            if (form) {
                form.reset();
            }
        });
  
        closeBtn.addEventListener('click', () => {
            dialog.close();
            if (form) {
                form.reset();
            }
        });
    }
}

// Create Dialogs
setupDialog('#create-project-btn', '#project-dialog', 'button#cancel-btn');
setupDialog('#add-task-btn', '#task-dialog', 'button#cancel-btn');

// Get Inputs from Dialog
const getTaskInputs = (dialog) => {
    // Base Dialog
    const dialogSelector = `#${dialog}-dialog`;

    // Get Input Values
    const taskName = document.querySelector(`${dialogSelector} #input-task-name`).value;
    const taskDescription = document.querySelector(`${dialogSelector} #input-description`).value;
    const taskDeadline = document.querySelector(`${dialogSelector} input#input-deadline`).value;
    const taskPriority = document.querySelector(`${dialogSelector} input[name="importance"]:checked`).value;

    // Validate Required Fields
    if (!taskName || !taskDescription) {
        alert('Task Name and Description must be filled out');
        return false;
    }

    // Process Date and Status
    const today = new Date();
    const formattedDate = taskDeadline ? format(parseISO(date), 'MM-dd-yyyy HH:mm a') : 'No Date Set';
    const status = taskDeadline && isAfter(today, parseISO(date)) ? 'Late' : 'In Progress';

    // Return Task Data
    return [taskName, taskDescription, formattedDate, taskPriority, status];
}

// UI: TASK

// Construct New Task
const newTask = (name, description, formattedDate, priority, status) => {
    // Create Task Elements
    const taskList = document.querySelector('.task-list');
    const taskContainer = document.createElement('div');
    const taskHead = document.createElement('div');
    const taskName = document.createElement('p');
    const dateLabel = document.createElement('p');
    const date = document.createElement('span');
    const taskBody = document.createElement('div');
    const descriptionLabel = document.createElement('p');
    const taskPriority = document.createElement('p');
    const taskDescription = document.createElement('p');
    const statusLabel = document.createElement('p');
    const taskStatus = document.createElement('span');
    const iconContainer = document.createElement('div');
    const editBtn = document.createElement('span');
    const deleteBtn = document.createElement('span');
    const dropBtn = document.createElement('button');

    // Add Class to Task Elements
    taskContainer.classList.add('task-container');
    taskHead.classList.add('task-head');
    taskName.classList.add('task-name');
    date.classList.add('due-date');
    taskBody.classList.add('task-body');
    taskPriority.classList.add('priority');
    taskDescription.classList.add('description');
    taskStatus.classList.add('status');
    dropBtn.classList.add('dropdown-btn');
    iconContainer.classList.add('icons');
    editBtn.classList.add('edit');
    editBtn.classList.add('material-symbols-outlined');
    deleteBtn.classList.add('delete');
    deleteBtn.classList.add('material-symbols-outlined');
    
    // Add Text Content in Task Elements
    taskName.innerText = name;
    dateLabel.innerText = 'Due:  ';
    date.innerText = formattedDate;
    descriptionLabel.innerText = 'Description';
    taskPriority.innerText = priority;
    taskDescription.innerText = description;
    statusLabel.innerText = 'Status:  ';
    taskStatus.innerText = status;
    editBtn.innerText = 'edit';
    deleteBtn.innerText = 'delete';
    dropBtn.textContent = '▼';

    // Append Elements
    taskHead.append(taskName, dateLabel);
    dateLabel.appendChild(date);
    taskBody.append(descriptionLabel, taskPriority, taskDescription, iconContainer, statusLabel);
    iconContainer.append(editBtn, deleteBtn);
    statusLabel.appendChild(taskStatus);
    taskContainer.append(taskHead, taskBody, dropBtn);
    taskList.prepend(taskContainer);

    // Set Task Priority Color
    priorityColor(taskPriority, taskName);

    // Expand Task Details
    dropBtn.addEventListener('click', () => {
        if (taskBody.style.display === 'none' || !taskBody.style.display) {
            taskBody.style.display = 'grid';
            dropBtn.textContent = '▲'; 
        } else {
            taskBody.style.display = 'none';
            dropBtn.textContent = '▼'; 
        }
    });

    // Toggle Task Status
    taskName.addEventListener('click', function() {
        const taskName = this.closest('.task-container').querySelector('.task-name').innerText;
        const taskDescription = this.closest('.task-container').querySelector('.description').innerText;
        const status = this.parentElement.parentElement.querySelector('.status');

        this.classList.toggle('checked');
        if(this.classList.contains('checked')) {
            status.innerText = 'Completed';
        } else {
            status.innerText = 'In Progress';   
        }

        editTask(getProject(projectTitle()), taskName, taskDescription, status.innerText);
    });

    // Edit This Task
    editBtn.addEventListener('click', function() {
        // Edit Task Dialog
        const editDialog = document.querySelector('#edit-dialog');
        const save = document.querySelector('#edit-dialog button#save-btn');

        // Select Task Nodes to be Changed
        const taskName = this.closest('.task-container').querySelector('.task-name');
        const taskDescription = this.closest('.task-container').querySelector('.description');
        const taskDate = this.closest('.task-container').querySelector('.due-date');
        const priority = this.closest('.task-container').querySelector('.priority');

        // Store Task Nodes and Data Temporarily
        const oldData = getTask(getProject(projectTitle()), taskName.innerText, taskDescription.innerText);
        const taskComponents = [taskName, taskDescription, taskDate, priority];

        // Get Edit Task Input Nodes
        const newTaskName = document.querySelector('#edit-dialog #input-task-name')
        const newTaskDescription = document.querySelector('#edit-dialog #input-description');
        const newTaskDate = document.querySelector('#edit-dialog .current-date');
        const newTaskPriority = document.querySelectorAll('#edit-dialog input[name="importance"]');

        // Get Current Node Values
        newTaskName.value = taskName.innerText;
        newTaskDescription.value = taskDescription.innerText;
        newTaskDate.innerText = taskDate.innerText;
        for (let currentTaskPriority of newTaskPriority) {
            if(priority.innerText == currentTaskPriority.value) {
                currentTaskPriority.setAttribute('checked', 'checked');
                break;
            }
        }

        // When Saved, Edit Node and Task in Project To Do List
        function saveTask() {
            if(getTaskInputs('edit') == false) {
                return;
            }
            editTask(getProject(projectTitle()), oldData['title'], oldData['description'], ...getTaskInputs('edit'));
            for(let i = 0; i <= 3; i++) {
                taskComponents[i].innerText = getTaskInputs('edit')[i];
            }
            priorityColor(priority, taskName);
            save.removeEventListener('click', saveTask);
        }
        save.addEventListener('click', saveTask);

        editDialog.showModal();
    });

    // Delete This Task
    deleteBtn.addEventListener('click', function() {
        // Get this Task's Task Name and Description
        let taskName = this.closest('.task-container').querySelector('.task-name').innerText;
        let taskDescription = this.closest('.task-container').querySelector('.description').innerText;

        // Delete Node and Remove in Project To Do List
        this.closest('.task-container').remove();
        deleteTask(getProject(projectTitle()), taskName, taskDescription);
    });
}

// Change Task Color Theme Based on Priority
const priorityColor = (taskPriority, taskName) => {
    const taskHead = taskName.parentElement;
    if(taskPriority.innerText == 'Marginal') {
        taskPriority.style.color = '#1cd131';
        taskHead.style.backgroundColor = '#1cd131';
    } else if (taskPriority.innerText == 'Moderate') {
        taskPriority.style.color = '#FFC000';
        taskHead.style.backgroundColor = '#FFC000';
    } else if (taskPriority.innerText == 'Critical') {
        taskPriority.style.color = '#ff3030';
        taskHead.style.backgroundColor = '#ff3030';
    }        
}

// Check 

// Add Task to Project
const addTaskToProject = document.querySelector('#task-dialog button#submit-btn');
addTaskToProject.addEventListener('click', () => {
    getProject(projectTitle()).toDoList.push(createNewTask(...getTaskInputs('task')));
    newTask(...Object.values(getProject(projectTitle()).toDoList.at(-1)));
});

// Load Task from Selected Project
const loadTasks = () => {
    const taskList = getProject(projectTitle()).toDoList;
    if(taskList.length === 0) {
        return;
    } else {
        taskList.forEach((task) => {
            newTask(...Object.values(task));
        });
    }
}

// UI: PROJECT

// Construct New Project
const newProject = (title = 'Project X') => {
    // Create Elements and Select Parent Elements
    const projectText = document.querySelector('#project-name');
    const projContainer = document.querySelector('.project-list');
    const project = document.createElement('li');
    const projectName = document.createElement('p');
    const taskList = document.querySelector('.task-list');
    const iconContainer = document.createElement('div');
    const editBtn = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // Created Elements Text Values
    projectName.innerText = title;
    editBtn.innerText = 'edit';
    deleteBtn.innerText = 'delete';

    // Class to Project Elements
    iconContainer.classList.add('icons');
    editBtn.classList.add('edit');
    editBtn.classList.add('material-symbols-outlined');
    deleteBtn.classList.add('delete');
    deleteBtn.classList.add('material-symbols-outlined');

    // Add Elements to their Perspective Containers
    project.appendChild(projectName);
    project.appendChild(iconContainer);
    iconContainer.appendChild(editBtn);
    iconContainer.appendChild(deleteBtn);
    projContainer.appendChild(project);

    // Load this Project's Task
    projectName.addEventListener('click', () => {
        switchProject(projectText, title, taskList);
    });

    // Edit This Project
    editBtn.addEventListener('click', function() {
        const editProjName = document.querySelector('#editProjName-dialog');
        const projName = this.closest('li').querySelector('p');

        // Old Node Values and Data
        const oldProjName = getProject(projName.innerText);
        const projNameText = projName;

        // Edit Project Name
        const projNameInput = document.querySelector('#editProjName-dialog #input-project-name');
        projNameInput.value = projName.innerText;

        // When Saved, Invoke Changes
        const save = document.querySelector('#editProjName-dialog button#save-btn');
        function saveProject() {
            if (checkDuplicates(projNameInput.value)) {
                alert('Project name must be unique or not the same as the old one');
            } else {
                editProject(oldProjName.name, projNameInput.value);
                projNameText.innerText = projNameInput.value;
            }
            save.removeEventListener('click', saveProject);
        }
        save.addEventListener('click', saveProject);

        editProjName.showModal();
    });

    // Delete This Project
    deleteBtn.addEventListener('click', function() {
        const li = this.closest('li');
        const sibling = li.nextElementSibling || li.previousElementSibling;
        
        // After Delete, Load Previous or Next Project
        if(sibling){
            switchProject(projectText, sibling.querySelector('p').innerText, taskList);
        } else {
            const tasks = document.querySelectorAll('.task-container');
            projectText.innerText = 'Create/Select a Project';
            tasks.forEach(task => {
                taskList.removeChild(task);
            });
        }
    
        // Delete Project and its Node
        deleteProject(li.querySelector('p').innerText);
        li.remove();
    });

    createProject(title);
} 

// Check Duplicates
const checkDuplicates = projectName => {
    return getProjects().some(obj => 
        projectName.toLowerCase() === obj.name.toLowerCase());
}

// Get Current Project Title
const projectTitle = () => {
    const projectTitle = document.querySelector('#project-name').innerText;
    return projectTitle;
}

// Add New Project to Project List
const addProjectToList = document.querySelector('#project-dialog #create-btn');
addProjectToList.addEventListener('click', () => {
    const projectName = document.querySelector('#input-project-name').value;
    const projectTitle = document.querySelector('#project-name');
    const taskList = document.querySelector('.task-list');
    
    if (!projectName) {
        alert('Project name must be filled out');
        return false;
    } else if (checkDuplicates(projectName)) {
        alert('Project name must be unique');
        return false;
    } else {
        newProject(projectName);
        switchProject(projectTitle, projectName, taskList);
    }
});

// Get Project's Task
const switchProject = (projectTitle, newTitle, taskList) => {
    const tasks = document.querySelectorAll('.task-container');
    projectTitle.innerText = newTitle;
    tasks.forEach(task => {
        taskList.removeChild(task);
    })
    loadTasks();
}

// Default
window.onload = function() {
    if(getProjects().length == 0) {
        const defaultTask = ['Task Title', 'Sample Description', 'No Date Set', 'Marginal', 'In progress'];
        newProject();
        getProject('Project X').toDoList.push(createNewTask(...defaultTask));
        newTask(...Object.values(getProject('Project X').toDoList.at(-1)));
    }
}














   












