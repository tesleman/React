import s from "../Stories.module.css";
import React from "react";

let  StoriesItem = (props)=> {
    return(
        <div className={s.stories_item}>
            <p>{props.messages}</p>
        </div>
    )
}
export default StoriesItem