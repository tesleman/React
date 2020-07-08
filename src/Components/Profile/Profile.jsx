import React from 'react';
import s from './Profile.module.css'
import Preloader from "../Preloader/Preloader";
const Profile = (props) =>{

  if (!props.profile){
 
    return  <Preloader/>
  }

        return (


            <div className={s.card}>
                <figure>

                    <img src={props.profile.photos.small} alt="#"/>


                </figure>
                <div className={s.titles}>
                    <div >{props.profile.fullName}</div>
                    <div>LastName</div>
                </div>
                <ul>
                    <li>{props.profile.aboutMe}</li>
                    <li>{props.profile.lookingForAJob ? 'Looking for job': 'alreader geave'}</li>
                    <li>Job descr:{props.profile.lookingForAJobDescription}</li>
                </ul>


            </div>

        );



}
export default Profile