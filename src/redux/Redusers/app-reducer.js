import {thunkSetAuth} from "./auth-reducer";

let SET_LOADING = "SET_LOADING"


let initialState = {
    isLoading: false,

}



const appReducers = (state = initialState, action) => {

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
export let setLoading = () => ({type: SET_LOADING})

export let  initializeThunk =  () => (dispatch) =>{
let promise = dispatch(thunkSetAuth())

    Promise.all([promise])
        .then(() => {
            dispatch(setLoading())

        })





}
export default appReducers