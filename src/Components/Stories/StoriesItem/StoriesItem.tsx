import s from "../Stories.module.css";
import React from "react";
type propsType ={
    messages: string
}
let  StoriesItem = (props: propsType)=> {
    return(
        <div className={s.stories_item}>
            <p>{props.messages}</p>
        </div>
    )
}
export default StoriesItem