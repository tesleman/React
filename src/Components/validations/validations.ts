
export const minValue = (min:number) => (value:string) =>
    value && value.length < min ? `Must be at least ${min}` : undefined

export const maxValue = (max:number) => (value:string) =>
    value && value.length > max ? `Must be at least ${max}` : undefined



export const reqaer: FieldValidatorType =(value) =>
    value ?  undefined:  "require"


export const website: FieldValidatorType =(value) =>
    value.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi ) ?  undefined :  "not site"

export type FieldValidatorType = (value: string) => string | undefined