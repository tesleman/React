import {connect} from "react-redux";
import {
    handleFile,
    profileType,
    thunkGetStatus,
    thunkPutStatus,
    thunkSetProfile
} from "../../redux/Redusers/profile-reducers";
import ProfileClass, {mapDispatchTypeProfile} from "./ProfilClass";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
// import {AppStateType} from "../../redux/redux-store";
// import {profile, userId, status} from "../../redux/Selectors/propfile-selector";
//
//
//
// type mapStateToPropsType = {
//     userId: number
//     profile: profileType
//     status: string
//
// }
//
// let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
//
//     return {
//         userId: userId(state),
//         profile: profile(state),
//         status: status(state),
//     }
// }
//  let ProfileDetailContainer = compose(
//     withRouter,
//     connect<mapStateToPropsType, mapDispatchTypeProfile,{},AppStateType>(mapStateToProps,
//         {thunkSetProfile,thunkGetStatus}),
// )(ProfileClass)


