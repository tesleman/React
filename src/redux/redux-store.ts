import {applyMiddleware, combineReducers, createStore} from "redux";
import messageReduser from "./Redusers/message-reducers";
import userReducers from "./Redusers/users-reducers";
import profileReducers from "./Redusers/profile-reducers";
import authReducers from "./Redusers/auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducers from "./Redusers/app-reducer";

let reducersRoot = combineReducers({
    messages: messageReduser,
    usersPage: userReducers,
    auth: authReducers,
    userProfile: profileReducers,
    form: formReducer,
    app: appReducers
})
type reducersRootType = typeof  reducersRoot
export type AppStateType = ReturnType<reducersRootType>

let store = createStore(reducersRoot, applyMiddleware(thunk));

export default store