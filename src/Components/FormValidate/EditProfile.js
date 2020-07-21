import React from "react";
import {Field, reduxForm} from "redux-form";
import {Button, Col, Container, Row, Overlay, Popover} from "react-bootstrap";
import {connect} from "react-redux";
import {reqaer, website} from "../validations/validations";
import {renderEditField} from "./FormEditProfile";
import {thunkChangProfile} from "../../redux/Redusers/profile-reducers";

let EditForm = (props) => {
    let target = React.useRef(null)
  let fieldCreator = (name, component, [validate], placeholder, type)=>{
   return  <Field name={name}
             component={component} validate={validate} placeholder={placeholder}
             type={type}/>
  }
    return (
        <form onSubmit={props.handleSubmit} ref={target}>
            <div>
                <label htmlFor="Data">Profile</label>

                <label htmlFor="Data">lookingForAJob
                    <Field style={{zIndex: '5', opacity: '1', pointerEvents: 'auto', position: 'relative'}}
                           name="lookingForAJob" id="employed" component={renderEditField} type="checkbox" />
                </label>
                {fieldCreator('lookingForAJobDescription', renderEditField, [reqaer], 'lookingForAJob', 'text')}
                {fieldCreator('fullName', renderEditField, [reqaer], 'fullName', 'text')}
                {fieldCreator('aboutMe', renderEditField, [reqaer], 'aboutMe', 'text')}
                {fieldCreator('contacts.github', renderEditField, [reqaer, website], 'github', 'text')}
                {fieldCreator('contacts.vk', renderEditField, [reqaer, website], 'vk', 'text')}
                {fieldCreator('contacts.facebook', renderEditField, [reqaer, website], 'facebook', 'text')}
                {fieldCreator('contacts.instagram', renderEditField, [reqaer, website], 'instagram', 'text')}
                {fieldCreator('contacts.twitter', renderEditField, [reqaer, website], 'twitter', 'text')}
                {fieldCreator('contacts.website', renderEditField, [], 'website', 'text')}
                {fieldCreator('contacts.youtube', renderEditField, [], 'youtube', 'text')}
                {fieldCreator('contacts.mainLink', renderEditField, [], 'mainLink', 'text')}

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
            </Overlay> : ""

            }
            <Button style={{marginBottom: '250px'}} variant="light" type="submit">Submit</Button>
        </form>
    )
}
let EditFormForm = reduxForm({form: 'edit'})(EditForm)
let Edit = (props) => {

    const onSubmit = (formData) => {
        props.thunkChangProfile(formData)
    }

    return (<div>
            <Container>
                <h1 style={{color: 'white'}}>Edit Profile</h1>
                <Row xl={12}>
                    <Col sm={8}>
                        <EditFormForm onSubmit={onSubmit}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.id,
})
let EditCont = connect(mapStateToProps, {thunkChangProfile})(Edit)
export default EditCont