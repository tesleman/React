import React from "react";
import s from "./Sidebar.module.css"
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <ul className={s.sideNav}>


            <li><Link  to={'/Detail'}>My Profile</Link></li>
            <li> <Link to={'/Stories'}>My Stories</Link></li>
        </ul>

    );
}
export default Sidebar