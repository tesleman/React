import React, {createRef} from "react";
import {Field, reduxForm} from "redux-form";
import {Button, Col, Container, Row, Overlay, Popover} from "react-bootstrap";
import {thunkLogin} from "../../redux/Redusers/auth-reducer";
import {connect} from "react-redux";
import {renderField} from "../FormValidate/FormValidate";
import {minValue, reqaer} from "../validations/validations";
import {Redirect} from "react-router-dom";
// import s from './login.module.css'

let target = createRef()
let minLenght = minValue(6)
let LoginForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit} ref={target}>
            <div>
                <label htmlFor="email">email</label>
                <Field name="email" component={renderField} validate={[reqaer]} type="email"/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <Field name="password" component={renderField} validate={[reqaer, minLenght]} type="password"/>
            </div>
            {props.error ? <Overlay
                show={true}
                placement="right-start"
                target={target.current}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Title as="h3">Popover bottom</Popover.Title>
                    <Popover.Content>
                        <strong>{props.error}</strong> Check this info.
                    </Popover.Content>
                </Popover>
            </Overlay> : "SomeError"

            }
            <Button variant="light" type="submit">Submit</Button>
        </form>
    )
}
let ContactForm = reduxForm({form: 'contact'})(LoginForm)
let Login = (props) => {
    const onSubmit = (formData) => {
        props.thunkLogin(formData)
    }
    if (props.isAuth) return  <Redirect to={'/Detail'} />
    return (<div>
            <Container>
                <h1>Login</h1>
                <Row xl={12}>
                    <Col sm={8}>
                        <ContactForm onSubmit={onSubmit}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    loggedIn: state.auth.loggedIn})
let LoginCont = connect(mapStateToProps, {thunkLogin})(Login)
export default LoginCont