import React from "react";
import s from "./Detail.module.css"
import Preloader from "../Preloader/Preloader";


const Detail = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (<div className={s.greed}>
            <table>
                <tbody>
                <tr>
                    <td colspan="2">Contacts</td>
                </tr>
                <tr>
                    <td>facebook</td>
                    <td>{props.profile.contacts.facebook}</td>
                </tr>

                <tr>
                    <td>vk</td>
                    <td>{props.profile.contacts.vk}</td>
                </tr>
                <tr>
                    <td>twitter</td>
                    <td>{props.profile.contacts.twitter}</td>
                </tr>
                <tr>
                    <td>instagram</td>
                    <td>{props.profile.contacts.instagram}</td>
                </tr>
                <tr>
                    <td>github</td>
                    <td>{props.profile.contacts.github}</td>
                </tr>
                </tbody>
            </table>
        </div>

    )
}
export default Detail