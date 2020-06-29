import {connect} from "react-redux";
import {thunkSetProfile} from "../../redux/Redusers/profile-reducers";
import ProfileClass from "./ProfilClass";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
//import {widthAuthRedirect} from "../hok/WidhAuthRedirect";


let mapStateToProps = (state) => {


    return {
        profile: state.userProfile.profile,


    }
}
export default compose(
    connect(mapStateToProps, {thunkSetProfile}),
    withRouter,
    // widthAuthRedirect,
 )(ProfileClass)

