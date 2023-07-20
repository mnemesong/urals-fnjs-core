import * as s from "superstruct";
export declare const t: s.Struct<{
    declars: {
        name: string;
        template: string;
        host: string;
        init: Record<string, unknown>[];
    }[];
    events: Record<string, Function>;
    deps: Record<string, unknown>;
}, {
    declars: s.Struct<{
        name: string;
        template: string;
        host: string;
        init: Record<string, unknown>[];
    }[], s.Struct<{
        name: string;
        template: string;
        host: string;
        init: Record<string, unknown>[];
    }, {
        name: s.Struct<string, null>;
        template: s.Struct<string, null>;
        init: s.Struct<Record<string, unknown>[], s.Struct<Record<string, unknown>, null>>;
        host: s.Struct<string, null>;
    }>>;
    events: s.Struct<Record<string, Function>, null>;
    deps: s.Struct<Record<string, unknown>, null>;
}>;
export type T = s.Infer<typeof t>;
export declare const valid: (u: unknown) => boolean;
