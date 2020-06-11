import React from "react";
import s from './Stories.module.css'
import StoriesItem from "./StoriesItem/StoriesItem";



const Stories = (props) => {


    let map = props.messages.map(m => <StoriesItem messages={m.message}/>)
    let newPostText = React.createRef()

    let addPost = () => {

        let text = newPostText.current.value
        props.addPost(text)


    }

    return (<div>
            <div className={s.wrapper}>
                <textarea className={s.textarea} ref={newPostText} placeholder="Some text"/>
                <br/>
                <div onClick={addPost} className={s.stories_btn + " btn"}>Send</div>
                {map}
            </div>
        </div>

    )
}
export default Stories