
export const minValue = (min) => (value) =>
    value && value.length < min ? `Must be at least ${min}` : undefined

export const maxValue = (max) => (value) =>
    value && value.length > max ? `Must be at least ${max}` : undefined



export const reqaer =(value) =>
    value ?  undefined:  "require"


export const website =(value) =>
    value.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi ) ?  undefined :  "not site"
