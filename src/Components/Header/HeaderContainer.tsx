import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {thunkLogout} from "../../redux/Redusers/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export type thunkLogoutType = {
    thunkLogout:  ()=> void
}

let HeaderContainerClass: React.FC<propsType & thunkLogoutType >  = (props)=> {




        return (
            <Header {...props}/>
        );

}

export type propsType ={
    isAuth: boolean
    login: string | null
}

let mapStateToProps = (state:AppStateType):propsType => ({

    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default  connect(mapStateToProps, {thunkLogout})(HeaderContainerClass)
