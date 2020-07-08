import {addPostActionCreator} from "../../redux/Redusers/message-reducers";
import Stories from "./Stories";
import {connect} from "react-redux";
import {compose} from "redux";
import {widthAuthRedirect} from "../hok/WidhAuthRedirect";


let mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

export default compose(widthAuthRedirect,
connect(mapStateToProps, mapDispatchToProps))(Stories)

