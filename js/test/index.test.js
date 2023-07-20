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
var i = __importStar(require("../src/index"));
(0, mocha_1.describe)("test app", function () {
    (0, mocha_1.it)("test 1", function () {
        assert_1.default.strictEqual(i.app.valid(12), false);
    });
});
(0, mocha_1.describe)("test declar", function () {
    (0, mocha_1.it)("test 1", function () {
        assert_1.default.strictEqual(i.declar.valid(12), false);
    });
});
(0, mocha_1.describe)("test template", function () {
    (0, mocha_1.it)("test 1", function () {
        assert_1.default.strictEqual(i.template.valid(12), false);
    });
});
