import {applyMiddleware, combineReducers, createStore} from "redux";
import messageReduser from "./Redusers/message-reducers";
import userReducers from "./Redusers/users-reducers";
import profileReducers from "./Redusers/profile-reducers";
import authReducers from "./Redusers/auth-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    messages: messageReduser,
    usersPage: userReducers,
    userProfile: profileReducers,
    auth: authReducers
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store