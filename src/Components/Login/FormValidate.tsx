import React from "react";
import {WrappedFieldProps} from "redux-form";


export  type renderFieldType ={
    label:string
    type:string
}


export const renderField:React.FC<WrappedFieldProps & renderFieldType>  = ({

                                input,
                                label,
                                type,
                                meta: { touched, error },
                                ...props
                            }) => (

    <div>

        <label>{label}</label>
        <div>
            <input  {...props}{...input} placeholder={label} type={type}   />
            {touched &&
            (error  &&
                <span>{error}</span> )}
        </div>
    </div>

)

 export type GetStringKeys<T> = Extract<keyof T, string>