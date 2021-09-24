import {Date} from "./Date";

export class ToDoItem
{
    private date : Date;
    private todo : string;
    /**
     * false meaning still active, whereas true means, it's done
     * @private
     */
    private isCompleted : boolean;

    constructor (todo : string, day? : number, month? : number, year? : number)
    {
        if (day === undefined || month === undefined || year === undefined)
        {
            //@ts-ignore
            this.date = null;
        }
        else
        {
            this.date = new Date(day, month, year);
        }
        this.todo = todo;
        this.isCompleted = false
    }

    public getDate ()
    {
        if (this.date === null)
        {
            return null;
        }
        else
        {
            return this.date;
        }
    }

    public setDate (day : number, month : number, year : number)
    {
        this.date = new Date(day, month, year);
    }

    public getTodo ()
    {
        return this.todo;
    }

    public setTodo (todo : string)
    {
        this.todo = todo;
    }

    public markCompleted ()
    {
        this.isCompleted = true;
    }
}