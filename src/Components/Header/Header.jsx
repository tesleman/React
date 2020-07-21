import React, {useEffect} from 'react';

import {NavDropdown} from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';
import s from "./Header.module.css"


const Header = (props) => {


    return (


        <nav className="nav-wrapper">
            <div className="brand-logo">Logo</div>

            <form>
                <ul className="right margin-right padding-0">
                    <li>
                        { props.isAuth ?    <NavDropdown title={props.login} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#/Login"  className={s.padding_0} onClick={ props.thunkLogout}>Logout</NavDropdown.Item>
                                <NavDropdown.Item  href="#/Edit" className={s.padding_0} >Edit Profile</NavDropdown.Item>

                            </NavDropdown>

                        : <Link to={'/Login'}>Login</Link>
                        }

                    </li>

                </ul>
            </form>
        </nav>
    );
}
export default Header