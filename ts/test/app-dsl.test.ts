import { it, describe } from "mocha";
import assert from "assert";
import * as app from "../src/app-dsl";

describe("app-dsl.test", () => {
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
                        template: () => "9dajs9da",
                        init: [{}, {}],
                        host: 'a8hasd9',
                        idfunc: (cols) => 12
                    },
                    {
                        name: "fus",
                        template: () => "9dajs9da",
                        init: [{}, {}],
                        host: 'a8hasd9',
                        idfunc: (cols) => 12
                    }
                ],
                chains: {
                    das: ['fus']
                }
            }
            assert.strictEqual(app.isValid(m), true)
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
                        idfunc: (cols) => 12
                    }
                ]
            }
            assert.strictEqual(app.isValid(m), false)
        })

        it("test 3", () => {
            const m = {
                deps: {},
                events: {
                    asdd: () => true,
                },
                declars: [
                    {
                        name: "das",
                        template: () => "9dajs9da",
                        init: [{}, {}],
                        host: 'a8hasd9',
                        idfunc: (cols) => 12
                    },
                    {
                        name: "fus",
                        template: () => "9dajs9da",
                        init: [{}, {}],
                        host: 'a8hasd9',
                        idfunc: (cols) => 12
                    }
                ],
                chains: {
                    das: ['gum']
                }
            }
            assert.strictEqual(app.isValid(m), false)
        })
    })
})