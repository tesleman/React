import React from "react";
import s from "./Sidebar.module.css"
import {Link, } from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";



const Sidebar = (props) => {

    // let refreshPage = () => {
    //     window.location.reload();
    // }

    return (

        <ul className={s.sideNav}>


            <li ><Link  to={`/Detail/${props.myId}`}>My Profile</Link></li>
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