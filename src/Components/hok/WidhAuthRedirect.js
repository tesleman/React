import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
let mapStateTToPropsWithAuthRedirect = (state) =>( {
    isAuth: state.auth.isAuth
})
export const widthAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        render() {

            if (!this.props.isAuth) return  <Redirect to={'/22'} />
            return <Component {...this.props}/>
        }


     }
    return connect(mapStateTToPropsWithAuthRedirect)(RedirectComponent)

}