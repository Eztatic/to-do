"use strict";
(self["webpackChunkto_do_app"] = self["webpackChunkto_do_app"] || []).push([["index"],{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parseISO.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isAfter.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/js/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/js/project.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



// import '../style.css';

// DIALOGS

// Setting Up Dialogs
function setupDialog(openBtnSelector, dialogSelector, closeBtnSelector) {
  // Select Dialog Elements
  var dialog = document.querySelector(dialogSelector);
  var openBtn = document.querySelector(openBtnSelector);
  var closeBtn = dialog.querySelector(closeBtnSelector);
  var form = dialog.querySelector('form');

  // Dialog Open and Close Functions
  if (openBtn && dialog && closeBtn) {
    openBtn.addEventListener('click', function () {
      if (openBtnSelector === '#add-task-btn' && (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)().length === 0) {
        alert('Must at least create one project first before creating a task');
        return;
      }
      dialog.showModal();
      if (form) {
        form.reset();
      }
    });
    closeBtn.addEventListener('click', function () {
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
var getTaskInputs = function getTaskInputs(dialog) {
  // Base Dialog
  var dialogSelector = "#".concat(dialog, "-dialog");

  // Get Input Values
  var taskName = document.querySelector("".concat(dialogSelector, " #input-task-name")).value;
  var taskDescription = document.querySelector("".concat(dialogSelector, " #input-description")).value;
  var taskDeadline = document.querySelector("".concat(dialogSelector, " input#input-deadline")).value;
  var taskPriority = document.querySelector("".concat(dialogSelector, " input[name=\"importance\"]:checked")).value;

  // Validate Required Fields
  if (!taskName || !taskDescription) {
    alert('Task Name and Description must be filled out');
    return false;
  }

  // Process Date and Status
  var today = new Date();
  var formattedDate = taskDeadline ? (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parseISO)(taskDeadline), 'MM-dd-yyyy HH:mm a') : 'No Date Set';
  var status = taskDeadline && (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isAfter)(today, (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parseISO)(taskDeadline)) ? 'Late' : 'In Progress';

  // Return Task Data
  return [taskName, taskDescription, formattedDate, taskPriority, status];
};

// TASK UI HANDLER

// Construct New Task
var newTask = function newTask(name, description, formattedDate, priority, status) {
  // Create Task Elements
  var taskList = document.querySelector('.task-list');
  var taskContainer = document.createElement('div');
  var taskHead = document.createElement('div');
  var taskName = document.createElement('p');
  var dateLabel = document.createElement('p');
  var date = document.createElement('span');
  var taskBody = document.createElement('div');
  var descriptionLabel = document.createElement('p');
  var taskPriority = document.createElement('p');
  var taskDescription = document.createElement('p');
  var statusLabel = document.createElement('p');
  var taskStatus = document.createElement('span');
  var iconContainer = document.createElement('div');
  var editBtn = document.createElement('span');
  var deleteBtn = document.createElement('span');
  var dropBtn = document.createElement('button');

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
  dropBtn.addEventListener('click', function () {
    if (taskBody.style.display === 'none' || !taskBody.style.display) {
      taskBody.style.display = 'grid';
      dropBtn.textContent = '▲';
    } else {
      taskBody.style.display = 'none';
      dropBtn.textContent = '▼';
    }
  });

  // Toggle Task Status
  taskName.addEventListener('click', function () {
    taskName.classList.toggle('checked');
    if (taskName.classList.contains('checked')) {
      taskStatus.innerText = 'Completed';
    } else {
      taskStatus.innerText = 'In Progress';
    }
    (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.editTask)((0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectTitle()), taskName.innerText, taskDescription.innerText, taskStatus.innerText);
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateDB)();
  });

  // Edit This Task
  editBtn.addEventListener('click', function () {
    // Edit Task Dialog
    var editDialog = document.querySelector('#edit-dialog');
    var save = document.querySelector('#edit-dialog button#save-btn');

    // Store Task Nodes and Data Temporarily
    var oldData = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.getTask)((0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectTitle()), taskName.innerText, taskDescription.innerText);
    var taskComponents = [taskName, taskDescription, date, taskPriority];

    // Get Edit Task Input Nodes
    var newTaskName = document.querySelector('#edit-dialog #input-task-name');
    var newTaskDescription = document.querySelector('#edit-dialog #input-description');
    var newTaskDate = document.querySelector('#edit-dialog .current-date');
    var newTaskPriority = document.querySelectorAll('#edit-dialog input[name="importance"]');

    // Get Current Node Values
    newTaskName.value = taskName.innerText;
    newTaskDescription.value = taskDescription.innerText;
    newTaskDate.innerText = date.innerText;
    var _iterator = _createForOfIteratorHelper(newTaskPriority),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var currentTaskPriority = _step.value;
        if (taskPriority.innerText == currentTaskPriority.value) {
          currentTaskPriority.setAttribute('checked', 'checked');
          break;
        }
      }

      // When Saved, Edit Node and Task in Project To Do List
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    function saveTask() {
      if (getTaskInputs('edit') == false) {
        return;
      }
      _task_js__WEBPACK_IMPORTED_MODULE_0__.editTask.apply(void 0, [(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectTitle()), oldData['title'], oldData['description']].concat(_toConsumableArray(getTaskInputs('edit'))));
      for (var i = 0; i <= 3; i++) {
        taskComponents[i].innerText = getTaskInputs('edit')[i];
      }
      priorityColor(taskPriority, taskName);
      (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateDB)();
      save.removeEventListener('click', saveTask);
    }
    save.addEventListener('click', saveTask);
    editDialog.showModal();
  });

  // Delete This Task
  deleteBtn.addEventListener('click', function () {
    // Delete Node and Remove in Project To Do List
    taskContainer.remove();
    (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)((0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectTitle()), taskName.innerText, taskDescription.innerText);
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateDB)();
  });
};

// Change Task Color Theme Based on Priority
var priorityColor = function priorityColor(taskPriority, taskName) {
  var taskHead = taskName.parentElement;
  if (taskPriority.innerText == 'Marginal') {
    taskPriority.style.color = '#1cd131';
    taskHead.style.backgroundColor = '#1cd131';
  } else if (taskPriority.innerText == 'Moderate') {
    taskPriority.style.color = '#FFC000';
    taskHead.style.backgroundColor = '#FFC000';
  } else if (taskPriority.innerText == 'Critical') {
    taskPriority.style.color = '#ff3030';
    taskHead.style.backgroundColor = '#ff3030';
  }
};

// Add Task to Project
var addTaskToProject = document.querySelector('#task-dialog button#submit-btn');
addTaskToProject.addEventListener('click', function () {
  (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectTitle()).toDoList.push(_task_js__WEBPACK_IMPORTED_MODULE_0__.createNewTask.apply(void 0, _toConsumableArray(getTaskInputs('task'))));
  newTask.apply(void 0, _toConsumableArray(Object.values((0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectTitle()).toDoList.at(-1))));
  (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateDB)();
});

// Load Task from Selected Project
var loadTasks = function loadTasks() {
  var taskList = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectTitle()).toDoList;
  if (taskList.length === 0) {
    return;
  } else {
    taskList.forEach(function (task) {
      newTask.apply(void 0, _toConsumableArray(Object.values(task)));
    });
    document.querySelectorAll('.task-container').forEach(function (task) {
      var taskStatus = task.querySelector('.status').innerText;
      var taskName = task.querySelector('.task-name');
      if (taskStatus == 'Completed') {
        taskName.classList.toggle('checked');
      }
    });
  }
};

// PROJECT UI HANDLER

// Construct New Project
var newProject = function newProject() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Project';
  // Create Elements and Select Parent Elements
  var projectText = document.querySelector('#project-name');
  var projContainer = document.querySelector('.project-list');
  var project = document.createElement('li');
  var projectName = document.createElement('p');
  var taskList = document.querySelector('.task-list');
  var iconContainer = document.createElement('div');
  var editBtn = document.createElement('span');
  var deleteBtn = document.createElement('span');

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
  projectName.addEventListener('click', function () {
    switchProject(projectText, projectName.innerText, taskList);
  });

  // Edit This Project
  editBtn.addEventListener('click', function () {
    var editProjName = document.querySelector('#editProjName-dialog');
    var save = document.querySelector('#editProjName-dialog button#save-btn');

    // Old Node Values and Data
    var oldProjName = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectName.innerText);

    // Edit Project Name
    var projNameInput = document.querySelector('#editProjName-dialog #input-project-name');
    projNameInput.value = projectName.innerText;

    // When Saved, Invoke Changes
    function saveProject() {
      if (checkDuplicates(projNameInput.value)) {
        alert('Project name must be unique or not the same as the old one');
      } else {
        (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.editProject)(oldProjName.name, projNameInput.value);
        if (projectName.innerText == projectText.innerText) {
          projectText.innerText = projNameInput.value;
        }
        projectName.innerText = projNameInput.value;
      }
      (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateDB)();
      save.removeEventListener('click', saveProject);
    }
    save.addEventListener('click', saveProject);
    editProjName.showModal();
  });

  // Delete This Project
  deleteBtn.addEventListener('click', function () {
    var sibling = project.nextElementSibling || project.previousElementSibling;

    // After Delete, Load Previous or Next Project
    if (sibling) {
      switchProject(projectText, sibling.querySelector('p').innerText, taskList);
    } else {
      var tasks = document.querySelectorAll('.task-container');
      projectText.innerText = 'Create a Project';
      tasks.forEach(function (task) {
        taskList.removeChild(task);
      });
    }

    // Delete Project and its Node
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(project.querySelector('p').innerText);
    project.remove();
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateDB)();
  });
};

// Check Duplicates
var checkDuplicates = function checkDuplicates(projectName) {
  return (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)().some(function (obj) {
    return projectName === obj.name;
  });
};

// Get Current Project Title
var projectTitle = function projectTitle() {
  var projectTitle = document.querySelector('#project-name').innerText;
  return projectTitle;
};

// Add New Project to Project List
var addProjectToList = document.querySelector('#project-dialog #create-btn');
addProjectToList.addEventListener('click', function () {
  var projectName = document.querySelector('#input-project-name').value;
  var projectTitle = document.querySelector('#project-name');
  var taskList = document.querySelector('.task-list');
  if (!projectName) {
    alert('Project name must be filled out');
    return false;
  } else if (checkDuplicates(projectName)) {
    alert('Project name must be unique');
    return false;
  } else {
    newProject(projectName);
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectName);
    switchProject(projectTitle, projectName, taskList);
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateDB)();
  }
});

// Get Project's Task
var switchProject = function switchProject(projectTitle, newTitle, taskList) {
  var tasks = document.querySelectorAll('.task-container');
  projectTitle.innerText = newTitle;
  tasks.forEach(function (task) {
    taskList.removeChild(task);
  });
  loadTasks();
};

// Default
window.onload = function () {
  if ((0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)().length == 0) {
    var defaultTask = ['Task Title', 'Sample Description', 'No Date Set', 'Marginal', 'In progress'];
    newProject();
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)('Project');
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProject)('Project').toDoList.push(_task_js__WEBPACK_IMPORTED_MODULE_0__.createNewTask.apply(void 0, defaultTask));
    newTask.apply(void 0, _toConsumableArray(Object.values((0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProject)('Project').toDoList.at(-1))));
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateDB)();
  } else {
    var projectText = document.querySelector('#project-name');
    var taskList = document.querySelector('.task-list');
    JSON.parse(localStorage.getItem('projects')).forEach(function (project) {
      newProject(project.name);
      project.toDoList.forEach(function (task) {
        newTask.apply(void 0, _toConsumableArray(Object.values(task)));
      });
    });
    switchProject(projectText, (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[0].name, taskList);
  }
};

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   getProject: () => (/* binding */ getProject),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   updateDB: () => (/* binding */ updateDB)
/* harmony export */ });
var projects = JSON.parse(localStorage.getItem('projects')) || [];
var updateDB = function updateDB() {
  localStorage.setItem('projects', JSON.stringify(projects));
};
var createProject = function createProject(name) {
  var newProject = {};
  newProject.name = name;
  newProject.toDoList = [];
  projects.push(newProject);
  return newProject;
};
var getProjectIndex = function getProjectIndex(projectName) {
  return projects.findIndex(function (project) {
    return project.name == projectName;
  });
};
var getProject = function getProject(projectName) {
  var index = getProjectIndex(projectName);
  if (index !== -1) {
    return projects[index];
  } else {
    return index;
  }
};
var editProject = function editProject(project) {
  var thisProject = getProject(project);
  thisProject['name'] = arguments.length <= 1 ? undefined : arguments[1];
};
var deleteProject = function deleteProject(projectName) {
  projects.splice(getProjectIndex(projectName), 1);
};
var getProjects = function getProjects() {
  return projects;
};


