import React from 'react';
import s from './Profile.module.css'
const Profile = () => {
    return (


        <div className={s.card}>
            <figure>
                <img src="../rowan-heuvel-nY4rJlJoMsY-unsplash.jpg" alt="#"/>

            </figure>
            <div className={s.titles}>
                <div >FirstName</div>
                <div>LastName</div>
            </div>
            <ul>
                <li>Some info</li>
                <li>Some info</li>
                <li>Some info</li>
            </ul>


        </div>

    );
}
export default Profile