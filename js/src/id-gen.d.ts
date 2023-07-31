import * as s from "superstruct";
import * as r from "./record";
export declare const t: s.Struct<Function, null>;
export type T<IdType extends number | null | boolean | string, M extends Record<string, any>> = (lastRecords: Array<r.T<IdType, M>>) => IdType;
export declare const isValid: (u: any) => boolean;
export declare const serialize: <IdType extends string | number | boolean, M extends Record<string, any>>(u: T<IdType, M>) => string;
export declare const deserialize: <IdType extends string | number | boolean, M extends Record<string, any>>(s: string) => T<IdType, M>;
