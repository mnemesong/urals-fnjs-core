import * as s from "superstruct";
import * as d from "./declar-dsl";

export const t = s.object({
    declars: s.array(d.t),
    events: s.optional(s.record(s.string(), s.func())),
    deps: s.optional(s.object()),
    init: s.optional(s.func()),
    chains: s.optional(s.record(s.string(), s.array(s.string()))),
})

export type T = s.Infer<typeof t>

export const valid = (u: unknown) => s.is(u, t) 
    && ((u.chains) 
        ? (Object.keys(u.chains).every(val => Object.keys(u.declars).includes(val)) 
            && (Object.values(u.chains)
                .reduce((acc, val) => acc.concat(val), [])
                .every(val => Object.keys(u.declars).includes(val)))) 
        : true)

export const clone = (t: T): T => ({
    declars: t.declars,
    events: t.events,
    deps: t.deps,
    init: t.init,
    chains: t.chains,
})

export const withDeclars = (t: T, d: Array<d.T>): T => {
    const c = clone(t);
    c.declars = d;
    return c;
}

export const withEvents = (t: T, d: Array<d.T>): T => {
    const c = clone(t);
    c.declars = d;
    return c;
}