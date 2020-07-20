import React from "react";

export const renderEditField = ({

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

