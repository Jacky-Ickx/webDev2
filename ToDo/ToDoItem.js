"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoItem = void 0;
const Date_1 = require("./Date");
class ToDoItem {
    constructor(todo, day, month, year) {
        if (day === undefined || month === undefined || year === undefined) {
            //@ts-ignore
            this.date = null;
        }
        else {
            this.date = new Date_1.Date(day, month, year);
        }
        this.todo = todo;
        this.isCompleted = false;
    }
    getDate() {
        if (this.date === null) {
            return null;
        }
        else {
            return this.date;
        }
    }
    setDate(day, month, year) {
        this.date = new Date_1.Date(day, month, year);
    }
    getTodo() {
        return this.todo;
    }
    setTodo(todo) {
        this.todo = todo;
    }
    markCompleted() {
        this.isCompleted = true;
    }
}
exports.ToDoItem = ToDoItem;
