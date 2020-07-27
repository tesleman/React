import {connect} from "react-redux";
import {
    thunkSetUsers,
    thunkCurrentPage,
    thunkUnFollow,
    thunkFollow,
    usersType
} from "../../redux/Redusers/users-reducers";
import UsersClass, {mapDispatchType, propsType} from "./UsersClass";
import {compose} from "redux";
import {currentPage, getId, isLoading, loadingButton, pageSize, total, usersPage} from "../../redux/Selectors/user-selectors";
import {AppStateType} from "../../redux/redux-store";


type mapStateToPropsType ={
    currentPage: number
    pageSize:number
    total: number
    isLoading: boolean
    userId: number
    loadingButton: Array<number>
    users: Array<usersType>

}

let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        users: usersPage(state),
        pageSize: pageSize(state),
        currentPage: currentPage(state),
        total: total(state),
        isLoading: isLoading(state),
        loadingButton: loadingButton(state),
        userId: getId(state)
    }
}

export default compose(
    //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
    connect<propsType,mapDispatchType,{},AppStateType>(mapStateToProps, {
        thunkSetUsers,
        thunkCurrentPage,
        thunkUnFollow,
        thunkFollow
    }),
)(UsersClass)


