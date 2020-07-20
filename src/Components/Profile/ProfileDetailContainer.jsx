import {connect} from "react-redux";
import {handleFile, thunkGetStatus, thunkPutStatus, thunkSetProfile} from "../../redux/Redusers/profile-reducers";
import ProfileClass from "./ProfilClass";
import {withRouter} from "react-router-dom";
import {compose} from "redux";




let mapStateToProps = (state) => {


    return {
        userId: state.auth.id,
        profile: state.userProfile.profile,
        status: state.userProfile.status,
    }
}
export default compose(
    connect(mapStateToProps, {handleFile, thunkSetProfile, thunkGetStatus ,thunkPutStatus}),
    withRouter,
 )(ProfileClass)

