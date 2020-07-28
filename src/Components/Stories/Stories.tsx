import React from "react";
import s from './Stories.module.css'
import StoriesItem from "./StoriesItem/StoriesItem";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button, Col, Container} from "react-bootstrap";
import {renderField} from "../Login/FormValidate";
import {maxValue, reqaer} from "../validations/validations";
import {messagesType} from "../../redux/Redusers/message-reducers";
// :React.FC <InjectedFormProps<{}>>
const minValue13 = maxValue(13)
type propsType={

}

const StoriesForma:React.FC <InjectedFormProps<messageType, {}> & {}> = (props) => {
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
let StoriesForm = reduxForm<messageType, {}>({form: 'stories'})(StoriesForma)

type addPostType = {addPost:(text: messageType) => void }
type messageType = {
    message: string
}
export type MapPropsType = {
    messages: Array<messagesType>
}
const Stories:React.FC<MapPropsType & addPostType> = React.memo((props) => {
     console.log(props)
      let map = [...props.messages].map(m => <StoriesItem messages={m.message} key={m.id}/>)

    let onSubmit = (message:messageType) => {
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