import React, {SetStateAction, useEffect, useState} from "react";
import s from "./Status.module.css"
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {profileType} from "../../redux/Redusers/profile-reducers";

type propsType ={
    status: string
    thunkPutStatus: (status: string) => void
    profile: profileType
    userId: number

}

const Status:React.FC<propsType> = (props) => {
    const [editMod, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    let activeEditMode = (editMod: boolean) => {
        setEditMode(editMod)
    }
    let disabledEditMode = (editMod: boolean) => {
        setEditMode(editMod)
        props.thunkPutStatus(status)
    }
    let changeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div className={s.width}>
            <Form.Group>
                { props.profile && props.profile.userId  === props.userId?
                    <Form.Row>
                        {!editMod ?
                            <Form.Row   className={s.textColor} onClick={()=>activeEditMode(true)} >
                                {props.status ? props.status : "sss"}
                            </Form.Row> : <Col>
                                <Form.Control onChange={changeStatus} className={s.collor}  size="sm"
                                           value={status}   type="text" placeholder={props.status}/>
                                <Button style={{float: 'left'}} onClick={()=>disabledEditMode(false)}>Sssubmit</Button>
                            </Col>
                        }
                    </Form.Row> :  <Form.Row><Form.Label className={s.textColor}>{props.status}</Form.Label></Form.Row>  }
            </Form.Group>
        </div>
    )
}
export default Status