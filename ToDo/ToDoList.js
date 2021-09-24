"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoList = void 0;
class ToDoList {
    constructor(name) {
        this.name = name;
        this.list = new Array();
    }
    getList() {
        return this.list;
    }
    getName() {
        return this.name;
    }
    addItem(item) {
        this.list.push(item);
    }
}
exports.ToDoList = ToDoList;
