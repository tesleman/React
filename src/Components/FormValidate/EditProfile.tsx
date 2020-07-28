import React from "react";
import {Field, InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";
import {Button, Col, Container, Row, Overlay, Popover} from "react-bootstrap";
import {connect} from "react-redux";
import {FieldValidatorType, reqaer, website} from "../validations/validations";
import {renderEditField} from "./FormEditProfile";
import {profileType, thunkChangProfile} from "../../redux/Redusers/profile-reducers";
import {AppStateType} from "../../redux/redux-store";
import s from './FormValidate.module.css'
import {renderFieldType} from "../Login/FormValidate";
import {profile} from "../../redux/Selectors/propfile-selector";
import {Redirect} from "react-router";

export type GetStringKeys<T> = Extract<keyof T, string>
type EditFormParamTypeStringTypes = GetStringKeys<EditFormParamType>


export function  fieldCreator<GetStringKeys  extends string> (name:GetStringKeys,
                           component:React.FC<WrappedFieldProps &  renderFieldType>,
                           [validate]: Array<FieldValidatorType>,
                           placeholder: string,
                           type: string
){
    return  <Field name={name}
                   component={component} validate={validate} placeholder={placeholder}
                   type={type}/>
}
type EditFormParamType={
    LookingForAJobDescription:string | null
    FullName: string | null
    AboutMe:string | null
    contacts: {
        github: string | null
        vk: string | null
        facebook:string | null
        instagram:string | null
        twitter:string | null
        website:string | null
        youtube:string | null
        mainLink:string | null
    }
}

let EditForm: React.FC<InjectedFormProps<EditFormParamType>> = ({ handleSubmit, error}) => {
    let target = React.useRef(null)
console.log(profile)
    return (
        <form onSubmit={handleSubmit} ref={target}>
            <div>


                <label>lookingForAJob
                    <Field className={s.field}    name="lookingForAJob" id="employed" component={renderEditField} type="checkbox" />
                </label>


                {fieldCreator<EditFormParamTypeStringTypes>('LookingForAJobDescription', renderEditField, [reqaer], 'lookingForAJob', 'text')}
                {fieldCreator<EditFormParamTypeStringTypes>('FullName', renderEditField, [reqaer], 'fullName', 'text')}
                {fieldCreator<EditFormParamTypeStringTypes>('AboutMe', renderEditField, [reqaer], 'aboutMe', 'text')}
                {fieldCreator('contacts.github', renderEditField, [reqaer, website], 'github', 'text')}
                {fieldCreator('contacts.vk', renderEditField, [reqaer, website], 'vk', 'text')}
                {fieldCreator('contacts.facebook', renderEditField, [reqaer, website], 'facebook', 'text')}
                {fieldCreator('contacts.instagram', renderEditField, [reqaer, website], 'instagram', 'text')}
                {fieldCreator('contacts.twitter', renderEditField, [reqaer, website], 'twitter', 'text')}
                {fieldCreator('contacts.website', renderEditField, [], 'website', 'text')}
                {fieldCreator('contacts.youtube', renderEditField, [], 'youtube', 'text')}
                {fieldCreator('contacts.mainLink', renderEditField, [], 'mainLink', 'text')}

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
                        <strong>{error}</strong> Check this info.
                    </Popover.Content>
                </Popover>
            </Overlay> : ""

            }
            <Button style={{marginBottom: '250px'}} variant="light" type="submit">Submit</Button>
        </form>
    )
}



let EditFormForm = reduxForm<EditFormParamType>({form: 'edit'})(EditForm)
let Edit:React.FC<mapDispatchToPropsType & mownPropsType>  = (props) => {

    const onSubmit = (formData: EditFormParamType) => {
        console.log(formData)
        props.thunkChangProfile(formData)
    }

    if (!props.isAuth) {
        return <Redirect to={"/Detail"}/>
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

type propsType = mownPropsType & mapDispatchToPropsType
type mownPropsType={
    isAuth: boolean
}
type mapDispatchToPropsType ={
    thunkChangProfile: (formData: any)=> void
}


let mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,


})

export default connect(mapStateToProps, {thunkChangProfile})(Edit)
