import {ToDoList} from "./ToDoList";
import {ToDoItem} from "./ToDoItem";


var testItem : ToDoItem = new ToDoItem("lets go", 1, 1, 1970);
var testList : ToDoList = new ToDoList("test");
testList.addItem(testItem);

console.log(testList)
console.log(testList.getList()[0])
console.log (testItem.getTodo());
console.log (testItem.getDate()?.toString());