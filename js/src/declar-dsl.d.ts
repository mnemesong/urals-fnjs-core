import * as s from "superstruct";
import * as tmplt from "./template";
import * as id from "./id-gen";
export declare const t: s.Struct<{
    name: string;
    template: Function;
    host: string;
    init: Record<string, any>[];
    idfunc: Function;
}, {
    name: s.Struct<string, null>;
    template: s.Struct<Function, null>;
    init: s.Struct<Record<string, any>[], s.Struct<Record<string, any>, null>>;
    host: s.Struct<string, null>;
    idfunc: s.Struct<Function, null>;
}>;
export type T = s.Infer<typeof t>;
export declare const isValid: (u: unknown) => boolean;
export declare const clone: (t: T) => T;
export declare const withName: (t: T, n: string) => T;
export declare const withTemplate: (t: T, tmpl: tmplt.T) => T;
export declare const withInit: (t: T, i: Array<Record<string, any>>) => T;
export declare const withHost: (t: T, h: string) => T;
export declare const withIdFunc: <IdType extends string | number | boolean, M extends Record<string, any>>(t: T, id: id.T<IdType, M>) => T;
export declare const serialize: (u: T) => string;
export declare const deserialize: (s: string) => T;
