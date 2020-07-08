import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {thunkLogout} from "../../redux/Redusers/auth-reducer";


class HeaderContainerClass extends React.Component {



    render() {
        return (
            <Header {...this.props}/>
        );
    }
}


let mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth,
    login: state.auth.login
})
const HeaderContainer = connect(mapStateToProps, {thunkLogout})(HeaderContainerClass)
export default HeaderContainer