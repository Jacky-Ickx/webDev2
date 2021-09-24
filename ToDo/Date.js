"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = void 0;
class Date {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    setDate(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    toString() {
        return this.day + "." + this.month + "." + this.year;
    }
}
exports.Date = Date;
