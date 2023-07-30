import * as s from "superstruct";
import * as tmplt from "./template";
export declare const t: s.Struct<{
    name: string;
    template: Function;
    host: string;
    init: Record<string, unknown>[];
}, {
    name: s.Struct<string, null>;
    template: s.Struct<Function, null>;
    init: s.Struct<Record<string, unknown>[], s.Struct<Record<string, unknown>, null>>;
    host: s.Struct<string, null>;
}>;
export type T = s.Infer<typeof t>;
export declare const valid: (u: unknown) => boolean;
export declare const clone: (t: T) => T;
export declare const withName: (t: T, n: string) => T;
export declare const withTemplate: (t: T, tmpl: tmplt.T) => T;
export declare const withInit: (t: T, i: Array<Record<string, any>>) => T;
export declare const withHost: (t: T, h: string) => T;
export declare const serialize: (u: T) => string;
export declare const deserialize: (s: string) => T;
