import * as s from "superstruct";
export declare const t: s.Struct<Function, null>;
export type T = s.Infer<typeof t>;
export declare const isValid: (u: unknown) => boolean;
export declare const serialize: (u: T) => string;
export declare const deserialize: (s: string) => T;
