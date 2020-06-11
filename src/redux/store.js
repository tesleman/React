import messageReduser from "./Redusers/message-redusor";

let ADD_POST = 'ADD-POST'
let store = {

    _state: {
        messages: [
            {message: 'safsdfasdf', id: 1},
            {message: 'sfdg', id: 1},
            {message: 'sgdf', id: 1},
        ],

    },
    rerender() {
    },


    subscribe(observer) {
        this.rerender = observer
    },
    getState() {
        return this._state
    },


    dispatch(action) { //type: 'НАЗВАНИЕ ДЕЙСТВИЯ'

      this._state.messages =  messageReduser(this._state.messages, action)
     this.rerender(this._state)
    },


}

export default store