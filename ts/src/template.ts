import * as s from "superstruct";
import * as funSer from "urals-fnjs-function-serializer";

//Function kind of: Model -> Dependencies -> String 
export const t = s.func()

export type T = s.Infer<typeof t>

export const isValid = (u: unknown) => s.is(u, t);

export const serialize = (u: T): string => funSer.serialize(u)

export const deserialize = (s: string): T => {
    const res = funSer.deserialise(s)
    if(!isValid(res)) {
        throw "Invalid app-dsl serialization"
    }
    return res as T
}