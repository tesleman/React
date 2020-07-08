import React from 'react';
import {Link} from "react-router-dom";
import {NavDropdown} from "react-bootstrap";
import s from "./Header.module.css"
const Header = (props) => {

    return (

        <nav className="nav-wrapper">
            <div className="brand-logo">Logo</div>

            <form>
                <ul className="right margin-right padding-0">
                    <li>
                        { props.isAuth ?    <NavDropdown title={props.login} id="basic-nav-dropdown">
                                <NavDropdown.Item   className={s.padding_0} onClick={props.thunkLogout}>Logout</NavDropdown.Item>

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