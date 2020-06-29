import {getAuth, getUsersProfile} from "../../Components/api/api";



const SET_USER_PROFILE = 'SRT-USER-PROFILE'


let initialState = {
    profile: null,

}
const profileReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}
export let setProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export let thunkSetProfile = (userId) => (dispatch) =>
    getAuth.auth()
        .then(data=>{

            if(data.resultCode === 0){
                getUsersProfile.userProfile(userId)
                    .then(data => {
                        dispatch(setProfile(data))
                    })
            }
        })




export default profileReducers