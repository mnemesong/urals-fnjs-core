import * as s from "superstruct";
import * as d from "./declar";

export const t = s.object({
    declars: s.array(d.t),
    events: s.record(s.string(), s.func()),
    deps: s.object(),
})

export type T = s.Infer<typeof t>

export const valid = (u: unknown) => s.is(u, t)