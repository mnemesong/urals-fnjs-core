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
exports.deserialize = exports.serialize = exports.withIdFunc = exports.withHost = exports.withInit = exports.withTemplate = exports.withName = exports.clone = exports.isValid = exports.t = void 0;
var s = __importStar(require("superstruct"));
var tmplt = __importStar(require("./template"));
var funSer = __importStar(require("urals-fnjs-function-serializer"));
var id = __importStar(require("./id-gen"));
var rec = __importStar(require("./record"));
//Structure with model behaviour data
exports.t = s.object({
    name: s.string(),
    template: tmplt.t,
    init: s.array(rec.t),
    host: s.string(),
    idfunc: id.t,
});
var isValid = function (u) { return s.is(u, exports.t); };
exports.isValid = isValid;
var clone = function (t) { return ({
    name: t.name,
    template: t.template,
    init: t.init,
    host: t.host,
    idfunc: t.idfunc,
}); };
exports.clone = clone;
var withName = function (t, n) {
    var c = (0, exports.clone)(t);
    c.name = n;
    return c;
};
exports.withName = withName;
var withTemplate = function (t, tmpl) {
    var c = (0, exports.clone)(t);
    c.template = tmpl;
    return c;
};
exports.withTemplate = withTemplate;
var withInit = function (t, i) {
    var c = (0, exports.clone)(t);
    c.init = i;
    return c;
};
exports.withInit = withInit;
var withHost = function (t, h) {
    var c = (0, exports.clone)(t);
    c.host = h;
    return c;
};
exports.withHost = withHost;
var withIdFunc = function (t, id) {
    var c = (0, exports.clone)(t);
    c.idfunc = id;
    return c;
};
exports.withIdFunc = withIdFunc;
var serialize = function (u) { return funSer.serialize(u); };
exports.serialize = serialize;
var deserialize = function (s) {
    var res = funSer.deserialise(s);
    if (!(0, exports.isValid)(res)) {
        throw "Invalid app-dsl serialization";
    }
    return res;
};
exports.deserialize = deserialize;
