import {getUsersProfile} from "../../Components/api/api";


const SET_USER_PROFILE = 'SRT-USER-PROFILE'
const SET_USER_STATUS = 'SRT-USER-STATUS'
const SET_USER_PHOTO = 'localhost/my-site/SET_USER_PHOTO'


let initialState = {
    profile: null,
    status: "Default status"

}

const profileReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_PHOTO:
            return {...state, profile:{...state.profile, photos: action.photos}}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}
export let setProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export let setStatus = (status) => ({type: SET_USER_STATUS, status})
export let setPhotos = (photos) => ({type: SET_USER_PHOTO, photos})
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
export let thunkSetProfile = (userId) => async (dispatch) => {
   let data = await getUsersProfile.userProfile(userId)
            dispatch(setProfile(data))
}
export let handleFile = (file) => async (dispatch) => {
 let response = await getUsersProfile.putPhotos(file)
if (response.resultCode === 0) {
    dispatch(setPhotos(response.data.photos))
}}

export let thunkChangProfile = (data) => async (dispatch) => {
    let response = await getUsersProfile.ChangProfile(data)
    debugger
    if (response.resultCode === 0)
    dispatch(setProfile(data))
}
export default profileReducers