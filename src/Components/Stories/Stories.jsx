import React from "react";
import s from './Stories.module.css'
import StoriesItem from "./StoriesItem/StoriesItem";
import {Field, reduxForm} from "redux-form";
import {Button, Col, Container} from "react-bootstrap";
import {renderField} from "../FormValidate/FormValidate";
import {maxValue, reqaer} from "../validations/validations";

const minValue13 = maxValue(13)
const StoriesForma = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.wrapper}>
                <Field component={renderField}

                       validate={[minValue13, reqaer]}
                       name="message"
                       type="text"
                       label="blabla"
                       className={s.textarea}/>
                <br/>
                <Button className={s.stories_btn} variant="light" type="submit">Send</Button>

            </div>
        </form>
    )
}
let StoriesForm = reduxForm({form: 'stories'})(StoriesForma)
const Stories = React.memo((props) => {
    let map = props.messages.messages.map(m => <StoriesItem messages={m.message} key={m.id}/>)
    let onSubmit = (message) => {
        props.addPost(message)
    }


    return (<div>

            <StoriesForm onSubmit={onSubmit}/>
            <Container>
                <Col md={{span: 6, offset: 2}}>
                    {map}
                </Col>

            </Container>
        </div>

    )
})
export default Stories