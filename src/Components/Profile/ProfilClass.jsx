import React, {useEffect} from "react";
import Profile from "./Profile";
import Detail from "./Detail";
import Status from "./Status";
import Container from "react-bootstrap/Container";


function ProfileClass(props) {

    useEffect((props) => {
        let userId = props.match.params.userId
        if(!props.match.params.userId){
            userId = props.userId
        }
        props.thunkSetProfile(userId)
        props.thunkGetStatus(userId)
    }, [props.match.params.userId])

    return (<div>
            <Container>
                <Status {...props}/>
                <Profile {...props}/>
                <Detail {...props}/>

            </Container>

        </div>

    )

}

export default ProfileClass