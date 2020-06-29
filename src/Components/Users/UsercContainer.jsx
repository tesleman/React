import {connect} from "react-redux";
import {
    thunkSetUsers,
    thunkCurrentPage,
    thunkUnFollow,
    thunkFollow
} from "../../redux/Redusers/users-reducers";
import UsersClass from "./UsersClass";
import {compose} from "redux";
import {widthAuthRedirect} from "../hok/WidhAuthRedirect";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        total: state.usersPage.total,
        isLoading: state.usersPage.isLoading,
        loadingButton: state.usersPage.loadingButton,

    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow:(userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow:(userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setCurrentPage:(page) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setCount:(pages) => {
//             dispatch(setCountAC(pages))
//         },
//         setUsers:(users)=>{
//             dispatch(setUsersAC(users))
//         },
//         setLoading:(loadingStatus)=>{
//             dispatch(isLoadingAC(loadingStatus))
//         }
//     }
// }
export default compose(
    connect(mapStateToProps, {
        thunkSetUsers,
        thunkCurrentPage,
        thunkUnFollow,
        thunkFollow
    }),
    widthAuthRedirect,
)(UsersClass)


