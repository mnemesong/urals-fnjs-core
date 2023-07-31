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
export * as idGen from "./id-gen"
export * as record from "./record"
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

### .idGen subpackage API
```typescript
export type T = <
    IdType extends number|null|boolean|string, 
    M extends Record<string, any>
>(lastRecords: Array<r.T<IdType, M>>) => IdType

export const isValid = (u: any): boolean => {...}

export const serialize = (u: T): string => {...}

export const deserialize = (s: string): T => {...}
```

### .record subpackage API
```typescript
export type T<
    IdType extends number|null|boolean|string|symbol, 
    M extends Record<string, any>
> = {id: IdType} & M

export const isValid = (u: any): boolean => {...}

export const clone = <
    IdType extends number|null|boolean|string,
    M extends Record<string, any>
>(t: T<IdType, M>): T<IdType, M> => {...}

export const construct = <
    IdType extends number|null|boolean|string, 
    M extends Record<string, any>
>(id: IdType,  m: M): T<IdType, M> => {...}

export const extractModel = <
    IdType extends number|null|boolean|string,  
    M extends Record<string, any>
>(t: T<IdType, M>) : M => {...}
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

export const isValid = (u: unknown) => s.is(u, t);

export const clone = (t: T): T => ({
    name: t.name,
    template: t.template,
    init: t.init,
    host: t.host,
    idfunc: t.idfunc,
})

export const withName = (t: T, n: string): T => {...}

export const withTemplate = (t: T, tmpl: tmplt.T): T => {...}

export const withInit = (t: T, i: Array<Record<string, any>>): T => {...}

export const withHost = (t: T, h: string): T => {...}

export const withIdFunc = (t: T, id: id.T): T => {...}

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

export type T<Deps> = {
    declars: Array<{
        name: string,
        template: <
            Model, 
            Dependencies extends Record<string, any>
        > (m: Model, d: Dependencies) => string,
        init: object[],
        host: string,
        idfunc: <
            IdType extends number|null|boolean|string, 
            M extends Record<string, any>
        >(lastRecords: Array<r.T<IdType, M>>) => IdType
    }>,
    ?events: Record<string, (m: Model, d: Deps) => void>,
    ?deps: Deps,
    ?init: Function,
    ?chains: Record<string, Array<string>>,
}

export const isValid = (u: unknown) => {...}

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