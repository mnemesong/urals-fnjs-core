import { it, describe } from "mocha";
import assert from "assert";
import * as t from "../src/template";

describe("template.test", () => {
    
    describe("test valid", () => {
        it("test 1", () => {
            type Model = {n1: "John", n2: "Sue"}
            const template = (m: Model, d: any) => `Hello ${m.n1}! Its me, ${m.n2}`
            assert.strictEqual(t.isValid(template), true);
        })
        it("test 2", () => {
            const template = {}
            assert.strictEqual(t.isValid(template), false);
        })
    })

    describe("test serialize", () => {
        it("test 1", () => {
            type Model = {n1: "John", n2: "Sue"}
            const template = (m: Model, d: any) => `Hello ${m.n1}! Its me, ${m.n2}`
            assert.strictEqual(t.isValid(template), true);
        })
        it("test 2", () => {
            const template = {}
            assert.strictEqual(t.isValid(template), false);
        })
    })
})
