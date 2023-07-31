import * as s from "superstruct";
import * as d from "./declar-dsl";
import * as funSer from "urals-fnjs-function-serializer";

export const t = s.object({
    declars: s.array(d.t),
    events: s.optional(s.record(s.string(), s.func())),
    deps: s.optional(s.object()),
    init: s.optional(s.func()),
    chains: s.optional(s.record(s.string(), s.array(s.string()))),
})

export type T = s.Infer<typeof t>

export const isValid = (u: unknown) => s.is(u, t) 
    && ((u.chains) 
    //TODO: Исправить Object.keys(u.declars): это массив а не объект
        ? (Object.keys(u.chains).every(val => u.declars.map(el => el.name).includes(val)) 
            && (Object.values(u.chains)
                .reduce((acc, val) => acc.concat(val), [])
                .every(val => u.declars.map(el => el.name).includes(val)))) 
        : true)

export const serialize = (u: T): string => funSer.serialize(u)

export const deserialize = (s: string): T => {
    const res = funSer.deserialise(s)
    if(!isValid(res)) {
        throw "Invalid app-dsl serialization"
    }
    return res as T
}

export const clone = (t: T): T => ({
    declars: t.declars,
    events: t.events,
    deps: t.deps,
    init: t.init,
    chains: t.chains,
})

export const withDeclars = (t: T, d: Array<d.T>): T => {
    const c = clone(t)
    c.declars = d
    return c
}

export const withEvents = (t: T, d: Array<d.T>): T => {
    const c = clone(t)
    c.declars = d
    return c
}

export const withDeps = (t: T, d: Record<string, any>): T => {
    const c = clone(t)
    c.deps = d
    return c
}

export const withInit = (t: T, f: Function): T => {
    const c = clone(t)
    c.init = f
    return c
}

export const withChains = (t: T, r: Record<string, Array<string>>): T => {
    const c = clone(t)
    c.chains = r
    return c
}