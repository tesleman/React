import {addPostActionCreator, messagesType} from "../../redux/Redusers/message-reducers";
import Stories from "./Stories";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../hok/WidhAuthRedirect";
import {AppStateType} from "../../redux/redux-store";
import React from "react";


let mapStateToProps = (state:AppStateType) => {
    return {
        messages: state.messages.messages
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addPost: (text:string) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

export default compose<React.ComponentType>(withAuthRedirect,
connect(mapStateToProps, mapDispatchToProps))(Stories)

