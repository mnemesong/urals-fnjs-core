import * as s from "superstruct";
export declare const t: s.Struct<string, null>;
export type T = s.Infer<typeof t>;
export declare const insert: (t: T, m: Record<string, string>, symL?: string, symR?: string) => string;
