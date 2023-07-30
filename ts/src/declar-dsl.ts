import * as s from "superstruct";
import * as tmplt from "./template";
import * as funSer from "urals-fnjs-function-serializer";

//Structure with model behaviour data
export const t = s.object({
    name: s.string(),
    template: tmplt.t,
    init: s.array(s.object()),
    host: s.string(),
})

export type T = s.Infer<typeof t>

export const valid = (u: unknown) => s.is(u, t);

export const clone = (t: T): T => ({
    name: t.name,
    template: t.template,
    init: t.init,
    host: t.host
})

export const withName = (t: T, n: string): T => {
    const c = clone(t)
    c.name = n
    return c
}

export const withTemplate = (t: T, tmpl: tmplt.T): T => {
    const c = clone(t)
    c.template = tmpl
    return c
}

export const withInit = (t: T, i: Array<Record<string, any>>): T => {
    const c = clone(t)
    c.init = i
    return c
}

export const withHost = (t: T, h: string): T => {
    const c = clone(t)
    c.host = h
    return c
}

export const serialize = (u: T): string => funSer.serialize(u)

export const deserialize = (s: string): T => {
    const res = funSer.deserialise(s)
    if(!valid(res)) {
        throw "Invalid app-dsl serialization"
    }
    return res as T
}