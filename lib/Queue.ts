import { IDataScructure } from "./IDataStructure";

export class Queue<T> implements IDataScructure 
{
    _storage: T[] = [];

    public size(): number 
    {
        return this._storage.length;
    }

    public enqueue(value: T)
    {
        this._storage.push(value);
    }

    public peek()
    {
        var firstElement = this._storage.shift();
        this.enqueue(firstElement);
        return firstElement;
    }

    public poll()
    {
        return this._storage.shift();
    }

    public isEmpty() : boolean
    {
        return this._storage.length > 0;
    }
}