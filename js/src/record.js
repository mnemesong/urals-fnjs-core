"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.extractModel = exports.construct = exports.clone = exports.isValid = exports.t = void 0;
var s = __importStar(require("superstruct"));
exports.t = s.record(s.string(), s.any());
var isScalar = function (u) { return ((typeof u === 'boolean')
    || (typeof u === 'number')
    || (typeof u === 'string')
    || (typeof u === 'symbol')
    || (u === null)); };
var isValid = function (u) { return (s.is(u, exports.t)
    && (Object.keys(u).includes('id'))
    && (isScalar(u.id))); };
exports.isValid = isValid;
var clone = function (t) { return (__assign({}, t)); };
exports.clone = clone;
var construct = function (id, m) { return (__assign(__assign({}, m), { id: id })); };
exports.construct = construct;
var extractModel = function (t) {
    var c = (0, exports.clone)(t);
    delete c["id"];
    return c;
};
exports.extractModel = extractModel;
