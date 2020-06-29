import React from "react";
import s from "./Sidebar.module.css"
import {Link} from "react-router-dom";


const Sidebar = () => {

    let refreshPage = () => {
        window.location.reload();
    }

    return (

        <ul className={s.sideNav}>


            <li onClick={refreshPage}><Link  to={'/Detail/8614'}  >My Profile</Link></li>
            <li> <Link to={'/Stories'}>My Stories</Link></li>
            <li> <Link to={'/Users'}>Users</Link></li>
        </ul>

    );
}
export default Sidebar