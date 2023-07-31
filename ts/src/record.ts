import { type } from "os";
import * as s from "superstruct";

export const t = s.record(s.string(), s.any())

export type T<
    IdType extends number|null|boolean|string|symbol, 
    M extends Record<string, any>
> = {id: IdType} & M

const isScalar = (u: any) => ((typeof u === 'boolean')
    || (typeof u === 'number')
    || (typeof u === 'string')
    || (typeof u === 'symbol')
    || (u === null))

export const isValid = (u: any): boolean => (s.is(u, t) 
    && (Object.keys(u).includes('id')) 
    && (isScalar(u.id)))

export const clone = <
    IdType extends number|null|boolean|string,
    M extends Record<string, any>
>(t: T<IdType, M>): T<IdType, M> => ({...t})

export const construct = <
    IdType extends number|null|boolean|string, 
    M extends Record<string, any>
>(
    id: IdType, 
    m: M
): T<IdType, M> => ({...m, id: id})

export const extractModel = <
    IdType extends number|null|boolean|string,  
    M extends Record<string, any>
>(t: T<IdType, M>) : M => {
    const c = clone(t)
    delete c["id"]
    return c
}