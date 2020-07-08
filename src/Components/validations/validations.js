
export const minValue = (min) => (value) =>
    value && value.length < min ? `Must be at least ${min}` : undefined

export const maxValue = (max) => (value) =>
    value && value.length > max ? `Must be at least ${max}` : undefined



export const reqaer =(value) =>
    value ?  undefined:  "require"
