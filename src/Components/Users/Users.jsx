import React from "react";
import s from "./usrs.module.css"
import * as axios from 'axios'
let Users = (props) => {
if (props.users.length === 0 ){

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {props.setUsers(response.data.items) } )


    // props.setUsers(
    //     [
    //         {
    //             id: 1,
    //             follow: true,
    //             photoUrl: 'https://onlineteachersuk.com/ru/wp-content/uploads/2015/10/some-any-much-many-1280x720.jpg',
    //             status: 'some status',
    //             location: {city: 'SomeCity', country: 'some country'}
    //         },
    //         {
    //             id: 2,
    //             follow: true,
    //             photoUrl: 'https://onlineteachersuk.com/ru/wp-content/uploads/2015/10/some-any-much-many-1280x720.jpg',
    //             status: 'some status',
    //             location: {city: 'SomeCity', country: 'some country'}
    //         },
    //         {
    //             id: 3,
    //             follow: true,
    //             photoUrl: 'https://onlineteachersuk.com/ru/wp-content/uploads/2015/10/some-any-much-many-1280x720.jpg',
    //             status: 'some status',
    //             location: {city: 'SomeCity', country: 'some country'}
    //         },
    //     ]
    // )
}
    return ( <div className={s.tanks}>

            {props.users.map(u => <div className={s.card}
                key={u.id}>
                <img className={s.photo} src={
                    u.photos.small ? u.photos.small : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                } alt={''}/>
                <div>{u.name}</div>
                <div>{
                    u.follow ?
                        <button className="btn" onClick={() => {
                            props.unfollow(u.id)
                        }}>unfollow  </button>
                        : <button className="btn" onClick={() => {
                            props.follow(u.id)
                        }}> follow </button>
                }
                </div>
                <div>{u.status}</div>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
            </div>)}
        </div>
    )
}

export default Users