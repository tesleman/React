import React, {FC} from "react";
import s from "./Detail.module.css"
import Preloader from "../Preloader/Preloader";
import {contactsType, profileType} from "../../redux/Redusers/profile-reducers";

type contactType =  {
    profile: profileType
}

type propsType ={
    title:string | null
    value: string | null
}
const Contact:React.FC<propsType> =({title, value})=> {
  return(
      <tr>
        <td>{title}</td>
        <td>{value}</td>
  </tr>)
}

const Detail:FC<contactType> = (props) => {

    if (!props.profile) {

        return <Preloader/>

    }

    return (<div className={s.greed}>
            <table>
                <tbody>
                <tr>
                    <td colSpan={2}>Contacts</td>
                </tr>
                {Object.keys(props.profile.contacts).map(m => {
                    return <Contact title={m} value={props.profile.contacts[m as keyof contactsType]} />
                } ) }
                </tbody>
            </table>
        </div>

    )
}
export default Detail