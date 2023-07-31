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
exports.withChains = exports.withInit = exports.withDeps = exports.withEvents = exports.withDeclars = exports.clone = exports.deserialize = exports.serialize = exports.isValid = exports.t = void 0;
var s = __importStar(require("superstruct"));
var d = __importStar(require("./declar-dsl"));
var funSer = __importStar(require("urals-fnjs-function-serializer"));
exports.t = s.object({
    declars: s.array(d.t),
    events: s.optional(s.record(s.string(), s.func())),
    deps: s.optional(s.object()),
    init: s.optional(s.func()),
    chains: s.optional(s.record(s.string(), s.array(s.string()))),
});
var isValid = function (u) { return s.is(u, exports.t)
    && ((u.chains)
        //TODO: Исправить Object.keys(u.declars): это массив а не объект
        ? (Object.keys(u.chains).every(function (val) { return u.declars.map(function (el) { return el.name; }).includes(val); })
            && (Object.values(u.chains)
                .reduce(function (acc, val) { return acc.concat(val); }, [])
                .every(function (val) { return u.declars.map(function (el) { return el.name; }).includes(val); })))
        : true); };
exports.isValid = isValid;
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
var clone = function (t) { return ({
    declars: t.declars,
    events: t.events,
    deps: t.deps,
    init: t.init,
    chains: t.chains,
}); };
exports.clone = clone;
var withDeclars = function (t, d) {
    var c = (0, exports.clone)(t);
    c.declars = d;
    return c;
};
exports.withDeclars = withDeclars;
var withEvents = function (t, d) {
    var c = (0, exports.clone)(t);
    c.declars = d;
    return c;
};
exports.withEvents = withEvents;
var withDeps = function (t, d) {
    var c = (0, exports.clone)(t);
    c.deps = d;
    return c;
};
exports.withDeps = withDeps;
var withInit = function (t, f) {
    var c = (0, exports.clone)(t);
    c.init = f;
    return c;
};
exports.withInit = withInit;
var withChains = function (t, r) {
    var c = (0, exports.clone)(t);
    c.chains = r;
    return c;
};
exports.withChains = withChains;
