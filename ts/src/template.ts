import * as s from "superstruct";

export const t = s.string()

export type T = s.Infer<typeof t>

const replaceAll = (str: string, srch: string, rplc: string): string => {
    let newStr = str.replace(srch, rplc);
    while(str !== newStr) {
        str = newStr
        newStr = str.replace(srch, rplc)
    }
    return str;
}

export const valid = (u: unknown) => s.is(u, t);

export const insert = (
    t: T, 
    m: Record<string, string>, 
    symL = '{{', 
    symR = '}}'
) => {
    Object.keys(m)
        .forEach((k) => {t = replaceAll(t, symL + k + symR, m[k])})
    return t;
}