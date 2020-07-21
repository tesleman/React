import React from "react";

import { Overlay, Popover} from "react-bootstrap";
let target = React.createRef();
export const renderField = ({

                                input,
                                label,
                                type,
                                meta: { touched, error },
                                ...props
                            }) => (

    <div  >

        <label>{label}</label>
        <div>
            <input ref={target} {...props}{...input} placeholder={label} type={type}   />
            {touched &&
            (error  &&
                <Overlay
                    show={true}
                    placement="right-start"
                    target={target.current}
                    containerPadding={20}
                >
                    <Popover id="popover-contained">
                        <Popover.Title as="h3">Error</Popover.Title>
                        <Popover.Content>
                            <strong>{error}</strong>
                        </Popover.Content>
                    </Popover>
                </Overlay> )}
        </div>
    </div>

)

