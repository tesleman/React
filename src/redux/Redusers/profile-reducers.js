import {getUsersProfile} from "../../Components/api/api";


const SET_USER_PROFILE = 'SRT-USER-PROFILE'
const SET_USER_STATUS = 'SRT-USER-STATUS'


let initialState = {
    profile: null,
    status: "Default status"

}
const profileReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}
export let setProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export let setStatus = (status) => ({type: SET_USER_STATUS, status})
export let thunkGetStatus = (userId) => (dispatch) =>
    getUsersProfile.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data))
        })
export let thunkPutStatus = (dataStatus) => (dispatch) => {
    getUsersProfile.putStatus(dataStatus)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(dataStatus))
            }

        })
}

export let thunkSetProfile = (userId) => (dispatch) => {
    getUsersProfile.userProfile(userId)
        .then(data => {
            dispatch(setProfile(data))
        })
}


export default profileReducers