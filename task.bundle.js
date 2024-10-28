"use strict";
(self["webpackChunkto_do_app"] = self["webpackChunkto_do_app"] || []).push([["task"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/task.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUs7RUFDbkUsSUFBSUMsT0FBTyxHQUFHO0lBQ1JMLEtBQUssRUFBTEEsS0FBSztJQUNMQyxXQUFXLEVBQVhBLFdBQVc7SUFDWEMsT0FBTyxFQUFQQSxPQUFPO0lBQ1BDLFFBQVEsRUFBUkEsUUFBUTtJQUNSQyxNQUFNLEVBQU5BO0VBQ04sQ0FBQztFQUVELE9BQU9DLE9BQU87QUFDcEIsQ0FBQztBQUVELElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFLO0VBQ3ZELE9BQU9GLE9BQU8sQ0FBQ0csUUFBUSxDQUFDQyxTQUFTLENBQUMsVUFBQUMsSUFBSTtJQUFBLE9BQUlBLElBQUksQ0FBQ1osS0FBSyxDQUFDYSxXQUFXLENBQUMsQ0FBQyxLQUFLTCxRQUFRLENBQUNLLFdBQVcsQ0FBQyxDQUFDLElBQUlELElBQUksQ0FBQ1gsV0FBVyxDQUFDWSxXQUFXLENBQUMsQ0FBQyxLQUFLSixlQUFlLENBQUNJLFdBQVcsQ0FBQyxDQUFDO0VBQUEsRUFBQztBQUN4SyxDQUFDO0FBRUQsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlQLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUs7RUFDbEQsSUFBSU0sS0FBSyxHQUFHVCxZQUFZLENBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxlQUFlLENBQUM7RUFDNUQsSUFBR00sS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFDO0lBQ1YsT0FBT1IsT0FBTyxDQUFDRyxRQUFRLENBQUNLLEtBQUssQ0FBQztFQUNwQyxDQUFDLE1BQUk7SUFDQyxPQUFPQSxLQUFLO0VBQ2xCO0FBQ04sQ0FBQztBQUVELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJVCxPQUFPLEVBQUVVLFdBQVcsRUFBRUMsa0JBQWtCLEVBQW1CO0VBQ3ZFLElBQUlDLFFBQVEsR0FBR0wsT0FBTyxDQUFDUCxPQUFPLEVBQUVVLFdBQVcsRUFBRUMsa0JBQWtCLENBQUM7RUFFaEUsSUFBRyxDQUFBRSxTQUFBLENBQUFDLE1BQUEsWUFBQUQsU0FBQSxDQUFBQyxNQUFBLFNBQW9CLENBQUMsRUFBRTtJQUNwQkYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUMsU0FBQSxHQUFBRixTQUFBLEdBQWU7RUFDdkMsQ0FBQyxNQUFNO0lBQ0RELFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFDLFNBQUEsR0FBQUYsU0FBQSxHQUFlO0lBQ2hDRCxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBQyxTQUFBLEdBQUFGLFNBQUEsR0FBZTtJQUN0Q0QsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUMsU0FBQSxHQUFBRixTQUFBLEdBQWU7SUFDbENELFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFDLFNBQUEsR0FBQUYsU0FBQSxHQUFlO0VBQ3pDO0FBQ04sQ0FBQztBQUVELElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJaEIsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBSztFQUNyREYsT0FBTyxDQUFDRyxRQUFRLENBQUNjLE1BQU0sQ0FBQ2xCLFlBQVksQ0FBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2pzL3Rhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlTmV3VGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpID0+IHtcclxuICAgICAgbGV0IG5ld1Rhc2sgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgZHVlRGF0ZSxcclxuICAgICAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgICAgIHN0YXR1c1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIG5ld1Rhc2s7XHJcbn1cclxuXHJcbmNvbnN0IGdldFRhc2tJbmRleCA9IChwcm9qZWN0LCB0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcm9qZWN0LnRvRG9MaXN0LmZpbmRJbmRleCh0YXNrID0+IHRhc2sudGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gdGFza05hbWUudG9Mb3dlckNhc2UoKSAmJiB0YXNrLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkgPT09IHRhc2tEZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuY29uc3QgZ2V0VGFzayA9IChwcm9qZWN0LCB0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgIGxldCBpbmRleCA9IGdldFRhc2tJbmRleChwcm9qZWN0LCB0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uKTtcclxuICAgICAgaWYoaW5kZXggIT09IC0xKXtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3QudG9Eb0xpc3RbaW5kZXhdO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICB9XHJcbn07XHJcblxyXG5jb25zdCBlZGl0VGFzayA9IChwcm9qZWN0LCBvbGRUYXNrTmFtZSwgb2xkVGFza0Rlc2NyaXB0aW9uLCAuLi5uZXdWYWx1ZXMpID0+IHtcclxuICAgICAgbGV0IHRoaXNUYXNrID0gZ2V0VGFzayhwcm9qZWN0LCBvbGRUYXNrTmFtZSwgb2xkVGFza0Rlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgIGlmKG5ld1ZhbHVlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzVGFza1snc3RhdHVzJ10gPSBuZXdWYWx1ZXNbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXNUYXNrWyd0aXRsZSddID0gbmV3VmFsdWVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzVGFza1snZGVzY3JpcHRpb24nXSA9IG5ld1ZhbHVlc1sxXTtcclxuICAgICAgICAgICAgdGhpc1Rhc2tbJ2R1ZURhdGUnXSA9IG5ld1ZhbHVlc1syXTtcclxuICAgICAgICAgICAgdGhpc1Rhc2tbJ3ByaW9yaXR5J10gPSBuZXdWYWx1ZXNbM107XHJcbiAgICAgIH1cclxufVxyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IChwcm9qZWN0LCB0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgIHByb2plY3QudG9Eb0xpc3Quc3BsaWNlKGdldFRhc2tJbmRleChwcm9qZWN0LCB0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uKSwgMSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlTmV3VGFzaywgZ2V0VGFzaywgZWRpdFRhc2ssIGRlbGV0ZVRhc2t9O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlTmV3VGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJzdGF0dXMiLCJuZXdUYXNrIiwiZ2V0VGFza0luZGV4IiwicHJvamVjdCIsInRhc2tOYW1lIiwidGFza0Rlc2NyaXB0aW9uIiwidG9Eb0xpc3QiLCJmaW5kSW5kZXgiLCJ0YXNrIiwidG9Mb3dlckNhc2UiLCJnZXRUYXNrIiwiaW5kZXgiLCJlZGl0VGFzayIsIm9sZFRhc2tOYW1lIiwib2xkVGFza0Rlc2NyaXB0aW9uIiwidGhpc1Rhc2siLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkZWxldGVUYXNrIiwic3BsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==