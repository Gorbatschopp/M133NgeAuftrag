import { IDataScructure } from "./IDataStructure";

export class Stack<T> implements IDataScructure 
{
    _storage: T[] = [];

    public size(): number 
    {
        return this._storage.length;
    }

    public addNewItem(value: T)
    {
        this._storage.push(value);
    }

    public peekItem()
    {
        var firstElement = this._storage.pop();
        this.addNewItem(firstElement);

        for(var i = 0; i < this.size() - 1; i++)
        {
            this.addNewItem(this.getItem());
        }

        return firstElement;
    }

    public getItem()
    {
        return this._storage.pop();
    }

    public isEmpty() : boolean
    {
        return this.size() > 0;
    }
}