import * as s from "superstruct";
export declare const t: s.Struct<Record<string, any>, null>;
export type T<IdType extends number | null | boolean | string | symbol, M extends Record<string, any>> = {
    id: IdType;
} & M;
export declare const isValid: (u: any) => boolean;
export declare const clone: <IdType extends string | number | boolean, M extends Record<string, any>>(t: T<IdType, M>) => T<IdType, M>;
export declare const construct: <IdType extends string | number | boolean, M extends Record<string, any>>(id: IdType, m: M) => T<IdType, M>;
export declare const extractModel: <IdType extends string | number | boolean, M extends Record<string, any>>(t: T<IdType, M>) => M;
