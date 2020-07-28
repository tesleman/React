import React, {FC, useEffect} from "react";
import Profile from "./Profile";
import Detail from "./Detail";
import Status from "./Status";
import Container from "react-bootstrap/Container";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {
    handleFile,
    profileType,
    setStatus,
    thunkGetStatus, thunkPutStatus,
    thunkSetProfile
} from "../../redux/Redusers/profile-reducers";
import {AppStateType} from "../../redux/redux-store";
import {profile, status, userId} from "../../redux/Selectors/propfile-selector";
import {compose} from "redux";

import {connect} from "react-redux";


type PathParamsType = {
    userId: string,



}
export type mapDispatchTypeProfile = {
    thunkSetProfile:(userId: number) => void
    thunkGetStatus:(userId: number) => void
    handleFile: (handleFile: File) => void
    thunkPutStatus: (status: string) => void
}

type propsType  = {
    userId: number


}


let  ProfileClass:FC<RouteComponentProps<PathParamsType> & propsType & mapDispatchTypeProfile & mapStateToPropsType> = (props  ) => {



    useEffect(() => {
        let userId:number = +props.match.params.userId
        if (!props.match.params.userId) {
            userId = props.userId
        }
        props.thunkSetProfile(userId)
        props.thunkGetStatus(userId)
    }, [props.match.params.userId])


        return (<div >
                <Container style={{textAlign: "center"}} >
                    <Status
                        {...props}
                        status={props.status}
                            thunkPutStatus={props.thunkPutStatus}
                            profile={props.profile}
                            userId={props.userId}
                    />
                    <Profile {...props}/>
                    <Detail {...props}/>
                </Container>

            </div>

        )

}
type mapStateToPropsType = {
    userId: number
    profile: profileType
    status: string

}
let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        userId: userId(state),
        profile: profile(state),
        status: status(state),
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, {thunkSetProfile,thunkGetStatus, setStatus,thunkPutStatus, handleFile}),
)(ProfileClass)
    