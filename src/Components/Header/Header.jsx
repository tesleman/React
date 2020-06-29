import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {

    return (

        <nav className="nav-wrapper">
            <div className="brand-logo">Logo</div>

            <form>
                <ul className="right margin-right">
                    <li>
                        { props.isAuth ? props.login
                        : <Link to={'/Login'}>Login</Link>
                        }

                    </li>

                </ul>
            </form>
        </nav>
    );
}
export default Header