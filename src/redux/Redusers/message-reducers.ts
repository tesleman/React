let ADD_POST = 'ADD-POST'

export type messagesType = {
    message: string
    id: number
}

let initialState = {
    messages: [
        {message: 'safsdfasdf', id: 1},
        {message: 'sfdg', id: 2},
        {message: 'sgdf', id: 3},
    ] as Array<messagesType>
}


type initialStateType = typeof initialState

const messageReducers = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                ...action.postMessage, id: 5,
            }
            let copyState = {...state}
            copyState.messages = [...state.messages, newPost]
            return copyState
        default:
            return state
    }
}

type  addPostActionCreatorType = {
    type: typeof ADD_POST
    postMessage:string
}

export let addPostActionCreator = (text: string):addPostActionCreatorType => ({type: ADD_POST, postMessage: text})
export default messageReducers
