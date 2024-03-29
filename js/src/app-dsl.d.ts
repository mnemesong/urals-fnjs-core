import * as s from "superstruct";
export declare const t: s.Struct<{
    init: Function;
    declars: {
        name: string;
        template: Function;
        host: string;
        init: Record<string, any>[];
        idfunc: Function;
    }[];
    events: Record<string, Function>;
    deps: Record<string, unknown>;
    chains: Record<string, string[]>;
}, {
    declars: s.Struct<{
        name: string;
        template: Function;
        host: string;
        init: Record<string, any>[];
        idfunc: Function;
    }[], s.Struct<{
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
    }>>;
    events: s.Struct<Record<string, Function>, null>;
    deps: s.Struct<Record<string, unknown>, null>;
    init: s.Struct<Function, null>;
    chains: s.Struct<Record<string, string[]>, null>;
}>;
export type T = s.Infer<typeof t>;
export declare const isValid: (u: unknown) => boolean;
export declare const serialize: (u: T) => string;
export declare const deserialize: (s: string) => T;
export declare const clone: (t: T) => T;
export declare const withDeclars: (t: T, d: {
    name: string;
    template: Function;
    host: string;
    init: Record<string, any>[];
    idfunc: Function;
}[]) => T;
export declare const withEvents: (t: T, d: {
    name: string;
    template: Function;
    host: string;
    init: Record<string, any>[];
    idfunc: Function;
}[]) => T;
export declare const withDeps: (t: T, d: Record<string, any>) => T;
export declare const withInit: (t: T, f: Function) => T;
export declare const withChains: (t: T, r: Record<string, Array<string>>) => T;
