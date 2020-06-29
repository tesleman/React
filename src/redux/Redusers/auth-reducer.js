import {getAuth} from "../../Components/api/api";

const SET_USER_PROFILE = 'SRT-USER-PROFILE'


let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,

}
const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:

            return {...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state
    }
}
export let setAuth = (email, id, login) => ({type: SET_USER_PROFILE, data:{email, id, login}})

export let thunkSetAuth = () => (dispatch)=>{
    getAuth.auth()
        .then(data=>{
            if(data.resultCode === 0){
                let {email, id, login} = data.data
                dispatch(setAuth(email, id, login))
            }
        }
        )}


export default authReducers