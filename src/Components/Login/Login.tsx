import React, {useRef} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button, Col, Container, Row, Overlay, Popover} from "react-bootstrap";
import {thunkLogin} from "../../redux/Redusers/auth-reducer";
import {connect} from "react-redux";
import {GetStringKeys, renderField} from "./FormValidate";
import {minValue, reqaer} from "../validations/validations";
import { withRouter} from "react-router-dom";
 import s from './login.module.css'
import {compose} from "redux";
import {widthautAuthRedirect} from "../hok/WidhAuthRedirect";
import {AppStateType} from "../../redux/redux-store";
import {fieldCreator} from "../FormValidate/EditProfile";


let minLenght = minValue(3)
let LoginForm: React.FC<InjectedFormProps<formDataType, mapStateToPropsType > & mapStateToPropsType> = ({handleSubmit, error,loading}) => {
    let target = useRef(null)

    return (
        <form onSubmit={handleSubmit} ref={target}>
            <div>
                <label htmlFor="email">email</label>
                {fieldCreator<formDataTypeKey>("email", renderField,[reqaer], "email", "email")}
            </div>
            <div>
                <label htmlFor="password">password</label>
                {fieldCreator<formDataTypeKey>("password", renderField,[reqaer, minLenght], "password", "password")}

            </div>
            {error ? <Overlay
                show={true}
                placement="right-start"
                target={target.current}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Title as="h3">Popover bottom</Popover.Title>
                    <Popover.Content>
                        <strong>{error}</strong>
                    </Popover.Content>
                </Popover>
            </Overlay> : ""

            }
            <Button disabled={loading} variant="primary"  type="submit">Submit</Button>
            <a className={s.href + "light"}   href="https://social-network.samuraijs.com/signUp">Registration</a>

        </form>

    )
}


let ContactForm = reduxForm< formDataType, mapStateToPropsType>({form: 'contact'})(LoginForm)

type formDataTypeKey = GetStringKeys<formDataType>
type formDataType ={
    email: string
    password: string

}
type mapDispatchToPropsType = {
    thunkLogin: (formData: formDataType) => void
}
export type mapStateToPropsType ={
    loading: boolean
}

let Login:React.FC<mapDispatchToPropsType & mapStateToPropsType>  = (props) => {
    const onSubmit = (formData:formDataType) => {
        props.thunkLogin(formData)
    }
    return (<div>
            <Container>
                <h1>Login</h1>
                <Row xl={12}>
                    <Col sm={8}>
                        <ContactForm {...props} onSubmit={onSubmit}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



let mapStateToProps = (state:AppStateType):mapStateToPropsType => ({
    loading: state.auth.loading,
})
export default compose(
    withRouter,
    widthautAuthRedirect,
    connect(mapStateToProps, {thunkLogin}))(Login)
