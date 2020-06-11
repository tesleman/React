let ADD_POST = 'ADD-POST'
let initialState = [

        {message: 'safsdfasdf', id: 1},
        {message: 'sfdg', id: 1},
        {message: 'sgdf', id: 1},

]
const messageReduser = (state = initialState , action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: action.postMessage,
                id: '5',

            }
            state.push(newPost)
            return state
        default:
            return state
    }
}
export let addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text})
export default messageReduser