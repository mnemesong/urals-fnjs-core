import { it, describe } from "mocha";
import assert from "assert";
import * as i from "../src/index";

describe("index.test", () => {
    describe("test app", () => {
        it("test 1", () => {
            assert.strictEqual(i.app.valid(12), false)
        })
    })
    
    describe("test declar", () => {
        it("test 1", () => {
            assert.strictEqual(i.declar.valid(12), false)
        })
    })
    
    describe("test template", () => {
        it("test 1", () => {
            assert.strictEqual(i.template.valid(12), false)
        })
    })
})