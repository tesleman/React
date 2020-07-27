import {thunkSetAuth} from "./auth-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../redux-store";
import {ThunkAction} from "redux-thunk";



let SET_LOADING = "SET_LOADING"


let initialState = {
    isLoading: false as boolean,
}

type initialStateType = typeof initialState

const appReducers = (state = initialState, action: any):initialStateType => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state
    }
}
type setLoadingType = {
    type: typeof SET_LOADING
}
export let setLoading = ():setLoadingType => ({type: SET_LOADING})
type thunkType = ThunkAction<void, AppStateType, unknown, setLoadingType>
export let  initializeThunk = ():thunkType => (dispatch) =>{
let promise = dispatch(thunkSetAuth())
    Promise.all([promise])
        .then(() => {
            dispatch(setLoading())
        })
}
export default appReducers;