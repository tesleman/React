import {getAuth} from "../../Components/api/api";
import {stopSubmit} from "redux-form";

const SET_USER_PROFILE = 'SET-USER-PROFILE'
let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
}
const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}
export let setAuth = (email, id, login, isAuth) => ({type: SET_USER_PROFILE, data: {email, id, login, isAuth}})
export let thunkSetAuth = () => (dispatch) => {
    return getAuth.auth()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    dispatch(setAuth(email, id, login, true))
                }
            }
        )
}
export let thunkLogin = (formData) => (dispatch) => {
    getAuth.login(formData)
        .then(data => {
                if (data.resultCode === 0) {
                    dispatch(thunkSetAuth())
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : "Common Error"
                    dispatch(stopSubmit('contact', {_error: message}))
                }
            }
        )
}
export let thunkLogout = () => (dispatch) => {
    getAuth.logout()
        .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuth(null, null, null, false))
                } else {
                    console.log('regect')
                }
            }
        )
}
export default authReducers