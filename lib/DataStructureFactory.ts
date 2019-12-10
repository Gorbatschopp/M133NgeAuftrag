import { IDataScructure } from "./IDataStructure";
import { Queue } from "./Queue";
import { Stack } from "./Stack";

export class DataStructureFactory
{
   public static create(structure: number) : IDataScructure
   {
        switch(structure)
        {
            case DataStructures.Queue: {
                return new Queue();
            }

            case DataStructures.Stack: {
                return new Stack();
            }
        }
   }
}