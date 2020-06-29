import React from "react";
import Profile from "./Profile";
import Detail from "./Detail";




class ProfileClass extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId){
            userId = 8614
        }
        this.props.thunkSetProfile(userId)

    }

    render() {

        return (<div>
                <Profile {...this.props}/>
                <Detail {...this.props}/>
            </div>
        )
    }


}

export default ProfileClass