/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewTask: () => (/* binding */ createNewTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   getTask: () => (/* binding */ getTask)
/* harmony export */ });
var createNewTask = function createNewTask(title, description, dueDate, priority, status) {
  var newTask = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    status: status
  };
  return newTask;
};
var getTaskIndex = function getTaskIndex(project, taskName, taskDescription) {
  return project.toDoList.findIndex(function (task) {
    return task.title.toLowerCase() === taskName.toLowerCase() && task.description.toLowerCase() === taskDescription.toLowerCase();
  });
};
var getTask = function getTask(project, taskName, taskDescription) {
  var index = getTaskIndex(project, taskName, taskDescription);
  if (index !== -1) {
    return project.toDoList[index];
  } else {
    return index;
  }
};
var editTask = function editTask(project, oldTaskName, oldTaskDescription) {
  var thisTask = getTask(project, oldTaskName, oldTaskDescription);
  if ((arguments.length <= 3 ? 0 : arguments.length - 3) == 1) {
    thisTask['status'] = arguments.length <= 3 ? undefined : arguments[3];
  } else {
    thisTask['title'] = arguments.length <= 3 ? undefined : arguments[3];
    thisTask['description'] = arguments.length <= 4 ? undefined : arguments[4];
    thisTask['dueDate'] = arguments.length <= 5 ? undefined : arguments[5];
    thisTask['priority'] = arguments.length <= 6 ? undefined : arguments[6];
  }
};
var deleteTask = function deleteTask(project, taskName, taskDescription) {
  project.toDoList.splice(getTaskIndex(project, taskName, taskDescription), 1);
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.js */ "./node_modules/date-fns/getDayOfYear.js");
/* harmony import */ var _getISOWeek_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.js */ "./node_modules/date-fns/getISOWeek.js");
/* harmony import */ var _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js");
/* harmony import */ var _getWeek_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.js */ "./node_modules/date-fns/getWeek.js");
/* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");
/* harmony import */ var _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js");
/* harmony import */ var _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.js */ "./node_modules/date-fns/_lib/format/lightFormatters.js");







const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, {
          width: "abbreviated"
        });
      // A, B
      case "GGGGG":
        return localize.era(era, {
          width: "narrow"
        });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: "year"
      });
    }
    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, {
        unit: "year"
      });
    }

    // Padding
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, {
          unit: "month"
        });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, {
          unit: "month"
        });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_js__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);
    if (token === "wo") {
      return localize.ordinalNumber(week, {
        unit: "week"
      });
    }
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_js__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);
    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), {
        unit: "date"
      });
    }
    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_js__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);
    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), {
        unit: "hour"
      });
    }
    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), {
        unit: "minute"
      });
    }
    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), {
        unit: "second"
      });
    }
    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(+date / 1000);
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  }
};

/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({
        width: "short"
      });
    case "PP":
      return formatLong.date({
        width: "medium"
      });
    case "PPP":
      return formatLong.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong.date({
        width: "full"
      });
  }
};
const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({
        width: "short"
      });
    case "pp":
      return formatLong.time({
        width: "medium"
      });
    case "ppp":
      return formatLong.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong.time({
        width: "full"
      });
  }
};
const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

/***/ }),

/***/ "./node_modules/date-fns/_lib/normalizeDates.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/normalizeDates.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeDates: () => (/* binding */ normalizeDates)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constructFrom.js */ "./node_modules/date-fns/constructFrom.js");

function normalizeDates(context, ...dates) {
  const normalize = _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom.bind(null, context || dates.find(date => typeof date === "object"));
  return dates.map(normalize);
}

/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

/***/ }),

/***/ "./node_modules/date-fns/constants.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFromSymbol: () => (/* binding */ constructFromSymbol),
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;

/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = Symbol.for("constructDateFrom");

/***/ }),

/***/ "./node_modules/date-fns/constructFrom.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");


/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && _constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol in date) return date[_constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);

/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js");
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfDay.js */ "./node_modules/date-fns/startOfDay.js");





/**
 * The {@link differenceInCalendarDays} function options.
 */

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(options?.in, laterDate, earlierDate);
  const laterStartOfDay = (0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(laterDate_);
  const earlierStartOfDay = (0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(earlierDate_);
  const laterTimestamp = +laterStartOfDay - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMilliseconds)(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMilliseconds)(earlierStartOfDay);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((laterTimestamp - earlierTimestamp) / _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);

/***/ }),

/***/ "./node_modules/date-fns/format.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/format.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.js */ "./node_modules/date-fns/locale/en-US.js");
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.js */ "./node_modules/date-fns/_lib/format/formatters.js");
/* harmony import */ var _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.js */ "./node_modules/date-fns/_lib/format/longFormatters.js");
/* harmony import */ var _lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.js */ "./node_modules/date-fns/_lib/protectedTokens.js");
/* harmony import */ var _isValid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.js */ "./node_modules/date-fns/isValid.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;


/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_3__.enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const originalDate = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_4__.toDate)(date, options?.in);
  if (!(0,_isValid_js__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map(substring => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(substring => {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return {
        isToken: false,
        value: "'"
      };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return {
        isToken: false,
        value: cleanEscapedString(substring)
      };
    }
    if (_lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
      return {
        isToken: true,
        value: substring
      };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return {
      isToken: false,
      value: substring
    };
  });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map(part => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token) || !options?.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token)) {
      (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
    }
    const formatter = _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);

/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.js */ "./node_modules/date-fns/differenceInCalendarDays.js");
/* harmony import */ var _startOfYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.js */ "./node_modules/date-fns/startOfYear.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link getDayOfYear} function options.
 */

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const diff = (0,_differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);

/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
/* harmony import */ var _startOfISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.js */ "./node_modules/date-fns/startOfISOWeekYear.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");





/**
 * The {@link getISOWeek} function options.
 */

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const diff = +(0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);

/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link getISOWeekYear} function options.
 */

/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);

/***/ }),

/***/ "./node_modules/date-fns/getWeek.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/getWeek.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");
/* harmony import */ var _startOfWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.js */ "./node_modules/date-fns/startOfWeekYear.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */
function getWeek(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const diff = +(0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);

/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);

/***/ }),

/***/ "./node_modules/date-fns/isAfter.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isAfter.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isAfter: () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(date, dateToCompare) {
  return +(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date) > +(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAfter);

/***/ }),

/***/ "./node_modules/date-fns/isDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/isDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);

/***/ }),

/***/ "./node_modules/date-fns/isValid.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isValid.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.js */ "./node_modules/date-fns/isDate.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  return !(!(0,_isDate_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number" || isNaN(+(0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date)));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, pattern => pattern.test(matchedString)) :
    // [TODO] -- I challenge you to fix the type
    findKey(parsePatterns, pattern => pattern.test(matchedString));
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ?
    // [TODO] -- I challenge you to fix the type
    options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];

    // [TODO] I challenge you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.js */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js");
/* harmony import */ var _en_US_lib_formatLong_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.js */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js");
/* harmony import */ var _en_US_lib_formatRelative_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.js */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js");
/* harmony import */ var _en_US_lib_localize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.js */ "./node_modules/date-fns/locale/en-US/_lib/localize.js");
/* harmony import */ var _en_US_lib_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.js */ "./node_modules/date-fns/locale/en-US/_lib/match.js");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_js__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_js__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_js__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_js__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_js__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
const formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.js */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js");

const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong = {
  date: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js");

const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
const localize = {
  ordinalNumber,
  era: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: quarter => quarter - 1
  }),
  month: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn.js");
/* harmony import */ var _lib_buildMatchPatternFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js");


const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_js__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: value => parseInt(value, 10)
  }),
  era: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: index => index + 1
  }),
  month: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

/***/ }),

/***/ "./node_modules/date-fns/parseISO.js":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/parseISO.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   parseISO: () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link parseISO} function options.
 */

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  const invalidDate = () => (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(options?.in, NaN);
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);
  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(+date)) return invalidDate();
  const timestamp = +date;
  let time = 0;
  let offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) return invalidDate();
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) return invalidDate();
  } else {
    const tmpDate = new Date(timestamp + time);
    const result = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(0, options?.in);
    result.setFullYear(tmpDate.getUTCFullYear(), tmpDate.getUTCMonth(), tmpDate.getUTCDate());
    result.setHours(tmpDate.getUTCHours(), tmpDate.getUTCMinutes(), tmpDate.getUTCSeconds(), tmpDate.getUTCMilliseconds());
    return result;
  }
  return (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(timestamp + time + offset, options?.in);
}
const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
const dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  const regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
  const captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ""
  };
  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  const captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;
  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseISO);

/***/ }),

/***/ "./node_modules/date-fns/startOfDay.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);

/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");


/**
 * The {@link startOfISOWeek} function options.
 */

/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date, options) {
  return (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, {
    ...options,
    weekStartsOn: 1
  });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);

/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");




/**
 * The {@link startOfISOWeekYear} function options.
 */

/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date, options) {
  const year = (0,_getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date, options);
  const fourthOfJanuary = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);

/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);

/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const year = (0,_getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);

/***/ }),

/***/ "./node_modules/date-fns/startOfYear.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfYear} function options.
 */

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date, options) {
  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);

/***/ }),

