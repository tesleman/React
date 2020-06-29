import React from "react";
import s from './Stories.module.css'
import StoriesItem from "./StoriesItem/StoriesItem";


const Stories = (props) => {


    let map = props.messages.messages.map(m => <StoriesItem messages={m.message} key={m.id}/>)
    let newPostText = React.createRef()

    let addPost = () => {

        let text = newPostText.current.value
        props.addPost(text)
        newPostText.current.value = ''
    }

    return (<div>
            <div className={s.wrapper}>
                <textarea className={s.textarea} ref={newPostText} defaultValue="asf" placeholder="Some text"/>
                <br/>
                <div onClick={addPost} className={s.stories_btn + " btn"}>Send</div>
                {map}
            </div>
        </div>

    )
}
export default Stories