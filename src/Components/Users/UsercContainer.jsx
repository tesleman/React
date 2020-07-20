import {connect} from "react-redux";
import { thunkSetUsers, thunkCurrentPage, thunkUnFollow, thunkFollow } from "../../redux/Redusers/users-reducers";
import UsersClass from "./UsersClass";
import {compose} from "redux";
import {currentPage, isLoading, loadingButton, pageSize, total, usersPage} from "../../redux/Selectors/user-selectors";


let mapStateToProps = (state) => {
    return {
        users: usersPage(state),
        pageSize: pageSize(state),
        currentPage: currentPage(state),
        total: total(state),
        isLoading: isLoading(state),
        loadingButton: loadingButton(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        thunkSetUsers,
        thunkCurrentPage,
        thunkUnFollow,
        thunkFollow
    }),
)(UsersClass)


