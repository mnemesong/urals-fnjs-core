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
exports.withEvents = exports.withDeclars = exports.clone = exports.valid = exports.t = void 0;
var s = __importStar(require("superstruct"));
var d = __importStar(require("./declar-dsl"));
exports.t = s.object({
    declars: s.array(d.t),
    events: s.optional(s.record(s.string(), s.func())),
    deps: s.optional(s.object()),
    init: s.optional(s.func()),
    chains: s.optional(s.record(s.string(), s.array(s.string()))),
});
var valid = function (u) { return s.is(u, exports.t)
    && ((u.chains)
        ? (Object.keys(u.chains).every(function (val) { return Object.keys(u.declars).includes(val); })
            && (Object.values(u.chains)
                .reduce(function (acc, val) { return acc.concat(val); }, [])
                .every(function (val) { return Object.keys(u.declars).includes(val); })))
        : true); };
exports.valid = valid;
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
