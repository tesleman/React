import React from "react";
import s from "./Sidebar.module.css"
import {connect} from "react-redux";
import {compose} from "redux";
import { HashLink as Link } from 'react-router-hash-link';


const Sidebar = () => {
    return (
        <ul className={s.sideNav}>
            <li ><Link  to={`/Detail/`}>My Profile</Link></li>
            <li> <Link to={'/Stories'}>My Stories</Link></li>
            <li> <Link to={'/Users'}>Users</Link></li>
        </ul>
    );
}
let mapStateToProps = (state) => {
   return{
       myId: state.auth.id
   }
}
export default compose(
    connect(mapStateToProps,{})) (Sidebar)