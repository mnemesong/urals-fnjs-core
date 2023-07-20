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
exports.insert = exports.t = void 0;
var s = __importStar(require("superstruct"));
exports.t = s.string();
var replaceAll = function (str, srch, rplc) {
    var newStr = str.replace(srch, rplc);
    while (str !== newStr) {
        str = newStr;
        newStr = str.replace(srch, rplc);
    }
    return str;
};
var insert = function (t, m, symL, symR) {
    if (symL === void 0) { symL = '{{'; }
    if (symR === void 0) { symR = '}}'; }
    Object.keys(m)
        .forEach(function (k) { t = replaceAll(t, symL + k + symR, m[k]); });
    return t;
};
exports.insert = insert;
