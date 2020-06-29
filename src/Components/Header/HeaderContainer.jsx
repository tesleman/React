import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {thunkSetAuth} from "../../redux/Redusers/auth-reducer";


class HeaderContainerClass extends React.Component {

    componentDidMount() {

        this.props.thunkSetAuth()
    }

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
const HeaderContainer = connect(mapStateToProps, {thunkSetAuth})(HeaderContainerClass)
export default HeaderContainer