import * as s from "superstruct"
import * as funSer from "urals-fnjs-function-serializer"
import  * as r from "./record"

export const t = s.func()

export type T<
    IdType extends number|null|boolean|string, 
    M extends Record<string, any>
> = (lastRecords: Array<r.T<IdType, M>>) => IdType

export const isValid = (u: any): boolean => s.is(u, t) 
    && (funSer.optimize(u)[1].length <= 1 )

export const serialize = <
    IdType extends number|null|boolean|string, 
    M extends Record<string, any>
>(u: T<IdType, M>): string => funSer.serialize(u)

export const deserialize = <
    IdType extends number|null|boolean|string, 
    M extends Record<string, any>
>(s: string): T<IdType, M> => {
    const res = funSer.deserialise(s)
    if(!isValid(res)) {
        throw "Invalid app-dsl serialization"
    }
    return res as T<IdType, M>
}