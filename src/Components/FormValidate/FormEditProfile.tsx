import React from "react";
import {WrappedFieldProps} from "redux-form";
import {renderFieldType} from "../Login/FormValidate";

export const renderEditField:React.FC<WrappedFieldProps & renderFieldType> = ({

                                input,
                                label,
                                type,
                                meta: {touched, error},
                                ...props
                            }) => (<div>
        <label>{label}</label>
        <div>
            <input  {...props}{...input}  type={type} />
            {touched &&
            (error &&<span>{error}</span>)}
        </div>
    </div>

)

