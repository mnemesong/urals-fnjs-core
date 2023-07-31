"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var r = __importStar(require("../src/record"));
var assert = __importStar(require("assert"));
var mocha_1 = require("mocha");
(0, mocha_1.describe)("record.test", function () {
    (0, mocha_1.describe)("test isValid", function () {
        (0, mocha_1.it)("test 1", function () {
            var rec = { id: 12, a: "abba" };
            assert.strictEqual(r.isValid(rec), true);
        });
        (0, mocha_1.it)("test 2", function () {
            var rec = { id2: 12, a: "abba" };
            assert.strictEqual(r.isValid(rec), false);
        });
    });
    (0, mocha_1.describe)("test clone", function () {
        (0, mocha_1.it)("test 1", function () {
            var rec = { id: 12, a: "abba" };
            var cln = r.clone(rec);
            assert.deepStrictEqual(rec, cln);
        });
    });
    (0, mocha_1.describe)("test construct", function () {
        (0, mocha_1.it)("test 1", function () {
            var rec = { id: 12, a: "abba" };
            var mod = { a: "abba" };
            assert.deepStrictEqual(r.construct(12, mod), rec);
        });
    });
    (0, mocha_1.describe)("test construct", function () {
        (0, mocha_1.it)("test 1", function () {
            var rec = { id: 12, a: "abba" };
            var mod = { a: "abba" };
            assert.deepStrictEqual(r.extractModel(rec), mod);
        });
    });
});
