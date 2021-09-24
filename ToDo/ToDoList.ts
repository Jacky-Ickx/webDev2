import {ToDoItem} from "./ToDoItem";

export class ToDoList
{
    private list : ToDoItem[];
    private name : string;

    constructor (name : string)
    {
        this.name = name;
        this.list = new Array();
    }

    public getList ()
    {
        return this.list;
    }

    public getName ()
    {
        return this.name;
    }

    public addItem (item : ToDoItem)
    {
        this.list.push(item);
    }
}