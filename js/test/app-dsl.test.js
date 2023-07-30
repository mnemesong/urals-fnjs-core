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
var app = __importStar(require("../src/app-dsl"));
(0, mocha_1.describe)("app-dsl.test", function () {
    (0, mocha_1.describe)("test valid", function () {
        (0, mocha_1.it)("test 1", function () {
            var m = {
                deps: {},
                events: {
                    asdd: function () { return true; },
                },
                declars: [
                    {
                        name: "das",
                        template: function () { return "9dajs9da"; },
                        init: [{}, {}],
                        host: 'a8hasd9',
                    }
                ]
            };
            assert_1.default.strictEqual(app.valid(m), true);
        });
        (0, mocha_1.it)("test 2", function () {
            var m = {
                deps: {},
                events: {
                    asdd: function () { return true; },
                },
                declars: [
                    {
                        name: "das",
                        //template: "9dajs9da",
                        init: [{}, {}],
                        host: 'a8hasd9',
                    }
                ]
            };
            assert_1.default.strictEqual(app.valid(m), false);
        });
    });
});
