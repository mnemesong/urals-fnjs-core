import { it, describe } from "mocha";
import assert from "assert";
import * as id from "../src/id-gen";

describe("id-gen.test", () => 
{
    describe("test-valid", () => 
    {
        it("test 1", () => 
        {
            const f = () => 12
            assert.strictEqual(id.isValid(f), true)
        })

        it("test 2", () => 
        {
            type R = {id: number} & Record<string, any>
            const f = (a: Array<R>) => (Math.max(...a.map(el => el.id)) + 1)
            assert.strictEqual(id.isValid(f), true)
        })

        it("test 1", () => 
        {
            type R = {id: number} & Record<string, any>
            const f = (a: Array<R>, b: number) => (
                Math.max(...a.map(el => el.id)) + 1 + b)
            assert.strictEqual(id.isValid(f), false)
        })
    })
})