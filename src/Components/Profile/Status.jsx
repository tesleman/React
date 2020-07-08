import React, {useEffect, useState} from "react";
import s from "./Status.module.css"
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const Status = (props) => {

    console.log(props.userId)
    const [editMod, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    let activeEditMode = (editMod) => {
        setEditMode(editMod)
    }


    let disabledEditMode = (editMod) => {
        setEditMode(!editMod)
        props.thunkPutStatus(status)

    }
    let changeStatus = (event) => {
        setStatus(event.target.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div className={s.width}>
            <Form.Group>
                {props.match.params.userId == props.userId ?
                    <Form.Row>
                        {!editMod ?
                            <Form.Label onClick={activeEditMode} column="sm" lg={3}>
                                {props.status ? props.status : "sss"}
                            </Form.Label> : <Col>
                                <Form.Control onChange={changeStatus} className={s.collor} column="sm" size="sm"
                                              type="text" placeholder={props.status}/>
                                <Button onClick={disabledEditMode}>sss</Button>
                            </Col>
                        }
                    </Form.Row> : <Form.Label>{props.status}</Form.Label>}
            </Form.Group>
        </div>


    )

}


export default Status