export class Date
{
    private day : number;
    private month : number;
    private year : number;

    constructor (day : number, month : number, year : number)
    {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public setDate (day : number, month: number, year : number)
    {
        this.day = day;
        this.month = month;
        this. year = year;
    }

    public getDay ()
    {
        return this.day;
    }

    public getMonth ()
    {
        return this.month;
    }

    public getYear ()
    {
        return this.year;
    }

    public toString () : string
    {
        return this.day + "." + this.month + "." + this.year;
    }
}