# urals-fnjs-core
core library for uralsjs framework in functional style

## Description
Application dsl to for application initialization

## API

### index API
```typescript
export * as app from "./app-dsl"
export * as declar from "./declar-dsl"
export * as template from "./template"
```

### .template sub-package API
```typescript
//Function kind of: Model -> Dependencies -> String 
export type T = <
    Model, 
    Dependencies extends Record<string, any>
> (m: Model, d: Dependencies) => string

export const valid = (u: unknown): boolean => {...}

//Serialization with pure funcitons
export const serialize = (u: T): string => {...}

export const deserialize = (s: string): T => {...}
```


### .declar sub-package API
```typescript
//Structure with model behaviour data
export const T = {
    name: string,
    template: <
        Model, 
        Dependencies extends Record<string, any>
    > (m: Model, d: Dependencies) => string,
    init: object[],
    host: string
}

export type T = s.Infer<typeof t>

export const valid = (u: unknown): bool => {...};

export const clone = (t: T): T => {...}

export const withName = (t: T, n: string): T => {...}

export const withTemplate = (t: T, tmpl: tmplt.T): T => {...}

export const withInit = (t: T, i: Array<Record<string, any>>): T => {...}

export const withHost = (t: T, h: string): T => {...}

export const serialize = (u: T): string => {...}

export const deserialize = (s: string): T => {...}
```

### .app subpackage API
```typescript
export const t = s.object({
    declars: s.array(d.t),
    events: s.optional(s.record(s.string(), s.func())),
    deps: s.optional(s.object()),
    init: s.optional(s.func()),
    chains: s.optional(s.record(s.string(), s.array(s.string()))),
})

export type T = {
    declars: Array<{
        name: string,
        template: <
            Model, 
            Dependencies extends Record<string, any>
        > (m: Model, d: Dependencies) => string,
        init: object[],
        host: string
    }>,
    ?events: Record<string, Function>,
    ?deps: object,
    ?init: Function,
    ?chains: Record<string, Array<string>>,
}

export const valid = (u: unknown): boolean => {...}

export const serialize = (u: T): string => {...}

export const deserialize = (s: string): T => {...}

export const clone = (t: T): T => {...}

export const withDeclars = (t: T, d: Array<d.T>): T => {...}

export const withEvents = (t: T, d: Array<d.T>): T => {...}

export const withDeps = (t: T, d: Record<string, any>): T => {...}

export const withInit = (t: T, f: Function): T => {...}

export const withChains = (t: T, r: Record<string, Array<string>>): T => {...}
```

## License
MIT


## Contact
Anatoly Starodubtsev
tostar74@mail.ru