import { it, describe } from "mocha";
import assert from "assert";
import * as app from "../src/app";

describe("test valid", () => {
    it("test 1", () => {
        const m = {
            deps: {},
            events: {
                asdd: () => true,
            },
            declars: [
                {
                    name: "das",
                    template: "9dajs9da",
                    init: [{}, {}],
                    host: 'a8hasd9',
                }
            ]
        }
        assert.strictEqual(app.valid(m), true)
    })
    it("test 2", () => {
        const m = {
            deps: {},
            events: {
                asdd: () => true,
            },
            declars: [
                {
                    name: "das",
                    //template: "9dajs9da",
                    init: [{}, {}],
                    host: 'a8hasd9',
                }
            ]
        }
        assert.strictEqual(app.valid(m), false)
    })
})