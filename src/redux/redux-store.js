import {combineReducers, createStore} from "redux";
import messageReduser from "./Redusers/message-redusor";

let redusors = combineReducers({
    messages: messageReduser
})

let store = createStore(redusors);

export default store