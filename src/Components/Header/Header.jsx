import React from 'react';

const Header = () => {
    return (
        <nav className="nav-wrapper">
            <div className="brand-logo">Logo</div>

            <form>
                <ul className="right margin-right">
                    <li>
                        <div>A link</div>
                    </li>
                    <li>
                        <div>A second link</div>
                    </li>
                    <li>
                        <div>A third link</div>
                    </li>
                </ul>
            </form>
        </nav>
    );
}
export default Header