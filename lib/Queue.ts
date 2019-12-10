import { IDataScructure } from "./IDataStructure";

export class Queue<T> implements IDataScructure 
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
        var firstElement = this._storage.shift();
        this.addNewItem(firstElement);
        return firstElement;
    }

    public getItem()
    {
        return this._storage.shift();
    }

    public isEmpty() : boolean
    {
        return this.size() > 0;
    }
}