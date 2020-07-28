import React from "react";
import s from "./Sidebar.module.css"
import {connect} from "react-redux";
import {compose} from "redux";
import { HashLink as Link } from 'react-router-hash-link';
import {AppStateType} from "../../redux/redux-store";

type propsType ={
    myId: number | null
}

const Sidebar:React.FC<propsType> = (props) => {
    return (
        <ul className={s.sideNav}>
            {props.myId ? <li> <Link to={`/Detail/`}>My Profile</Link></li> : ''}
            <li> <Link to={'/Stories'}>My Stories</Link></li>
            <li> <Link to={'/Users'}>Users</Link></li>
        </ul>
    );
}
let mapStateToProps = (state:AppStateType):propsType => {
   return{
       myId: state.auth.id
   }
}
export default compose(
    connect(mapStateToProps,{})) (Sidebar)