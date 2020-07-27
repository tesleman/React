import {getAuth} from "../../Components/api/api";
import {FormErrors, stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";
import {FormAction} from "redux-form/lib/actions";
import {Dispatch} from "redux";

const SET_USER_PROFILE = 'SET-USER-PROFILE'
const LOADING_LOGIN_BUTTON = 'LOADING_LOGIN_BUTTON'
let initialState = {
    email: null as string | null,
    id: null as number | null,
    login: null as string | null,
    isAuth: false as boolean | false,
    loading: false as boolean | false
}
type  initialStateType = typeof initialState

const authReducers = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                ...action.data,
            }
        case LOADING_LOGIN_BUTTON:
            return {
                ...state,
                loading: action.loading,
            }
        default:
            return state
    }
}
type stopSubmitType = {stopSubmit(form: string, errors?: FormErrors<any, any>): FormAction;}
type actionsTyped = setAuthType | isLoadingType
type setAuthType = {
    type: typeof SET_USER_PROFILE
    data: { email: string | null, id: number | null, login: string | null, isAuth: boolean }
}

export let setAuth = (email: string | null, id: number | null, login: string | null, isAuth: boolean): setAuthType => ({
    type: SET_USER_PROFILE,
    data: {email, id, login, isAuth}
})

type isLoadingType = {
    type: typeof LOADING_LOGIN_BUTTON
    loading: boolean
}

export let isLoading = (loading: boolean): isLoadingType => ({type: LOADING_LOGIN_BUTTON, loading})


type thunkType = ThunkAction<void, AppStateType, unknown, actionsTyped>

export let thunkSetAuth = (): thunkType => async (dispatch) => {
    let data = await getAuth.auth()
    if (data.resultCode === 0) {
        let {email, id, login} = data.data
        dispatch(setAuth(email, id, login, true))
    }

}
export let thunkLogin = (formData: any)=> async (dispatch:any ) => {
    dispatch(isLoading(true))
    let data = await getAuth.login(formData)
    if (data.resultCode === 0) {
        dispatch(thunkSetAuth())
        dispatch(isLoading(false))
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Common Error"
        dispatch(stopSubmit('contact', {_error: message}))
        dispatch(isLoading(false))
    }
}
export let thunkLogout = (): thunkType => async (dispatch) => {
    let data = await getAuth.logout()
    if (data.resultCode === 0) {
        dispatch(setAuth(null, null, null, false))
    } else {
        console.log('regect')
    }
}
export default authReducers