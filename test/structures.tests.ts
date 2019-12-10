import { expect } from "chai";
import { Queue } from "../lib/Queue";

describe("Data structures", () => 
{
    describe("Queue", () => 
    {
        it("has size", () => 
        {
            const testee = new Queue();
            const result = testee.size();
            expect(result).to.equal(0);
        })

        it("increases size", () => 
        {
            const testee = new Queue();
            testee.enqueue("firstValue");
            testee.enqueue("secondValue");

            const result = testee.size();
            expect(result).to.equal(2);
        })

        it("retrieves value", () => 
        {
            const testee = new Queue();
            testee.enqueue("firstValue");
            testee.enqueue("secondValue");

            const firstResult = testee.poll();
            const secondResult = testee.poll();
            expect(secondResult).to.equal("firstValue");
        })

        it("peeks value", () => 
        {
            const testee = new Queue();
            testee.enqueue("firstValue");
            testee.enqueue("secondValue");

            const firstResult = testee.peek();
            const secondResult = testee.peek();
            expect(secondResult).to.equal(firstResult);
        })

        it("is empty", () => 
        {
            const testee = new Queue();

            expect(testee.isEmpty()).to.equal(true);
        })

        it("is not empty", () => 
        {
            const testee = new Queue();
            testee.enqueue("firstValue");

            expect(testee.isEmpty()).to.equal(false);
        })

    })
    // describe("Factory", () => {
    //     it("can create Queue", () => {
    //         const structureType = DataStructures.Queue;
    //         const result = DataStructureFactory.create(structureType);
    //         expect(result).to.be.an.instanceOf(Queue);
    //     })
    // })
})