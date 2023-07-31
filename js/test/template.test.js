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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var assert_1 = __importDefault(require("assert"));
var t = __importStar(require("../src/template"));
(0, mocha_1.describe)("template.test", function () {
    (0, mocha_1.describe)("test valid", function () {
        (0, mocha_1.it)("test 1", function () {
            var template = function (m, d) { return "Hello ".concat(m.n1, "! Its me, ").concat(m.n2); };
            assert_1.default.strictEqual(t.isValid(template), true);
        });
        (0, mocha_1.it)("test 2", function () {
            var template = {};
            assert_1.default.strictEqual(t.isValid(template), false);
        });
    });
    (0, mocha_1.describe)("test serialize", function () {
        (0, mocha_1.it)("test 1", function () {
            var template = function (m, d) { return "Hello ".concat(m.n1, "! Its me, ").concat(m.n2); };
            assert_1.default.strictEqual(t.isValid(template), true);
        });
        (0, mocha_1.it)("test 2", function () {
            var template = {};
            assert_1.default.strictEqual(t.isValid(template), false);
        });
    });
});
