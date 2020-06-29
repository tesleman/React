let ADD_POST = 'ADD-POST'
let initialState = {
    messages: [
        {message: 'safsdfasdf', id: 1},
        {message: 'sfdg', id: 2},
        {message: 'sgdf', id: 3},
    ]
}


const messageReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: action.postMessage,
                id: 5,
            }
            let copyState = {...state}
            copyState.messages = [...state.messages, newPost]

            return copyState
        default:
            return state
    }
}
export let addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text})
export default messageReducers