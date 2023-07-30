import * as s from "superstruct";
export declare const t: s.Struct<{
    name: string;
    template: string;
    host: string;
    init: Record<string, unknown>[];
}, {
    name: s.Struct<string, null>;
    template: s.Struct<string, null>;
    init: s.Struct<Record<string, unknown>[], s.Struct<Record<string, unknown>, null>>;
    host: s.Struct<string, null>;
}>;
export type T = s.Infer<typeof t>;
export declare const valid: (u: unknown) => boolean;
