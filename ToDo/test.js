"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const ToDoList_1 = require("./ToDoList");
const ToDoItem_1 = require("./ToDoItem");
var testItem = new ToDoItem_1.ToDoItem("lets go", 1, 1, 1970);
var testList = new ToDoList_1.ToDoList("test");
testList.addItem(testItem);
console.log(testList);
console.log(testList.getList()[0]);
console.log(testItem.getTodo());
console.log((_a = testItem.getDate()) === null || _a === void 0 ? void 0 : _a.toString());
