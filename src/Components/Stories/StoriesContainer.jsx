import {addPostActionCreator} from "../../redux/Redusers/message-reducers";
import Stories from "./Stories";
import {connect} from "react-redux";


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

const StoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Stories)

export default StoriesContainer