/***/ "./node_modules/date-fns/toDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/toDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(context || argument, argument);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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WixXQUFXQSxDQUFDdFUsSUFBSSxFQUFFaUosT0FBTyxFQUFFO0VBQ3pDLE1BQU11VyxLQUFLLEdBQUcvUSxrREFBTSxDQUFDek8sSUFBSSxFQUFFaUosT0FBTyxFQUFFcUosRUFBRSxDQUFDO0VBQ3ZDa04sS0FBSyxDQUFDN0ssV0FBVyxDQUFDNkssS0FBSyxDQUFDL1csV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzVDK1csS0FBSyxDQUFDNUssUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUMxQixPQUFPNEssS0FBSztBQUNkOztBQUVBO0FBQ0EsaUVBQWVsTCxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEN5Qjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVM3RixNQUFNQSxDQUFDb04sUUFBUSxFQUFFaFMsT0FBTyxFQUFFO0VBQ3hDO0VBQ0EsT0FBT2tGLGdFQUFhLENBQUNsRixPQUFPLElBQUlnUyxRQUFRLEVBQUVBLFFBQVEsQ0FBQztBQUNyRDs7QUFFQTtBQUNBLGlFQUFlcE4sTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9hZGRMZWFkaW5nWmVyb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9ub3JtYWxpemVEYXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9wcm90ZWN0ZWRUb2tlbnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0RnJvbS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldERheU9mWWVhci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vlay5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vla1llYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWsuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWtZZWFyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0FmdGVyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0RhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2VJU08uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vla1llYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNBZnRlciwgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2ssIGdldFRhc2ssIGVkaXRUYXNrLCBkZWxldGVUYXNrIH0gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIGdldFByb2plY3QsIGVkaXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBnZXRQcm9qZWN0cywgdXBkYXRlREJ9IGZyb20gJy4vcHJvamVjdC5qcyc7XG4vLyBpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cbi8vIERJQUxPR1NcblxuLy8gU2V0dGluZyBVcCBEaWFsb2dzXG5mdW5jdGlvbiBzZXR1cERpYWxvZyhvcGVuQnRuU2VsZWN0b3IsIGRpYWxvZ1NlbGVjdG9yLCBjbG9zZUJ0blNlbGVjdG9yKSB7XG4gICAgLy8gU2VsZWN0IERpYWxvZyBFbGVtZW50c1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGlhbG9nU2VsZWN0b3IpO1xuICAgIGNvbnN0IG9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wZW5CdG5TZWxlY3Rvcik7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkaWFsb2cucXVlcnlTZWxlY3RvcihjbG9zZUJ0blNlbGVjdG9yKTtcbiAgICBjb25zdCBmb3JtID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTsgXG5cblxuICAgIC8vIERpYWxvZyBPcGVuIGFuZCBDbG9zZSBGdW5jdGlvbnNcbiAgICBpZiAob3BlbkJ0biAmJiBkaWFsb2cgJiYgY2xvc2VCdG4pIHtcbiAgICAgICAgb3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKG9wZW5CdG5TZWxlY3RvciA9PT0gJyNhZGQtdGFzay1idG4nICYmIGdldFByb2plY3RzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ011c3QgYXQgbGVhc3QgY3JlYXRlIG9uZSBwcm9qZWN0IGZpcnN0IGJlZm9yZSBjcmVhdGluZyBhIHRhc2snKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICBpZiAoZm9ybSkge1xuICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIFxuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgaWYgKGZvcm0pIHtcbiAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8gQ3JlYXRlIERpYWxvZ3NcbnNldHVwRGlhbG9nKCcjY3JlYXRlLXByb2plY3QtYnRuJywgJyNwcm9qZWN0LWRpYWxvZycsICdidXR0b24jY2FuY2VsLWJ0bicpO1xuc2V0dXBEaWFsb2coJyNhZGQtdGFzay1idG4nLCAnI3Rhc2stZGlhbG9nJywgJ2J1dHRvbiNjYW5jZWwtYnRuJyk7XG5cbi8vIEdldCBJbnB1dHMgZnJvbSBEaWFsb2dcbmNvbnN0IGdldFRhc2tJbnB1dHMgPSAoZGlhbG9nKSA9PiB7XG4gICAgLy8gQmFzZSBEaWFsb2dcbiAgICBjb25zdCBkaWFsb2dTZWxlY3RvciA9IGAjJHtkaWFsb2d9LWRpYWxvZ2A7XG5cbiAgICAvLyBHZXQgSW5wdXQgVmFsdWVzXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2RpYWxvZ1NlbGVjdG9yfSAjaW5wdXQtdGFzay1uYW1lYCkudmFsdWU7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtkaWFsb2dTZWxlY3Rvcn0gI2lucHV0LWRlc2NyaXB0aW9uYCkudmFsdWU7XG4gICAgY29uc3QgdGFza0RlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtkaWFsb2dTZWxlY3Rvcn0gaW5wdXQjaW5wdXQtZGVhZGxpbmVgKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2RpYWxvZ1NlbGVjdG9yfSBpbnB1dFtuYW1lPVwiaW1wb3J0YW5jZVwiXTpjaGVja2VkYCkudmFsdWU7XG5cbiAgICAvLyBWYWxpZGF0ZSBSZXF1aXJlZCBGaWVsZHNcbiAgICBpZiAoIXRhc2tOYW1lIHx8ICF0YXNrRGVzY3JpcHRpb24pIHtcbiAgICAgICAgYWxlcnQoJ1Rhc2sgTmFtZSBhbmQgRGVzY3JpcHRpb24gbXVzdCBiZSBmaWxsZWQgb3V0Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBQcm9jZXNzIERhdGUgYW5kIFN0YXR1c1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gdGFza0RlYWRsaW5lID8gZm9ybWF0KHBhcnNlSVNPKHRhc2tEZWFkbGluZSksICdNTS1kZC15eXl5IEhIOm1tIGEnKSA6ICdObyBEYXRlIFNldCc7XG4gICAgY29uc3Qgc3RhdHVzID0gdGFza0RlYWRsaW5lICYmIGlzQWZ0ZXIodG9kYXksIHBhcnNlSVNPKHRhc2tEZWFkbGluZSkpID8gJ0xhdGUnIDogJ0luIFByb2dyZXNzJztcblxuICAgIC8vIFJldHVybiBUYXNrIERhdGFcbiAgICByZXR1cm4gW3Rhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIGZvcm1hdHRlZERhdGUsIHRhc2tQcmlvcml0eSwgc3RhdHVzXTtcbn1cblxuLy8gVEFTSyBVSSBIQU5ETEVSXG5cbi8vIENvbnN0cnVjdCBOZXcgVGFza1xuY29uc3QgbmV3VGFzayA9IChuYW1lLCBkZXNjcmlwdGlvbiwgZm9ybWF0dGVkRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykgPT4ge1xuICAgIC8vIENyZWF0ZSBUYXNrIEVsZW1lbnRzXG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgdGFza0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdGFza1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgZHJvcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy8gQWRkIENsYXNzIHRvIFRhc2sgRWxlbWVudHNcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgdGFza0hlYWQuY2xhc3NMaXN0LmFkZCgndGFzay1oZWFkJyk7XG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgIHRhc2tCb2R5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYm9keScpO1xuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZCgnc3RhdHVzJyk7XG4gICAgZHJvcEJ0bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1idG4nKTtcbiAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgXG4gICAgLy8gQWRkIFRleHQgQ29udGVudCBpbiBUYXNrIEVsZW1lbnRzXG4gICAgdGFza05hbWUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZTogICc7XG4gICAgZGF0ZS5pbm5lclRleHQgPSBmb3JtYXR0ZWREYXRlO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICB0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID0gcHJpb3JpdHk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xuICAgIHN0YXR1c0xhYmVsLmlubmVyVGV4dCA9ICdTdGF0dXM6ICAnO1xuICAgIHRhc2tTdGF0dXMuaW5uZXJUZXh0ID0gc3RhdHVzO1xuICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gJ2VkaXQnO1xuICAgIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSAnZGVsZXRlJztcbiAgICBkcm9wQnRuLnRleHRDb250ZW50ID0gJ+KWvCc7XG5cbiAgICAvLyBBcHBlbmQgRWxlbWVudHNcbiAgICB0YXNrSGVhZC5hcHBlbmQodGFza05hbWUsIGRhdGVMYWJlbCk7XG4gICAgZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIHRhc2tCb2R5LmFwcGVuZChkZXNjcmlwdGlvbkxhYmVsLCB0YXNrUHJpb3JpdHksIHRhc2tEZXNjcmlwdGlvbiwgaWNvbkNvbnRhaW5lciwgc3RhdHVzTGFiZWwpO1xuICAgIGljb25Db250YWluZXIuYXBwZW5kKGVkaXRCdG4sIGRlbGV0ZUJ0bik7XG4gICAgc3RhdHVzTGFiZWwuYXBwZW5kQ2hpbGQodGFza1N0YXR1cyk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQodGFza0hlYWQsIHRhc2tCb2R5LCBkcm9wQnRuKTtcbiAgICB0YXNrTGlzdC5wcmVwZW5kKHRhc2tDb250YWluZXIpO1xuXG4gICAgLy8gU2V0IFRhc2sgUHJpb3JpdHkgQ29sb3JcbiAgICBwcmlvcml0eUNvbG9yKHRhc2tQcmlvcml0eSwgdGFza05hbWUpO1xuXG4gICAgLy8gRXhwYW5kIFRhc2sgRGV0YWlsc1xuICAgIGRyb3BCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh0YXNrQm9keS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgIXRhc2tCb2R5LnN0eWxlLmRpc3BsYXkpIHtcbiAgICAgICAgICAgIHRhc2tCb2R5LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgICAgICAgICBkcm9wQnRuLnRleHRDb250ZW50ID0gJ+KWsic7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza0JvZHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGRyb3BCdG4udGV4dENvbnRlbnQgPSAn4pa8JzsgXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRvZ2dsZSBUYXNrIFN0YXR1c1xuICAgIHRhc2tOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgaWYodGFza05hbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgIHRhc2tTdGF0dXMuaW5uZXJUZXh0ID0gJ0NvbXBsZXRlZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrU3RhdHVzLmlubmVyVGV4dCA9ICdJbiBQcm9ncmVzcyc7IFxuICAgICAgICB9XG5cbiAgICAgICAgZWRpdFRhc2soZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUoKSksIHRhc2tOYW1lLmlubmVyVGV4dCwgdGFza0Rlc2NyaXB0aW9uLmlubmVyVGV4dCwgdGFza1N0YXR1cy5pbm5lclRleHQpO1xuICAgICAgICB1cGRhdGVEQigpO1xuICAgIH0pO1xuXG4gICAgLy8gRWRpdCBUaGlzIFRhc2tcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEVkaXQgVGFzayBEaWFsb2dcbiAgICAgICAgY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRpYWxvZycpO1xuICAgICAgICBjb25zdCBzYXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGlhbG9nIGJ1dHRvbiNzYXZlLWJ0bicpO1xuXG4gICAgICAgIC8vIFN0b3JlIFRhc2sgTm9kZXMgYW5kIERhdGEgVGVtcG9yYXJpbHlcbiAgICAgICAgY29uc3Qgb2xkRGF0YSA9IGdldFRhc2soZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUoKSksIHRhc2tOYW1lLmlubmVyVGV4dCwgdGFza0Rlc2NyaXB0aW9uLmlubmVyVGV4dCk7XG4gICAgICAgIGNvbnN0IHRhc2tDb21wb25lbnRzID0gW3Rhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIGRhdGUsIHRhc2tQcmlvcml0eV07XG5cbiAgICAgICAgLy8gR2V0IEVkaXQgVGFzayBJbnB1dCBOb2Rlc1xuICAgICAgICBjb25zdCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRpYWxvZyAjaW5wdXQtdGFzay1uYW1lJylcbiAgICAgICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGlhbG9nICNpbnB1dC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRpYWxvZyAuY3VycmVudC1kYXRlJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNlZGl0LWRpYWxvZyBpbnB1dFtuYW1lPVwiaW1wb3J0YW5jZVwiXScpO1xuXG4gICAgICAgIC8vIEdldCBDdXJyZW50IE5vZGUgVmFsdWVzXG4gICAgICAgIG5ld1Rhc2tOYW1lLnZhbHVlID0gdGFza05hbWUuaW5uZXJUZXh0O1xuICAgICAgICBuZXdUYXNrRGVzY3JpcHRpb24udmFsdWUgPSB0YXNrRGVzY3JpcHRpb24uaW5uZXJUZXh0O1xuICAgICAgICBuZXdUYXNrRGF0ZS5pbm5lclRleHQgPSBkYXRlLmlubmVyVGV4dDtcbiAgICAgICAgZm9yIChsZXQgY3VycmVudFRhc2tQcmlvcml0eSBvZiBuZXdUYXNrUHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGlmKHRhc2tQcmlvcml0eS5pbm5lclRleHQgPT0gY3VycmVudFRhc2tQcmlvcml0eS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gU2F2ZWQsIEVkaXQgTm9kZSBhbmQgVGFzayBpbiBQcm9qZWN0IFRvIERvIExpc3RcbiAgICAgICAgZnVuY3Rpb24gc2F2ZVRhc2soKSB7XG4gICAgICAgICAgICBpZihnZXRUYXNrSW5wdXRzKCdlZGl0JykgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlZGl0VGFzayhnZXRQcm9qZWN0KHByb2plY3RUaXRsZSgpKSwgb2xkRGF0YVsndGl0bGUnXSwgb2xkRGF0YVsnZGVzY3JpcHRpb24nXSwgLi4uZ2V0VGFza0lucHV0cygnZWRpdCcpKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFza0NvbXBvbmVudHNbaV0uaW5uZXJUZXh0ID0gZ2V0VGFza0lucHV0cygnZWRpdCcpW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJpb3JpdHlDb2xvcih0YXNrUHJpb3JpdHksIHRhc2tOYW1lKTtcbiAgICAgICAgICAgIHVwZGF0ZURCKCk7XG4gICAgICAgICAgICBzYXZlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVRhc2spO1xuICAgICAgICB9XG4gICAgICAgIHNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlVGFzayk7XG5cbiAgICAgICAgZWRpdERpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIC8vIERlbGV0ZSBUaGlzIFRhc2tcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRGVsZXRlIE5vZGUgYW5kIFJlbW92ZSBpbiBQcm9qZWN0IFRvIERvIExpc3RcbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlVGFzayhnZXRQcm9qZWN0KHByb2plY3RUaXRsZSgpKSwgdGFza05hbWUuaW5uZXJUZXh0LCB0YXNrRGVzY3JpcHRpb24uaW5uZXJUZXh0KTtcbiAgICAgICAgdXBkYXRlREIoKTtcbiAgICB9KTtcbn1cblxuLy8gQ2hhbmdlIFRhc2sgQ29sb3IgVGhlbWUgQmFzZWQgb24gUHJpb3JpdHlcbmNvbnN0IHByaW9yaXR5Q29sb3IgPSAodGFza1ByaW9yaXR5LCB0YXNrTmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tIZWFkID0gdGFza05hbWUucGFyZW50RWxlbWVudDtcbiAgICBpZih0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID09ICdNYXJnaW5hbCcpIHtcbiAgICAgICAgdGFza1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gJyMxY2QxMzEnO1xuICAgICAgICB0YXNrSGVhZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzFjZDEzMSc7XG4gICAgfSBlbHNlIGlmICh0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID09ICdNb2RlcmF0ZScpIHtcbiAgICAgICAgdGFza1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gJyNGRkMwMDAnO1xuICAgICAgICB0YXNrSGVhZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGQzAwMCc7XG4gICAgfSBlbHNlIGlmICh0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID09ICdDcml0aWNhbCcpIHtcbiAgICAgICAgdGFza1ByaW9yaXR5LnN0eWxlLmNvbG9yID0gJyNmZjMwMzAnO1xuICAgICAgICB0YXNrSGVhZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmMzAzMCc7XG4gICAgfSAgICAgICAgXG59XG5cbi8vIEFkZCBUYXNrIHRvIFByb2plY3RcbmNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kaWFsb2cgYnV0dG9uI3N1Ym1pdC1idG4nKTtcbmFkZFRhc2tUb1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUoKSkudG9Eb0xpc3QucHVzaChjcmVhdGVOZXdUYXNrKC4uLmdldFRhc2tJbnB1dHMoJ3Rhc2snKSkpO1xuICAgIG5ld1Rhc2soLi4uT2JqZWN0LnZhbHVlcyhnZXRQcm9qZWN0KHByb2plY3RUaXRsZSgpKS50b0RvTGlzdC5hdCgtMSkpKTtcbiAgICB1cGRhdGVEQigpO1xufSk7XG5cbi8vIExvYWQgVGFzayBmcm9tIFNlbGVjdGVkIFByb2plY3RcbmNvbnN0IGxvYWRUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGdldFByb2plY3QocHJvamVjdFRpdGxlKCkpLnRvRG9MaXN0O1xuICAgIGlmKHRhc2tMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgbmV3VGFzayguLi5PYmplY3QudmFsdWVzKHRhc2spKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNvbnRhaW5lcicpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tTdGF0dXMgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpO1xuICAgICAgICAgICAgaWYodGFza1N0YXR1cyA9PSAnQ29tcGxldGVkJykge1xuICAgICAgICAgICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vLyBQUk9KRUNUIFVJIEhBTkRMRVJcblxuLy8gQ29uc3RydWN0IE5ldyBQcm9qZWN0XG5jb25zdCBuZXdQcm9qZWN0ID0gKHRpdGxlID0gJ1Byb2plY3QnKSA9PiB7XG4gICAgLy8gQ3JlYXRlIEVsZW1lbnRzIGFuZCBTZWxlY3QgUGFyZW50IEVsZW1lbnRzXG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcbiAgICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAvLyBDcmVhdGVkIEVsZW1lbnRzIFRleHQgVmFsdWVzXG4gICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgZWRpdEJ0bi5pbm5lclRleHQgPSAnZWRpdCc7XG4gICAgZGVsZXRlQnRuLmlubmVyVGV4dCA9ICdkZWxldGUnO1xuXG4gICAgLy8gQ2xhc3MgdG8gUHJvamVjdCBFbGVtZW50c1xuICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaWNvbnMnKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcblxuICAgIC8vIEFkZCBFbGVtZW50cyB0byB0aGVpciBQZXJzcGVjdGl2ZSBDb250YWluZXJzXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChpY29uQ29udGFpbmVyKTtcbiAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgLy8gTG9hZCB0aGlzIFByb2plY3QncyBUYXNrXG4gICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN3aXRjaFByb2plY3QocHJvamVjdFRleHQsIHByb2plY3ROYW1lLmlubmVyVGV4dCwgdGFza0xpc3QpO1xuICAgIH0pO1xuXG4gICAgLy8gRWRpdCBUaGlzIFByb2plY3RcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGVkaXRQcm9qTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0UHJvak5hbWUtZGlhbG9nJyk7XG4gICAgICAgIGNvbnN0IHNhdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFByb2pOYW1lLWRpYWxvZyBidXR0b24jc2F2ZS1idG4nKTtcblxuICAgICAgICAvLyBPbGQgTm9kZSBWYWx1ZXMgYW5kIERhdGFcbiAgICAgICAgY29uc3Qgb2xkUHJvak5hbWUgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lLmlubmVyVGV4dCk7XG5cbiAgICAgICAgLy8gRWRpdCBQcm9qZWN0IE5hbWVcbiAgICAgICAgY29uc3QgcHJvak5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0UHJvak5hbWUtZGlhbG9nICNpbnB1dC1wcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgcHJvak5hbWVJbnB1dC52YWx1ZSA9IHByb2plY3ROYW1lLmlubmVyVGV4dDtcblxuICAgICAgICAvLyBXaGVuIFNhdmVkLCBJbnZva2UgQ2hhbmdlc1xuICAgICAgICBmdW5jdGlvbiBzYXZlUHJvamVjdCgpIHtcbiAgICAgICAgICAgIGlmIChjaGVja0R1cGxpY2F0ZXMocHJvak5hbWVJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnUHJvamVjdCBuYW1lIG11c3QgYmUgdW5pcXVlIG9yIG5vdCB0aGUgc2FtZSBhcyB0aGUgb2xkIG9uZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZGl0UHJvamVjdChvbGRQcm9qTmFtZS5uYW1lLCBwcm9qTmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0TmFtZS5pbm5lclRleHQgPT0gcHJvamVjdFRleHQuaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUZXh0LmlubmVyVGV4dCA9IHByb2pOYW1lSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IHByb2pOYW1lSW5wdXQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVEQigpO1xuICAgICAgICAgICAgc2F2ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVByb2plY3QpO1xuXG4gICAgICAgIGVkaXRQcm9qTmFtZS5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIC8vIERlbGV0ZSBUaGlzIFByb2plY3RcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2libGluZyA9IHByb2plY3QubmV4dEVsZW1lbnRTaWJsaW5nIHx8IHByb2plY3QucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgXG4gICAgICAgIC8vIEFmdGVyIERlbGV0ZSwgTG9hZCBQcmV2aW91cyBvciBOZXh0IFByb2plY3RcbiAgICAgICAgaWYoc2libGluZyl7XG4gICAgICAgICAgICBzd2l0Y2hQcm9qZWN0KHByb2plY3RUZXh0LCBzaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJ3AnKS5pbm5lclRleHQsIHRhc2tMaXN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgICAgICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSAnQ3JlYXRlIGEgUHJvamVjdCc7XG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2tMaXN0LnJlbW92ZUNoaWxkKHRhc2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gRGVsZXRlIFByb2plY3QgYW5kIGl0cyBOb2RlXG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdC5xdWVyeVNlbGVjdG9yKCdwJykuaW5uZXJUZXh0KTtcbiAgICAgICAgcHJvamVjdC5yZW1vdmUoKTtcbiAgICAgICAgdXBkYXRlREIoKTtcbiAgICB9KTtcbn0gXG5cbi8vIENoZWNrIER1cGxpY2F0ZXNcbmNvbnN0IGNoZWNrRHVwbGljYXRlcyA9IHByb2plY3ROYW1lID0+IHtcbiAgICByZXR1cm4gZ2V0UHJvamVjdHMoKS5zb21lKG9iaiA9PiBwcm9qZWN0TmFtZSA9PT0gb2JqLm5hbWUpO1xufVxuXG4vLyBHZXQgQ3VycmVudCBQcm9qZWN0IFRpdGxlXG5jb25zdCBwcm9qZWN0VGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpLmlubmVyVGV4dDtcbiAgICByZXR1cm4gcHJvamVjdFRpdGxlO1xufVxuXG4vLyBBZGQgTmV3IFByb2plY3QgdG8gUHJvamVjdCBMaXN0XG5jb25zdCBhZGRQcm9qZWN0VG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGlhbG9nICNjcmVhdGUtYnRuJyk7XG5hZGRQcm9qZWN0VG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LXByb2plY3QtbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcbiAgICBcbiAgICBpZiAoIXByb2plY3ROYW1lKSB7XG4gICAgICAgIGFsZXJ0KCdQcm9qZWN0IG5hbWUgbXVzdCBiZSBmaWxsZWQgb3V0Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGNoZWNrRHVwbGljYXRlcyhwcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgYWxlcnQoJ1Byb2plY3QgbmFtZSBtdXN0IGJlIHVuaXF1ZScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBzd2l0Y2hQcm9qZWN0KHByb2plY3RUaXRsZSwgcHJvamVjdE5hbWUsIHRhc2tMaXN0KTtcbiAgICAgICAgdXBkYXRlREIoKTtcbiAgICB9XG59KTtcblxuLy8gR2V0IFByb2plY3QncyBUYXNrXG5jb25zdCBzd2l0Y2hQcm9qZWN0ID0gKHByb2plY3RUaXRsZSwgbmV3VGl0bGUsIHRhc2tMaXN0KSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jb250YWluZXInKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gbmV3VGl0bGU7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFza0xpc3QucmVtb3ZlQ2hpbGQodGFzayk7XG4gICAgfSlcbiAgICBsb2FkVGFza3MoKTtcbn1cblxuLy8gRGVmYXVsdFxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKGdldFByb2plY3RzKCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFRhc2sgPSBbJ1Rhc2sgVGl0bGUnLCAnU2FtcGxlIERlc2NyaXB0aW9uJywgJ05vIERhdGUgU2V0JywgJ01hcmdpbmFsJywgJ0luIHByb2dyZXNzJ107XG4gICAgICAgIG5ld1Byb2plY3QoKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdCgnUHJvamVjdCcpO1xuICAgICAgICBnZXRQcm9qZWN0KCdQcm9qZWN0JykudG9Eb0xpc3QucHVzaChjcmVhdGVOZXdUYXNrKC4uLmRlZmF1bHRUYXNrKSk7XG4gICAgICAgIG5ld1Rhc2soLi4uT2JqZWN0LnZhbHVlcyhnZXRQcm9qZWN0KCdQcm9qZWN0JykudG9Eb0xpc3QuYXQoLTEpKSk7XG4gICAgICAgIHVwZGF0ZURCKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xuICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0KHByb2plY3QubmFtZSk7XG4gICAgICAgICAgICBwcm9qZWN0LnRvRG9MaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBuZXdUYXNrKC4uLk9iamVjdC52YWx1ZXModGFzaykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzd2l0Y2hQcm9qZWN0KHByb2plY3RUZXh0LCBnZXRQcm9qZWN0cygpWzBdLm5hbWUsIHRhc2tMaXN0KTtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcclxuXHJcbmNvbnN0IHVwZGF0ZURCID0gKCkgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcclxuICAgICAgbGV0IG5ld1Byb2plY3QgPSB7fTtcclxuXHJcbiAgICAgIG5ld1Byb2plY3QubmFtZSA9IG5hbWU7XHJcbiAgICAgIG5ld1Byb2plY3QudG9Eb0xpc3QgPSBbXTtcclxuICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xyXG59XHJcblxyXG5jb25zdCBnZXRQcm9qZWN0SW5kZXggPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgcmV0dXJuIHByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gZ2V0UHJvamVjdEluZGV4KHByb2plY3ROYW1lKTtcclxuICAgICAgaWYoaW5kZXggIT09IC0xKXtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzW2luZGV4XTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgfVxyXG59XHJcblxyXG5jb25zdCBlZGl0UHJvamVjdCA9IChwcm9qZWN0LCAuLi5uZXdWYWx1ZXMpID0+IHtcclxuICAgICAgbGV0IHRoaXNQcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0KTtcclxuXHJcbiAgICAgIHRoaXNQcm9qZWN0WyduYW1lJ10gPSBuZXdWYWx1ZXNbMF07XHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgcHJvamVjdHMuc3BsaWNlKGdldFByb2plY3RJbmRleChwcm9qZWN0TmFtZSksIDEpO1xyXG59XHJcblxyXG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZVByb2plY3QsIGdldFByb2plY3QsIGVkaXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBnZXRQcm9qZWN0cywgdXBkYXRlREJ9O1xyXG4iLCJjb25zdCBjcmVhdGVOZXdUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykgPT4ge1xyXG4gICAgICBsZXQgbmV3VGFzayA9IHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICAgICAgc3RhdHVzXHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gbmV3VGFzaztcclxufVxyXG5cclxuY29uc3QgZ2V0VGFza0luZGV4ID0gKHByb2plY3QsIHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHByb2plY3QudG9Eb0xpc3QuZmluZEluZGV4KHRhc2sgPT4gdGFzay50aXRsZS50b0xvd2VyQ2FzZSgpID09PSB0YXNrTmFtZS50b0xvd2VyQ2FzZSgpICYmIHRhc2suZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKSA9PT0gdGFza0Rlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcblxyXG5jb25zdCBnZXRUYXNrID0gKHByb2plY3QsIHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gZ2V0VGFza0luZGV4KHByb2plY3QsIHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgICBpZihpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdC50b0RvTGlzdFtpbmRleF07XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGVkaXRUYXNrID0gKHByb2plY3QsIG9sZFRhc2tOYW1lLCBvbGRUYXNrRGVzY3JpcHRpb24sIC4uLm5ld1ZhbHVlcykgPT4ge1xyXG4gICAgICBsZXQgdGhpc1Rhc2sgPSBnZXRUYXNrKHByb2plY3QsIG9sZFRhc2tOYW1lLCBvbGRUYXNrRGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgaWYobmV3VmFsdWVzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXNUYXNrWydzdGF0dXMnXSA9IG5ld1ZhbHVlc1swXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpc1Rhc2tbJ3RpdGxlJ10gPSBuZXdWYWx1ZXNbMF07XHJcbiAgICAgICAgICAgIHRoaXNUYXNrWydkZXNjcmlwdGlvbiddID0gbmV3VmFsdWVzWzFdO1xyXG4gICAgICAgICAgICB0aGlzVGFza1snZHVlRGF0ZSddID0gbmV3VmFsdWVzWzJdO1xyXG4gICAgICAgICAgICB0aGlzVGFza1sncHJpb3JpdHknXSA9IG5ld1ZhbHVlc1szXTtcclxuICAgICAgfVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVUYXNrID0gKHByb2plY3QsIHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgcHJvamVjdC50b0RvTGlzdC5zcGxpY2UoZ2V0VGFza0luZGV4KHByb2plY3QsIHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24pLCAxKTtcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVOZXdUYXNrLCBnZXRUYXNrLCBlZGl0VGFzaywgZGVsZXRlVGFza307XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gXCIuLi8uLi9nZXREYXlPZlllYXIuanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vlay5qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vla1llYXIuanNcIjtcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vlay5qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vla1llYXIuanNcIjtcblxuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5qc1wiO1xuaW1wb3J0IHsgbGlnaHRGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vbGlnaHRGb3JtYXR0ZXJzLmpzXCI7XG5cbmNvbnN0IGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiBcImFtXCIsXG4gIHBtOiBcInBtXCIsXG4gIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gIG5vb246IFwibm9vblwiLFxuICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgbmlnaHQ6IFwibmlnaHRcIixcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG5leHBvcnQgY29uc3QgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBlcmEgPSBkYXRlLmdldEZ1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlIFwiR1wiOlxuICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICBjYXNlIFwiR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcImFiYnJldmlhdGVkXCIgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwibmFycm93XCIgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSBcIkdHR0dcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIndpZGVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwieW9cIikge1xuICAgICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2lnbmVkV2Vla1llYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gXCJZWVwiKSB7XG4gICAgICBjb25zdCB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJZb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBpc29XZWVrWWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwiUVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJRUVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwiUW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwiUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcIlFRUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJxb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwicXFxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwicXFxcVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTG9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgd2VlayA9IGdldFdlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwid29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaXNvV2VlayA9IGdldElTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiSW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0RGF0ZSgpLCB7IHVuaXQ6IFwiZGF0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJEb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHsgdW5pdDogXCJkYXlPZlllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiRUVcIjpcbiAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiRUVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSBcImVcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiZWVcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJlb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJlZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJlZWVlXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImNjXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJjb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImNjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJjY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgXCJpb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJpaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJpaWlpXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYlwiOlxuICAgICAgY2FzZSBcImJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJiYmJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJiXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIkJcIjpcbiAgICAgIGNhc2UgXCJCQlwiOlxuICAgICAgY2FzZSBcIkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJob1wiKSB7XG4gICAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJIb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldEhvdXJzKCksIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJLb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSBcImtvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwibW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCksIHsgdW5pdDogXCJtaW51dGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcInNvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCB7IHVuaXQ6IFwic2Vjb25kXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gXCJaXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgXCJYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgXCJYWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgXCJ4eHh4XCI6XG4gICAgICBjYXNlIFwieHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgXCJ4eHh4eFwiOlxuICAgICAgY2FzZSBcInh4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJPXCI6XG4gICAgICBjYXNlIFwiT09cIjpcbiAgICAgIGNhc2UgXCJPT09cIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwiT09PT1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICBjYXNlIFwienpcIjpcbiAgICAgIGNhc2UgXCJ6enpcIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwienp6elwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IE1hdGgudHJ1bmMoK2RhdGUgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcygrZGF0ZSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKTtcbiAgY29uc3QgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKSwgMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbiIsImltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MuanNcIjtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZ2h0Rm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09IFwieXlcIiA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09IFwiTVwiID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0RGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldEhvdXJzKCkgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSBcImFtXCIgPyBcImEubS5cIiA6IFwicC5tLlwiO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0TWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFNlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUyhkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgY29uc3QgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLnRydW5jKFxuICAgICAgbWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMyksXG4gICAgKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcbiIsImNvbnN0IGRhdGVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgdGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwicFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcInBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcInBwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwicHBwcFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBjb25zdCBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICBjb25zdCBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICBjb25zdCB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICBsZXQgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0XG4gICAgLnJlcGxhY2UoXCJ7e2RhdGV9fVwiLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpXG4gICAgLnJlcGxhY2UoXCJ7e3RpbWV9fVwiLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBfZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgX2RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIF9kYXRlLmdldERhdGUoKSxcbiAgICAgIF9kYXRlLmdldEhvdXJzKCksXG4gICAgICBfZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBfZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gK2RhdGUgLSArdXRjRGF0ZTtcbn1cbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vY29uc3RydWN0RnJvbS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRGF0ZXMoY29udGV4dCwgLi4uZGF0ZXMpIHtcbiAgY29uc3Qgbm9ybWFsaXplID0gY29uc3RydWN0RnJvbS5iaW5kKFxuICAgIG51bGwsXG4gICAgY29udGV4dCB8fCBkYXRlcy5maW5kKChkYXRlKSA9PiB0eXBlb2YgZGF0ZSA9PT0gXCJvYmplY3RcIiksXG4gICk7XG4gIHJldHVybiBkYXRlcy5tYXAobm9ybWFsaXplKTtcbn1cbiIsImNvbnN0IGRheU9mWWVhclRva2VuUkUgPSAvXkQrJC87XG5jb25zdCB3ZWVrWWVhclRva2VuUkUgPSAvXlkrJC87XG5cbmNvbnN0IHRocm93VG9rZW5zID0gW1wiRFwiLCBcIkREXCIsIFwiWVlcIiwgXCJZWVlZXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gZGF5T2ZZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gd2Vla1llYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBfbWVzc2FnZSA9IG1lc3NhZ2UodG9rZW4sIGZvcm1hdCwgaW5wdXQpO1xuICBjb25zb2xlLndhcm4oX21lc3NhZ2UpO1xuICBpZiAodGhyb3dUb2tlbnMuaW5jbHVkZXModG9rZW4pKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihfbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3Qgc3ViamVjdCA9IHRva2VuWzBdID09PSBcIllcIiA/IFwieWVhcnNcIiA6IFwiZGF5cyBvZiB0aGUgbW9udGhcIjtcbiAgcmV0dXJuIGBVc2UgXFxgJHt0b2tlbi50b0xvd2VyQ2FzZSgpfVxcYCBpbnN0ZWFkIG9mIFxcYCR7dG9rZW59XFxgIChpbiBcXGAke2Zvcm1hdH1cXGApIGZvciBmb3JtYXR0aW5nICR7c3ViamVjdH0gdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNpYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzaWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgY29uc3RydWN0RnJvbVN5bWJvbFxuICogQHN1bW1hcnkgU3ltYm9sIGVuYWJsaW5nIERhdGUgZXh0ZW5zaW9ucyB0byBpbmhlcml0IHByb3BlcnRpZXMgZnJvbSB0aGUgcmVmZXJlbmNlIGRhdGUuXG4gKlxuICogVGhlIHN5bWJvbCBpcyB1c2VkIHRvIGVuYWJsZSB0aGUgYGNvbnN0cnVjdEZyb21gIGZ1bmN0aW9uIHRvIGNvbnN0cnVjdCBhIGRhdGVcbiAqIHVzaW5nIGEgcmVmZXJlbmNlIGRhdGUgYW5kIGEgdmFsdWUuIEl0IGFsbG93cyB0byB0cmFuc2ZlciBleHRyYSBwcm9wZXJ0aWVzXG4gKiBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZSB0byB0aGUgbmV3IGRhdGUuIEl0J3MgdXNlZnVsIGZvciBleHRlbnNpb25zIGxpa2VcbiAqIFtgVFpEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3R6KSB0aGF0IGFjY2VwdCBhIHRpbWUgem9uZSBhc1xuICogYSBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdEZyb21TeW1ib2wgPSBTeW1ib2wuZm9yKFwiY29uc3RydWN0RGF0ZUZyb21cIik7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tU3ltYm9sIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIFN0YXJ0aW5nIGZyb20gdjMuNy4wLCBpdCBhbGxvd3MgdG8gY29uc3RydWN0IGEgZGF0ZSB1c2luZyBgW1N5bWJvbC5mb3IoXCJjb25zdHJ1Y3REYXRlRnJvbVwiKV1gXG4gKiBlbmFibGluZyB0byB0cmFuc2ZlciBleHRyYSBwcm9wZXJ0aWVzIGZyb20gdGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRoZSBuZXcgZGF0ZS5cbiAqIEl0J3MgdXNlZnVsIGZvciBleHRlbnNpb25zIGxpa2UgW2BUWkRhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdHopXG4gKiB0aGF0IGFjY2VwdCBhIHRpbWUgem9uZSBhcyBhIGNvbnN0cnVjdG9yIGFyZ3VtZW50LlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tL2RhdGUtZm5zXCI7XG4gKlxuICogLy8gQSBmdW5jdGlvbiB0aGF0IGNsb25lcyBhIGRhdGUgcHJlc2VydmluZyB0aGUgb3JpZ2luYWwgdHlwZVxuICogZnVuY3Rpb24gY2xvbmVEYXRlPERhdGVUeXBlIGV4dGVuZHMgRGF0ZT4oZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb25zdHJ1Y3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgICk7XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZGF0ZSh2YWx1ZSk7XG5cbiAgaWYgKGRhdGUgJiYgdHlwZW9mIGRhdGUgPT09IFwib2JqZWN0XCIgJiYgY29uc3RydWN0RnJvbVN5bWJvbCBpbiBkYXRlKVxuICAgIHJldHVybiBkYXRlW2NvbnN0cnVjdEZyb21TeW1ib2xdKHZhbHVlKTtcblxuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHJldHVybiBuZXcgZGF0ZS5jb25zdHJ1Y3Rvcih2YWx1ZSk7XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5qc1wiO1xuaW1wb3J0IHsgbm9ybWFsaXplRGF0ZXMgfSBmcm9tIFwiLi9fbGliL25vcm1hbGl6ZURhdGVzLmpzXCI7XG5pbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEBwYXJhbSBsYXRlckRhdGUgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGVhcmxpZXJEYXRlIC0gVGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMobGF0ZXJEYXRlLCBlYXJsaWVyRGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBbbGF0ZXJEYXRlXywgZWFybGllckRhdGVfXSA9IG5vcm1hbGl6ZURhdGVzKFxuICAgIG9wdGlvbnM/LmluLFxuICAgIGxhdGVyRGF0ZSxcbiAgICBlYXJsaWVyRGF0ZSxcbiAgKTtcblxuICBjb25zdCBsYXRlclN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGxhdGVyRGF0ZV8pO1xuICBjb25zdCBlYXJsaWVyU3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZWFybGllckRhdGVfKTtcblxuICBjb25zdCBsYXRlclRpbWVzdGFtcCA9XG4gICAgK2xhdGVyU3RhcnRPZkRheSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMobGF0ZXJTdGFydE9mRGF5KTtcbiAgY29uc3QgZWFybGllclRpbWVzdGFtcCA9XG4gICAgK2VhcmxpZXJTdGFydE9mRGF5IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhlYXJsaWVyU3RhcnRPZkRheSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoKGxhdGVyVGltZXN0YW1wIC0gZWFybGllclRpbWVzdGFtcCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLmpzXCI7XG5pbXBvcnQgeyBmb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5qc1wiO1xuaW1wb3J0IHsgbG9uZ0Zvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5qc1wiO1xuaW1wb3J0IHtcbiAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbixcbiAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLFxuICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yLFxufSBmcm9tIFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5qc1wiO1xuaW1wb3J0IHsgaXNWYWxpZCB9IGZyb20gXCIuL2lzVmFsaWQuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vLyBSZXhwb3J0cyBvZiBpbnRlcm5hbCBmb3IgbGlicmFyaWVzIHRvIHVzZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNjM4I2lzc3VlY29tbWVudC0xODc3MDgyODc0XG5leHBvcnQgeyBmb3JtYXR0ZXJzLCBsb25nRm9ybWF0dGVycyB9O1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5jb25zdCB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbmV4cG9ydCB7IGZvcm1hdCBhcyBmb3JtYXREYXRlIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXR9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBhbGlhcyBmb3JtYXREYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXIpXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyKSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgdGltZSB2YWx1ZVwiKTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcInBcIiB8fCBmaXJzdENoYXJhY3RlciA9PT0gXCJQXCIpIHtcbiAgICAgICAgY29uc3QgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3Vic3RyaW5nO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIilcbiAgICAubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IFwiJ1wiIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXSkge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiB0cnVlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgXCJGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYFwiICtcbiAgICAgICAgICAgIGZpcnN0Q2hhcmFjdGVyICtcbiAgICAgICAgICAgIFwiYFwiLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IHN1YnN0cmluZyB9O1xuICAgIH0pO1xuXG4gIC8vIGludm9rZSBsb2NhbGl6ZSBwcmVwcm9jZXNzb3IgKG9ubHkgZm9yIGZyZW5jaCBsb2NhbGVzIGF0IHRoZSBtb21lbnQpXG4gIGlmIChsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKSB7XG4gICAgcGFydHMgPSBsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKG9yaWdpbmFsRGF0ZSwgcGFydHMpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZSxcbiAgfTtcblxuICByZXR1cm4gcGFydHNcbiAgICAubWFwKChwYXJ0KSA9PiB7XG4gICAgICBpZiAoIXBhcnQuaXNUb2tlbikgcmV0dXJuIHBhcnQudmFsdWU7XG5cbiAgICAgIGNvbnN0IHRva2VuID0gcGFydC52YWx1ZTtcblxuICAgICAgaWYgKFxuICAgICAgICAoIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikpIHx8XG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pKVxuICAgICAgKSB7XG4gICAgICAgIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0ciwgU3RyaW5nKGRhdGUpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1t0b2tlblswXV07XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKG9yaWdpbmFsRGF0ZSwgdG9rZW4sIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIGNvbnN0IG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZZZWFyLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldERheU9mWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgY29uc3QgZGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZSwgc3RhcnRPZlllYXIoX2RhdGUpKTtcbiAgY29uc3QgZGF5T2ZZZWFyID0gZGlmZiArIDE7XG4gIHJldHVybiBkYXlPZlllYXI7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF5T2ZZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vla1llYXIuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0SVNPV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZJU09XZWVrKF9kYXRlKSAtICtzdGFydE9mSVNPV2Vla1llYXIoX2RhdGUpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRJU09XZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oX2RhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oX2RhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZldlZWtZZWFyLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSB3aXRoIGRlZmF1bHQgb3B0aW9ucz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiA1M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgY29uc3QgZGlmZiA9ICtzdGFydE9mV2VlayhfZGF0ZSwgb3B0aW9ucykgLSArc3RhcnRPZldlZWtZZWFyKF9kYXRlLCBvcHRpb25zKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrO1xuIiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLmpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSlcbiAqIC8vPT4gMjAwNVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgd2VlayBzdGFydHMgb24gU2F0dXJkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IHdlZWtTdGFydHNPbjogNiB9KVxuICogLy89PiAyMDA0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKG9wdGlvbnM/LmluIHx8IGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcblxuICBjb25zdCBmaXJzdFdlZWtPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiB8fCBkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoK19kYXRlID49ICtzdGFydE9mTmV4dFllYXIpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoK19kYXRlID49ICtzdGFydE9mVGhpc1llYXIpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzQWZ0ZXJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSBkYXRlVG9Db21wYXJlIC0gVGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKlxuICogQHJldHVybnMgVGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNBZnRlcihuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBZnRlcihkYXRlLCBkYXRlVG9Db21wYXJlKSB7XG4gIHJldHVybiArdG9EYXRlKGRhdGUpID4gK3RvRGF0ZShkYXRlVG9Db21wYXJlKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0FmdGVyO1xuIiwiLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0RhdGU7XG4iLCJpbXBvcnQgeyBpc0RhdGUgfSBmcm9tIFwiLi9pc0RhdGUuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlKVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHZhbGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRpYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgcmV0dXJuICEoKCFpc0RhdGUoZGF0ZSkgJiYgdHlwZW9mIGRhdGUgIT09IFwibnVtYmVyXCIpIHx8IGlzTmFOKCt0b0RhdGUoZGF0ZSkpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1ZhbGlkO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIChvcHRpb25zID0ge30pID0+IHtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICBjb25zdCBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn1cbiIsIi8qKlxuICogVGhlIGxvY2FsaXplIGZ1bmN0aW9uIGFyZ3VtZW50IGNhbGxiYWNrIHdoaWNoIGFsbG93cyB0byBjb252ZXJ0IHJhdyB2YWx1ZSB0b1xuICogdGhlIGFjdHVhbCB0eXBlLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIGNvbnZlcnRlZCB2YWx1ZVxuICovXG5cbi8qKlxuICogVGhlIG1hcCBvZiBsb2NhbGl6ZWQgdmFsdWVzIGZvciBlYWNoIHdpZHRoLlxuICovXG5cbi8qKlxuICogVGhlIGluZGV4IHR5cGUgb2YgdGhlIGxvY2FsZSB1bml0IHZhbHVlLiBJdCB0eXBlcyBjb252ZXJzaW9uIG9mIHVuaXRzIG9mXG4gKiB2YWx1ZXMgdGhhdCBkb24ndCBzdGFydCBhdCAwIChpLmUuIHF1YXJ0ZXJzKS5cbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB1bml0IHZhbHVlIHRvIHRoZSB0dXBsZSBvZiB2YWx1ZXMuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGVyYSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgQkMsXG4gKiB0aGUgc2Vjb25kIGVsZW1lbnQgcmVwcmVzZW50cyBBRC5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgcXVhcnRlciB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgUTEuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGRheSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgU3VuZGF5LlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBtb250aCB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgSmFudWFyeS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBvcHRpb25zPy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiBcInN0YW5kYWxvbmVcIjtcblxuICAgIGxldCB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJmb3JtYXR0aW5nXCIgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9XG4gICAgICAgIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9XG4gICAgICAod2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUGF0dGVybnMgPVxuICAgICAgKHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG5cbiAgICBjb25zdCBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpXG4gICAgICA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKVxuICAgICAgOiAvLyBbVE9ET10gLS0gSSBjaGFsbGVuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBbVE9ET10gLS0gSSBjaGFsbGVuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpXG4gICAgICA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiZcbiAgICAgIHByZWRpY2F0ZShvYmplY3Rba2V5XSlcbiAgICApIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKVxuICAgICAgOiBwYXJzZVJlc3VsdFswXTtcblxuICAgIC8vIFtUT0RPXSBJIGNoYWxsZW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UuanNcIjtcbmltcG9ydCB7IGZvcm1hdExvbmcgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdExvbmcuanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5qc1wiO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLmpzXCI7XG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL2VuLVVTL19saWIvbWF0Y2guanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLmpzXCI7XG5cbmNvbnN0IGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiBcIkVFRUUsIE1NTU0gZG8sIHlcIixcbiAgbG9uZzogXCJNTU1NIGRvLCB5XCIsXG4gIG1lZGl1bTogXCJNTU0gZCwgeVwiLFxuICBzaG9ydDogXCJNTS9kZC95eXl5XCIsXG59O1xuXG5jb25zdCB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJoOm1tOnNzIGEgenp6elwiLFxuICBsb25nOiBcImg6bW06c3MgYSB6XCIsXG4gIG1lZGl1bTogXCJoOm1tOnNzIGFcIixcbiAgc2hvcnQ6IFwiaDptbSBhXCIsXG59O1xuXG5jb25zdCBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxuICBzaG9ydDogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxufTtcbiIsImNvbnN0IGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogXCJQXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UmVsYXRpdmUgPSAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSA9PlxuICBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4iLCJpbXBvcnQgeyBidWlsZExvY2FsaXplRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4uanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLmpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5qc1wiO1xuXG5jb25zdCBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xuY29uc3QgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG5cbmNvbnN0IG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaSxcbn07XG5jb25zdCBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2ksXG59O1xuY29uc3QgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldLFxufTtcblxuY29uc3QgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG59O1xuY29uc3QgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFtcbiAgICAvXmovaSxcbiAgICAvXmYvaSxcbiAgICAvXm0vaSxcbiAgICAvXmEvaSxcbiAgICAvXm0vaSxcbiAgICAvXmovaSxcbiAgICAvXmovaSxcbiAgICAvXmEvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcblxuICBhbnk6IFtcbiAgICAvXmphL2ksXG4gICAgL15mL2ksXG4gICAgL15tYXIvaSxcbiAgICAvXmFwL2ksXG4gICAgL15tYXkvaSxcbiAgICAvXmp1bi9pLFxuICAgIC9eanVsL2ksXG4gICAgL15hdS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV0sXG59O1xuXG5jb25zdCBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2ksXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogKHZhbHVlKSA9PiBwYXJzZUludCh2YWx1ZSwgMTApLFxuICB9KSxcblxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gICAgdmFsdWVDYWxsYmFjazogKGluZGV4KSA9PiBpbmRleCArIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwiYW55XCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHtcbiAgbWlsbGlzZWNvbmRzSW5Ib3VyLFxuICBtaWxsaXNlY29uZHNJbk1pbnV0ZSxcbn0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBwYXJzZUlTT30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICBjb25zdCBpbnZhbGlkRGF0ZSA9ICgpID0+IGNvbnN0cnVjdEZyb20ob3B0aW9ucz8uaW4sIE5hTik7XG5cbiAgY29uc3QgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnM/LmFkZGl0aW9uYWxEaWdpdHMgPz8gMjtcbiAgY29uc3QgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuXG4gIGxldCBkYXRlO1xuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIGNvbnN0IHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKCtkYXRlKSkgcmV0dXJuIGludmFsaWREYXRlKCk7XG5cbiAgY29uc3QgdGltZXN0YW1wID0gK2RhdGU7XG4gIGxldCB0aW1lID0gMDtcbiAgbGV0IG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSByZXR1cm4gaW52YWxpZERhdGUoKTtcbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuICAgIGlmIChpc05hTihvZmZzZXQpKSByZXR1cm4gaW52YWxpZERhdGUoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0bXBEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdG9EYXRlKDAsIG9wdGlvbnM/LmluKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoXG4gICAgICB0bXBEYXRlLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICB0bXBEYXRlLmdldFVUQ01vbnRoKCksXG4gICAgICB0bXBEYXRlLmdldFVUQ0RhdGUoKSxcbiAgICApO1xuICAgIHJlc3VsdC5zZXRIb3VycyhcbiAgICAgIHRtcERhdGUuZ2V0VVRDSG91cnMoKSxcbiAgICAgIHRtcERhdGUuZ2V0VVRDTWludXRlcygpLFxuICAgICAgdG1wRGF0ZS5nZXRVVENTZWNvbmRzKCksXG4gICAgICB0bXBEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpLFxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiB0b0RhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCwgb3B0aW9ucz8uaW4pO1xufVxuXG5jb25zdCBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC8sXG59O1xuXG5jb25zdCBkYXRlUmVnZXggPVxuICAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbmNvbnN0IHRpbWVSZWdleCA9XG4gIC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbmNvbnN0IHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IGRhdGVTdHJpbmdzID0ge307XG4gIGNvbnN0IGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIGxldCB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoXG4gICAgICAgIGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLFxuICAgICAgICBkYXRlU3RyaW5nLmxlbmd0aCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICBjb25zdCB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCBcIlwiKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFxuICAgIFwiXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7XCIgK1xuICAgICAgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArXG4gICAgICBcIn0pfChcXFxcZHsyfXxbKy1dXFxcXGR7XCIgK1xuICAgICAgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArXG4gICAgICBcIn0pJClcIixcbiAgKTtcblxuICBjb25zdCBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4geyB5ZWFyOiBOYU4sIHJlc3REYXRlU3RyaW5nOiBcIlwiIH07XG5cbiAgY29uc3QgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgY29uc3QgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuXG4gIGNvbnN0IGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuXG4gIGNvbnN0IGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICBjb25zdCBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgY29uc3QgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIGNvbnN0IGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICBjb25zdCB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIGNvbnN0IGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKFxuICAgICAgIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fFxuICAgICAgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIGNvbnN0IGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIGNvbnN0IGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDBcbiAgKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZShcIixcIiwgXCIuXCIpKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09IFwiWlwiKSByZXR1cm4gMDtcblxuICBjb25zdCBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcblxuICBjb25zdCBzaWduID0gY2FwdHVyZXNbMV0gPT09IFwiK1wiID8gLTEgOiAxO1xuICBjb25zdCBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgY29uc3QgbWludXRlcyA9IChjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkpIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIGNvbnN0IGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5jb25zdCBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIChcbiAgICBtb250aCA+PSAwICYmXG4gICAgbW9udGggPD0gMTEgJiZcbiAgICBkYXRlID49IDEgJiZcbiAgICBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIHNlY29uZHMgPj0gMCAmJlxuICAgIHNlY29uZHMgPCA2MCAmJlxuICAgIG1pbnV0ZXMgPj0gMCAmJlxuICAgIG1pbnV0ZXMgPCA2MCAmJlxuICAgIGhvdXJzID49IDAgJiZcbiAgICBob3VycyA8IDI1XG4gICk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBwYXJzZUlTTztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZkRheX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZJU09XZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgLi4ub3B0aW9ucywgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0SVNPV2Vla1llYXIuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZJU09XZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHllYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5ID0gY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiB8fCBkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLmpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi9nZXRXZWVrWWVhci5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiB8fCBkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB5ZWFyIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBKYW4gMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZlllYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkYXRlXyA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIGRhdGVfLnNldEZ1bGxZZWFyKGRhdGVfLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICBkYXRlXy5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGVfO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZZZWFyO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcblxuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogU3RhcnRpbmcgZnJvbSB2My43LjAsIGl0IGNsb25lcyBhIGRhdGUgdXNpbmcgYFtTeW1ib2wuZm9yKFwiY29uc3RydWN0RGF0ZUZyb21cIildYFxuICogZW5hYmxpbmcgdG8gdHJhbnNmZXIgZXh0cmEgcHJvcGVydGllcyBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZSB0byB0aGUgbmV3IGRhdGUuXG4gKiBJdCdzIHVzZWZ1bCBmb3IgZXh0ZW5zaW9ucyBsaWtlIFtgVFpEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3R6KVxuICogdGhhdCBhY2NlcHQgYSB0aW1lIHpvbmUgYXMgYSBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUsIGl0IGlzIHRoZSB0eXBlIHJldHVybmVkIGZyb20gdGhlIGNvbnRleHQgZnVuY3Rpb24gaWYgaXQgaXMgcGFzc2VkLCBvciBpbmZlcnJlZCBmcm9tIHRoZSBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCwgY29udGV4dCkge1xuICAvLyBbVE9ET10gR2V0IHJpZCBvZiBgdG9EYXRlYCBvciBgY29uc3RydWN0RnJvbWA/XG4gIHJldHVybiBjb25zdHJ1Y3RGcm9tKGNvbnRleHQgfHwgYXJndW1lbnQsIGFyZ3VtZW50KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iXSwibmFtZXMiOlsiaXNBZnRlciIsInBhcnNlSVNPIiwiZm9ybWF0IiwiY3JlYXRlTmV3VGFzayIsImdldFRhc2siLCJlZGl0VGFzayIsImRlbGV0ZVRhc2siLCJjcmVhdGVQcm9qZWN0IiwiZ2V0UHJvamVjdCIsImVkaXRQcm9qZWN0IiwiZGVsZXRlUHJvamVjdCIsImdldFByb2plY3RzIiwidXBkYXRlREIiLCJzZXR1cERpYWxvZyIsIm9wZW5CdG5TZWxlY3RvciIsImRpYWxvZ1NlbGVjdG9yIiwiY2xvc2VCdG5TZWxlY3RvciIsImRpYWxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9wZW5CdG4iLCJjbG9zZUJ0biIsImZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwibGVuZ3RoIiwiYWxlcnQiLCJzaG93TW9kYWwiLCJyZXNldCIsImNsb3NlIiwiZ2V0VGFza0lucHV0cyIsImNvbmNhdCIsInRhc2tOYW1lIiwidmFsdWUiLCJ0YXNrRGVzY3JpcHRpb24iLCJ0YXNrRGVhZGxpbmUiLCJ0YXNrUHJpb3JpdHkiLCJ0b2RheSIsIkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwic3RhdHVzIiwibmV3VGFzayIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaW9yaXR5IiwidGFza0xpc3QiLCJ0YXNrQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsInRhc2tIZWFkIiwiZGF0ZUxhYmVsIiwiZGF0ZSIsInRhc2tCb2R5IiwiZGVzY3JpcHRpb25MYWJlbCIsInN0YXR1c0xhYmVsIiwidGFza1N0YXR1cyIsImljb25Db250YWluZXIiLCJlZGl0QnRuIiwiZGVsZXRlQnRuIiwiZHJvcEJ0biIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsInRleHRDb250ZW50IiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJwcmVwZW5kIiwicHJpb3JpdHlDb2xvciIsInN0eWxlIiwiZGlzcGxheSIsInRvZ2dsZSIsImNvbnRhaW5zIiwicHJvamVjdFRpdGxlIiwiZWRpdERpYWxvZyIsInNhdmUiLCJvbGREYXRhIiwidGFza0NvbXBvbmVudHMiLCJuZXdUYXNrTmFtZSIsIm5ld1Rhc2tEZXNjcmlwdGlvbiIsIm5ld1Rhc2tEYXRlIiwibmV3VGFza1ByaW9yaXR5IiwicXVlcnlTZWxlY3RvckFsbCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJjdXJyZW50VGFza1ByaW9yaXR5Iiwic2V0QXR0cmlidXRlIiwiZXJyIiwiZSIsImYiLCJzYXZlVGFzayIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJwYXJlbnRFbGVtZW50IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhZGRUYXNrVG9Qcm9qZWN0IiwidG9Eb0xpc3QiLCJwdXNoIiwiT2JqZWN0IiwidmFsdWVzIiwiYXQiLCJsb2FkVGFza3MiLCJmb3JFYWNoIiwidGFzayIsIm5ld1Byb2plY3QiLCJ0aXRsZSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInByb2plY3RUZXh0IiwicHJvakNvbnRhaW5lciIsInByb2plY3QiLCJwcm9qZWN0TmFtZSIsInN3aXRjaFByb2plY3QiLCJlZGl0UHJvak5hbWUiLCJvbGRQcm9qTmFtZSIsInByb2pOYW1lSW5wdXQiLCJzYXZlUHJvamVjdCIsImNoZWNrRHVwbGljYXRlcyIsInNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidGFza3MiLCJyZW1vdmVDaGlsZCIsInNvbWUiLCJvYmoiLCJhZGRQcm9qZWN0VG9MaXN0IiwibmV3VGl0bGUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJkZWZhdWx0VGFzayIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcm9qZWN0cyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJnZXRQcm9qZWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJpbmRleCIsInRoaXNQcm9qZWN0Iiwic3BsaWNlIiwiZHVlRGF0ZSIsImdldFRhc2tJbmRleCIsInRvTG93ZXJDYXNlIiwib2xkVGFza05hbWUiLCJvbGRUYXNrRGVzY3JpcHRpb24iLCJ0aGlzVGFzayIsImFkZExlYWRpbmdaZXJvcyIsIm51bWJlciIsInRhcmdldExlbmd0aCIsInNpZ24iLCJvdXRwdXQiLCJNYXRoIiwiYWJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImRlZmF1bHRPcHRpb25zIiwiZ2V0RGVmYXVsdE9wdGlvbnMiLCJzZXREZWZhdWx0T3B0aW9ucyIsIm5ld09wdGlvbnMiLCJnZXREYXlPZlllYXIiLCJnZXRJU09XZWVrIiwiZ2V0SVNPV2Vla1llYXIiLCJnZXRXZWVrIiwiZ2V0V2Vla1llYXIiLCJsaWdodEZvcm1hdHRlcnMiLCJkYXlQZXJpb2RFbnVtIiwiYW0iLCJwbSIsIm1pZG5pZ2h0Iiwibm9vbiIsIm1vcm5pbmciLCJhZnRlcm5vb24iLCJldmVuaW5nIiwibmlnaHQiLCJmb3JtYXR0ZXJzIiwiRyIsInRva2VuIiwibG9jYWxpemUiLCJlcmEiLCJnZXRGdWxsWWVhciIsIndpZHRoIiwieSIsInNpZ25lZFllYXIiLCJ5ZWFyIiwib3JkaW5hbE51bWJlciIsInVuaXQiLCJZIiwib3B0aW9ucyIsInNpZ25lZFdlZWtZZWFyIiwid2Vla1llYXIiLCJ0d29EaWdpdFllYXIiLCJSIiwiaXNvV2Vla1llYXIiLCJ1IiwiUSIsInF1YXJ0ZXIiLCJjZWlsIiwiZ2V0TW9udGgiLCJTdHJpbmciLCJjb250ZXh0IiwicSIsIk0iLCJtb250aCIsIkwiLCJ3Iiwid2VlayIsIkkiLCJpc29XZWVrIiwiZCIsImdldERhdGUiLCJEIiwiZGF5T2ZZZWFyIiwiRSIsImRheU9mV2VlayIsImdldERheSIsImRheSIsImxvY2FsRGF5T2ZXZWVrIiwid2Vla1N0YXJ0c09uIiwiYyIsImlzb0RheU9mV2VlayIsImEiLCJob3VycyIsImdldEhvdXJzIiwiZGF5UGVyaW9kRW51bVZhbHVlIiwiZGF5UGVyaW9kIiwiYiIsIkIiLCJoIiwiSCIsIksiLCJrIiwibSIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiUyIsIlgiLCJfbG9jYWxpemUiLCJ0aW1lem9uZU9mZnNldCIsImdldFRpbWV6b25lT2Zmc2V0IiwiZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzIiwiZm9ybWF0VGltZXpvbmUiLCJ4IiwiTyIsImZvcm1hdFRpbWV6b25lU2hvcnQiLCJ6IiwidCIsInRpbWVzdGFtcCIsInRydW5jIiwiVCIsIm9mZnNldCIsImRlbGltaXRlciIsImFic09mZnNldCIsIm1pbnV0ZXMiLCJ0b1VwcGVyQ2FzZSIsIm51bWJlck9mRGlnaXRzIiwibWlsbGlzZWNvbmRzIiwiZ2V0TWlsbGlzZWNvbmRzIiwiZnJhY3Rpb25hbFNlY29uZHMiLCJwb3ciLCJkYXRlTG9uZ0Zvcm1hdHRlciIsInBhdHRlcm4iLCJmb3JtYXRMb25nIiwidGltZUxvbmdGb3JtYXR0ZXIiLCJ0aW1lIiwiZGF0ZVRpbWVMb25nRm9ybWF0dGVyIiwibWF0Y2hSZXN1bHQiLCJtYXRjaCIsImRhdGVQYXR0ZXJuIiwidGltZVBhdHRlcm4iLCJkYXRlVGltZUZvcm1hdCIsImRhdGVUaW1lIiwicmVwbGFjZSIsImxvbmdGb3JtYXR0ZXJzIiwicCIsIlAiLCJ0b0RhdGUiLCJnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIiwiX2RhdGUiLCJ1dGNEYXRlIiwiVVRDIiwic2V0VVRDRnVsbFllYXIiLCJjb25zdHJ1Y3RGcm9tIiwibm9ybWFsaXplRGF0ZXMiLCJkYXRlcyIsIm5vcm1hbGl6ZSIsImJpbmQiLCJmaW5kIiwibWFwIiwiZGF5T2ZZZWFyVG9rZW5SRSIsIndlZWtZZWFyVG9rZW5SRSIsInRocm93VG9rZW5zIiwiaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiIsInRlc3QiLCJpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4iLCJ3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yIiwiaW5wdXQiLCJfbWVzc2FnZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwid2FybiIsImluY2x1ZGVzIiwiUmFuZ2VFcnJvciIsInN1YmplY3QiLCJkYXlzSW5XZWVrIiwiZGF5c0luWWVhciIsIm1heFRpbWUiLCJtaW5UaW1lIiwibWlsbGlzZWNvbmRzSW5XZWVrIiwibWlsbGlzZWNvbmRzSW5EYXkiLCJtaWxsaXNlY29uZHNJbk1pbnV0ZSIsIm1pbGxpc2Vjb25kc0luSG91ciIsIm1pbGxpc2Vjb25kc0luU2Vjb25kIiwibWludXRlc0luWWVhciIsIm1pbnV0ZXNJbk1vbnRoIiwibWludXRlc0luRGF5IiwibWludXRlc0luSG91ciIsIm1vbnRoc0luUXVhcnRlciIsIm1vbnRoc0luWWVhciIsInF1YXJ0ZXJzSW5ZZWFyIiwic2Vjb25kc0luSG91ciIsInNlY29uZHNJbk1pbnV0ZSIsInNlY29uZHNJbkRheSIsInNlY29uZHNJbldlZWsiLCJzZWNvbmRzSW5ZZWFyIiwic2Vjb25kc0luTW9udGgiLCJzZWNvbmRzSW5RdWFydGVyIiwiY29uc3RydWN0RnJvbVN5bWJvbCIsIlN5bWJvbCIsImZvciIsImNvbnN0cnVjdG9yIiwic3RhcnRPZkRheSIsImRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyIsImxhdGVyRGF0ZSIsImVhcmxpZXJEYXRlIiwibGF0ZXJEYXRlXyIsImVhcmxpZXJEYXRlXyIsImluIiwibGF0ZXJTdGFydE9mRGF5IiwiZWFybGllclN0YXJ0T2ZEYXkiLCJsYXRlclRpbWVzdGFtcCIsImVhcmxpZXJUaW1lc3RhbXAiLCJyb3VuZCIsImRlZmF1bHRMb2NhbGUiLCJpc1ZhbGlkIiwiZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCIsImxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwIiwiZXNjYXBlZFN0cmluZ1JlZ0V4cCIsImRvdWJsZVF1b3RlUmVnRXhwIiwidW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAiLCJmb3JtYXREYXRlIiwiZm9ybWF0U3RyIiwibG9jYWxlIiwiZmlyc3RXZWVrQ29udGFpbnNEYXRlIiwib3JpZ2luYWxEYXRlIiwicGFydHMiLCJzdWJzdHJpbmciLCJmaXJzdENoYXJhY3RlciIsImxvbmdGb3JtYXR0ZXIiLCJqb2luIiwiaXNUb2tlbiIsImNsZWFuRXNjYXBlZFN0cmluZyIsInByZXByb2Nlc3NvciIsImZvcm1hdHRlck9wdGlvbnMiLCJwYXJ0IiwidXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zIiwidXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyIsImZvcm1hdHRlciIsIm1hdGNoZWQiLCJzdGFydE9mWWVhciIsImRpZmYiLCJzdGFydE9mSVNPV2VlayIsInN0YXJ0T2ZJU09XZWVrWWVhciIsImZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIiLCJzZXRGdWxsWWVhciIsInNldEhvdXJzIiwic3RhcnRPZk5leHRZZWFyIiwiZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciIsInN0YXJ0T2ZUaGlzWWVhciIsImdldFRpbWUiLCJzdGFydE9mV2VlayIsInN0YXJ0T2ZXZWVrWWVhciIsImZpcnN0V2Vla09mTmV4dFllYXIiLCJmaXJzdFdlZWtPZlRoaXNZZWFyIiwiZGF0ZVRvQ29tcGFyZSIsImlzRGF0ZSIsInByb3RvdHlwZSIsImNhbGwiLCJpc05hTiIsImJ1aWxkRm9ybWF0TG9uZ0ZuIiwiYXJncyIsImRlZmF1bHRXaWR0aCIsImZvcm1hdHMiLCJidWlsZExvY2FsaXplRm4iLCJ2YWx1ZXNBcnJheSIsImZvcm1hdHRpbmdWYWx1ZXMiLCJkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIiwiYXJndW1lbnRDYWxsYmFjayIsImJ1aWxkTWF0Y2hGbiIsInN0cmluZyIsIm1hdGNoUGF0dGVybiIsIm1hdGNoUGF0dGVybnMiLCJkZWZhdWx0TWF0Y2hXaWR0aCIsIm1hdGNoZWRTdHJpbmciLCJwYXJzZVBhdHRlcm5zIiwiZGVmYXVsdFBhcnNlV2lkdGgiLCJrZXkiLCJBcnJheSIsImlzQXJyYXkiLCJmaW5kS2V5IiwidmFsdWVDYWxsYmFjayIsInJlc3QiLCJzbGljZSIsIm9iamVjdCIsInByZWRpY2F0ZSIsImhhc093blByb3BlcnR5IiwiYXJyYXkiLCJidWlsZE1hdGNoUGF0dGVybkZuIiwicGFyc2VSZXN1bHQiLCJwYXJzZVBhdHRlcm4iLCJmb3JtYXREaXN0YW5jZSIsImZvcm1hdFJlbGF0aXZlIiwiZW5VUyIsImNvZGUiLCJmb3JtYXREaXN0YW5jZUxvY2FsZSIsImxlc3NUaGFuWFNlY29uZHMiLCJvbmUiLCJvdGhlciIsInhTZWNvbmRzIiwiaGFsZkFNaW51dGUiLCJsZXNzVGhhblhNaW51dGVzIiwieE1pbnV0ZXMiLCJhYm91dFhIb3VycyIsInhIb3VycyIsInhEYXlzIiwiYWJvdXRYV2Vla3MiLCJ4V2Vla3MiLCJhYm91dFhNb250aHMiLCJ4TW9udGhzIiwiYWJvdXRYWWVhcnMiLCJ4WWVhcnMiLCJvdmVyWFllYXJzIiwiYWxtb3N0WFllYXJzIiwiY291bnQiLCJyZXN1bHQiLCJ0b2tlblZhbHVlIiwiYWRkU3VmZml4IiwiY29tcGFyaXNvbiIsImRhdGVGb3JtYXRzIiwiZnVsbCIsImxvbmciLCJtZWRpdW0iLCJzaG9ydCIsInRpbWVGb3JtYXRzIiwiZGF0ZVRpbWVGb3JtYXRzIiwiZm9ybWF0UmVsYXRpdmVMb2NhbGUiLCJsYXN0V2VlayIsInllc3RlcmRheSIsInRvbW9ycm93IiwibmV4dFdlZWsiLCJfYmFzZURhdGUiLCJfb3B0aW9ucyIsImVyYVZhbHVlcyIsIm5hcnJvdyIsImFiYnJldmlhdGVkIiwid2lkZSIsInF1YXJ0ZXJWYWx1ZXMiLCJtb250aFZhbHVlcyIsImRheVZhbHVlcyIsImRheVBlcmlvZFZhbHVlcyIsImZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMiLCJkaXJ0eU51bWJlciIsIk51bWJlciIsInJlbTEwMCIsIm1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4iLCJwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuIiwibWF0Y2hFcmFQYXR0ZXJucyIsInBhcnNlRXJhUGF0dGVybnMiLCJhbnkiLCJtYXRjaFF1YXJ0ZXJQYXR0ZXJucyIsInBhcnNlUXVhcnRlclBhdHRlcm5zIiwibWF0Y2hNb250aFBhdHRlcm5zIiwicGFyc2VNb250aFBhdHRlcm5zIiwibWF0Y2hEYXlQYXR0ZXJucyIsInBhcnNlRGF5UGF0dGVybnMiLCJtYXRjaERheVBlcmlvZFBhdHRlcm5zIiwicGFyc2VEYXlQZXJpb2RQYXR0ZXJucyIsInBhcnNlSW50IiwiYXJndW1lbnQiLCJpbnZhbGlkRGF0ZSIsIk5hTiIsImFkZGl0aW9uYWxEaWdpdHMiLCJkYXRlU3RyaW5ncyIsInNwbGl0RGF0ZVN0cmluZyIsInBhcnNlWWVhclJlc3VsdCIsInBhcnNlWWVhciIsInBhcnNlRGF0ZSIsInJlc3REYXRlU3RyaW5nIiwicGFyc2VUaW1lIiwidGltZXpvbmUiLCJwYXJzZVRpbWV6b25lIiwidG1wRGF0ZSIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VVRDU2Vjb25kcyIsImdldFVUQ01pbGxpc2Vjb25kcyIsInBhdHRlcm5zIiwiZGF0ZVRpbWVEZWxpbWl0ZXIiLCJ0aW1lWm9uZURlbGltaXRlciIsImRhdGVSZWdleCIsInRpbWVSZWdleCIsInRpbWV6b25lUmVnZXgiLCJkYXRlU3RyaW5nIiwic3BsaXQiLCJ0aW1lU3RyaW5nIiwic3Vic3RyIiwiZXhlYyIsInJlZ2V4IiwiUmVnRXhwIiwiY2FwdHVyZXMiLCJjZW50dXJ5IiwiaXNXZWVrRGF0ZSIsInBhcnNlRGF0ZVVuaXQiLCJ2YWxpZGF0ZVdlZWtEYXRlIiwiZGF5T2ZJU09XZWVrWWVhciIsInZhbGlkYXRlRGF0ZSIsInZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSIsIm1heCIsInBhcnNlVGltZVVuaXQiLCJzZWNvbmRzIiwidmFsaWRhdGVUaW1lIiwicGFyc2VGbG9hdCIsInRpbWV6b25lU3RyaW5nIiwidmFsaWRhdGVUaW1lem9uZSIsImZvdXJ0aE9mSmFudWFyeURheSIsImdldFVUQ0RheSIsInNldFVUQ0RhdGUiLCJkYXlzSW5Nb250aHMiLCJpc0xlYXBZZWFySW5kZXgiLCJfeWVhciIsIl9ob3VycyIsImZvdXJ0aE9mSmFudWFyeSIsInNldERhdGUiLCJmaXJzdFdlZWsiLCJkYXRlXyJdLCJzb3VyY2VSb290IjoiIn0=