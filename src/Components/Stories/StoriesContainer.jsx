import React from "react";

import {addPostActionCreator} from "../../redux/Redusers/message-redusor";
import Stories from "./Stories";
import StoreContext from "../../StoreContext";


const StoriesContiner = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                    let state = store.getState()
                    let addPost = (text) => {


                       store.dispatch(addPostActionCreator(text))
                    }
                    return  <Stories addPost={addPost} messages={state.messages}/>
                }



            }

        </StoreContext.Consumer>
    )
}
export default StoriesContiner