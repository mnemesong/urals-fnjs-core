import { it, describe } from "mocha";
import assert from "assert";
import * as d from "../src/declar-dsl";

describe("declar-dsl.test", () => {
    describe("test valid", () => {
        it("test 1", () => {
            const model = {
                name: "das",
                template: "9dajs9da",
                init: [{}, {}],
                host: 'a8hasd9',
            }
            assert.strictEqual(d.valid(model), true)
        })
        it("test 2", () => {
            const model = {
                name: "das",
                template: "9dajs9da",
                host: 'a8hasd9',
            }
            assert.strictEqual(d.valid(model), false)
        }),
        it("test 3", () => {
            const model = {
                name: "das",
                template: "9dajs9da",
                init: [{}, {}],
                host: 'a8hasd9',
                hffl: 123
            }
            assert.strictEqual(d.valid(model), false)
        })
    })
})