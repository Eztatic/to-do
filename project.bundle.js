"use strict";
(self["webpackChunkto_do_app"] = self["webpackChunkto_do_app"] || []).push([["project"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/project.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFO0FBRW5FLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7RUFDakJGLFlBQVksQ0FBQ0csT0FBTyxDQUFDLFVBQVUsRUFBRUwsSUFBSSxDQUFDTSxTQUFTLENBQUNQLFFBQVEsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFFRCxJQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLElBQUksRUFBSztFQUMxQixJQUFJQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0VBRW5CQSxVQUFVLENBQUNELElBQUksR0FBR0EsSUFBSTtFQUN0QkMsVUFBVSxDQUFDQyxRQUFRLEdBQUcsRUFBRTtFQUN4QlgsUUFBUSxDQUFDWSxJQUFJLENBQUNGLFVBQVUsQ0FBQztFQUV6QixPQUFPQSxVQUFVO0FBQ3ZCLENBQUM7QUFFRCxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLFdBQVcsRUFBSztFQUNuQyxPQUFPZCxRQUFRLENBQUNlLFNBQVMsQ0FBQyxVQUFBQyxPQUFPO0lBQUEsT0FBSUEsT0FBTyxDQUFDUCxJQUFJLElBQUlLLFdBQVc7RUFBQSxFQUFDO0FBQ3ZFLENBQUM7QUFFRCxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUgsV0FBVyxFQUFLO0VBQzlCLElBQUlJLEtBQUssR0FBR0wsZUFBZSxDQUFDQyxXQUFXLENBQUM7RUFDeEMsSUFBR0ksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFDO0lBQ1YsT0FBT2xCLFFBQVEsQ0FBQ2tCLEtBQUssQ0FBQztFQUM1QixDQUFDLE1BQUk7SUFDQyxPQUFPQSxLQUFLO0VBQ2xCO0FBQ04sQ0FBQztBQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJSCxPQUFPLEVBQW1CO0VBQ3pDLElBQUlJLFdBQVcsR0FBR0gsVUFBVSxDQUFDRCxPQUFPLENBQUM7RUFFckNJLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFDLFNBQUEsR0FBQUYsU0FBQSxHQUFlO0FBQ3hDLENBQUM7QUFFRCxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlWLFdBQVcsRUFBSztFQUNqQ2QsUUFBUSxDQUFDeUIsTUFBTSxDQUFDWixlQUFlLENBQUNDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRUQsSUFBTVksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztFQUNwQixPQUFPMUIsUUFBUTtBQUNyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2pzL3Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcclxuXHJcbmNvbnN0IHVwZGF0ZURCID0gKCkgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcclxuICAgICAgbGV0IG5ld1Byb2plY3QgPSB7fTtcclxuXHJcbiAgICAgIG5ld1Byb2plY3QubmFtZSA9IG5hbWU7XHJcbiAgICAgIG5ld1Byb2plY3QudG9Eb0xpc3QgPSBbXTtcclxuICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xyXG59XHJcblxyXG5jb25zdCBnZXRQcm9qZWN0SW5kZXggPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgcmV0dXJuIHByb2plY3RzLmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PSBwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gZ2V0UHJvamVjdEluZGV4KHByb2plY3ROYW1lKTtcclxuICAgICAgaWYoaW5kZXggIT09IC0xKXtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzW2luZGV4XTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgfVxyXG59XHJcblxyXG5jb25zdCBlZGl0UHJvamVjdCA9IChwcm9qZWN0LCAuLi5uZXdWYWx1ZXMpID0+IHtcclxuICAgICAgbGV0IHRoaXNQcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0KTtcclxuXHJcbiAgICAgIHRoaXNQcm9qZWN0WyduYW1lJ10gPSBuZXdWYWx1ZXNbMF07XHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgcHJvamVjdHMuc3BsaWNlKGdldFByb2plY3RJbmRleChwcm9qZWN0TmFtZSksIDEpO1xyXG59XHJcblxyXG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZVByb2plY3QsIGdldFByb2plY3QsIGVkaXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBnZXRQcm9qZWN0cywgdXBkYXRlREJ9O1xyXG4iXSwibmFtZXMiOlsicHJvamVjdHMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXBkYXRlREIiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY3JlYXRlUHJvamVjdCIsIm5hbWUiLCJuZXdQcm9qZWN0IiwidG9Eb0xpc3QiLCJwdXNoIiwiZ2V0UHJvamVjdEluZGV4IiwicHJvamVjdE5hbWUiLCJmaW5kSW5kZXgiLCJwcm9qZWN0IiwiZ2V0UHJvamVjdCIsImluZGV4IiwiZWRpdFByb2plY3QiLCJ0aGlzUHJvamVjdCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRlbGV0ZVByb2plY3QiLCJzcGxpY2UiLCJnZXRQcm9qZWN0cyJdLCJzb3VyY2VSb290IjoiIn0=