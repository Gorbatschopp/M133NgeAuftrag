export interface IDataScructure {
    size(): number;
    addNewItem(value): void;
    getItem();
    peekItem();
    isEmpty(): boolean;
}