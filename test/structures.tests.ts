import { expect } from "chai";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";
import { DataStructureFactory } from "../lib/DataStructureFactory";

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
            testee.addNewItem("firstValue");
            testee.addNewItem("secondValue");

            const result = testee.size();
            expect(result).to.equal(2);
        })

        it("retrieves value", () => 
        {
            const testee = new Queue();
            testee.addNewItem("firstValue");
            testee.addNewItem("secondValue");

            const firstResult = testee.getItem();
            const secondResult = testee.getItem();
            expect(secondResult).to.equal("firstValue");
        })

        it("peeks value", () => 
        {
            const testee = new Queue();
            testee.addNewItem("firstValue");
            testee.addNewItem("secondValue");

            const firstResult = testee.peekItem();
            const secondResult = testee.peekItem();
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
            testee.addNewItem("firstValue");

            expect(testee.isEmpty()).to.equal(false);
        })

    })

    describe("Stack", () => 
    {
        it("has size", () => 
        {
            const testee = new Stack();
            const result = testee.size();
            expect(result).to.equal(0);
        })

        it("increases size", () => 
        {
            const testee = new Stack();
            testee.addNewItem("firstValue");
            testee.addNewItem("secondValue");

            const result = testee.size();
            expect(result).to.equal(2);
        })

        it("retrieves value", () => 
        {
            const testee = new Stack();
            testee.addNewItem("firstValue");
            testee.addNewItem("secondValue");

            const firstResult = testee.getItem();
            const secondResult = testee.getItem();
            expect(secondResult).to.equal("secondValue");
        })

        it("peeks value", () => 
        {
            const testee = new Stack();
            testee.addNewItem("firstValue");
            testee.addNewItem("secondValue");

            const firstResult = testee.peekItem();
            const secondResult = testee.peekItem();
            expect(secondResult).to.equal(firstResult);
        })

        it("is empty", () => 
        {
            const testee = new Stack();

            expect(testee.isEmpty()).to.equal(true);
        })

        it("is not empty", () => 
        {
            const testee = new Stack();
            testee.addNewItem("firstValue");

            expect(testee.isEmpty()).to.equal(false);
        })

    })

    describe("Factory", () => 
    {
        it("can create Queue", () => 
        {
            const structureType = DataStructures.Queue;
            const result = DataStructureFactory.create(structureType);
            expect(result).to.be.an.instanceOf(Queue);
        })

        it("can create Stack", () => 
        {
            const structureType = DataStructures.Stack;
            const result = DataStructureFactory.create(structureType);
            expect(result).to.be.an.instanceOf(Stack);
        })
    })
})