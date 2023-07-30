import * as s from "superstruct";
import * as tmplt from "./template";

export const t = s.object({
    name: s.string(),
    template: tmplt.t,
    init: s.array(s.object()),
    host: s.string(),
})

export type T = s.Infer<typeof t>

export const valid = (u: unknown) => s.is(u, t);