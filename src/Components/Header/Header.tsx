import React, {useEffect} from 'react';

import {NavDropdown} from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';
import s from "./Header.module.css"
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {propsType, thunkLogoutType} from "./HeaderContainer";




const Header: React.FC<RouteComponentProps & propsType & thunkLogoutType>  = (props) => {

    useEffect(()=>{

        if(!props.isAuth) {
            props.history.push("/Login/")
        }


    },[props.isAuth])

    return (


        <nav className="nav-wrapper">
            <div className="brand-logo">Logo</div>

            <form>
                <ul className="right margin-right padding-0">
                    <li>
                        { props.isAuth ?    <NavDropdown title={props.login} id="basic-nav-dropdown">
                                <NavDropdown.Item   className={s.padding_0} onClick={()=>{
                                    props.thunkLogout()
                                   props.history.push("/Login")
                                }}  href="#/Login" >Logout</NavDropdown.Item>
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


export default compose (withRouter) (Header)
