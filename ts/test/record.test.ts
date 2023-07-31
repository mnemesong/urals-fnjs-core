import * as r from "../src/record"
import * as assert from "assert"
import { describe, it } from "mocha" 

describe("record.test", () => 
{
    describe("test isValid", () => 
    {
        it("test 1", () => 
        {
            const rec = {id: 12, a: "abba"}
            assert.strictEqual(r.isValid(rec), true)
        })

        it("test 2", () => 
        {
            const rec = {id2: 12, a: "abba"}
            assert.strictEqual(r.isValid(rec), false)
        })
    })

    describe("test clone", () => 
    {
        it("test 1", () => 
        {
            const rec = {id: 12, a: "abba"}
            const cln = r.clone(rec)
            assert.deepStrictEqual(rec, cln)
        })
    })

    describe("test construct", () => 
    {
        it("test 1", () => 
        {
            const rec = {id: 12, a: "abba"}
            const mod = {a: "abba"}
            assert.deepStrictEqual(r.construct(12, mod), rec)
        })
    })

    describe("test construct", () => 
    {
        it("test 1", () => 
        {
            const rec = {id: 12, a: "abba"}
            const mod = {a: "abba"}
            assert.deepStrictEqual(r.extractModel(rec), mod)
        })
    })
})