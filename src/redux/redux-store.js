import {applyMiddleware, combineReducers, createStore} from "redux";
import messageReduser from "./Redusers/message-reducers";
import userReducers from "./Redusers/users-reducers";
import profileReducers from "./Redusers/profile-reducers";
import authReducers from "./Redusers/auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducers from "./Redusers/app-reducer";

let reducers = combineReducers({
    messages: messageReduser,
    usersPage: userReducers,
    auth: authReducers,
    userProfile: profileReducers,
    form: formReducer,
    app: appReducers
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store