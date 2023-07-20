import { it, describe } from "mocha";
import assert from "assert";
import * as t from "../src/template";

describe("test insert", () => {
    it("test 1", () => {
        const template = 'Hello {{n1}}! Its me, {{n2}}'
        const model = {
            n1: 'Mike',
            n2: 'Keily',
            n3: 'Joseph'
        }
        const result = t.insert(template, model);
        const nominal = 'Hello Mike! Its me, Keily';
        assert.strictEqual(nominal, result);
    })
})
