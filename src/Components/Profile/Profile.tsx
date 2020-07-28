import React, {FC} from 'react';
import s from './Profile.module.css'
import Preloader from "../Preloader/Preloader";
import {profileType} from "../../redux/Redusers/profile-reducers";


type propsType ={
    handleFile: (handleFile: File) => void
    profile: profileType
    userId: number

}

const Profile:FC<propsType> = (props) => {


    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const handleClick = () => {
        if (hiddenFileInput && hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        const target= event.target;
        const fileUploaded: File = (target.files as FileList)[0];
        props.handleFile(fileUploaded);
    };
    if (!props.profile) {

        return <Preloader/>
    }
    return (
        <div className={s.card}>
            {

                props.profile && props.profile.userId  === props.userId ?
                    <figure><img onClick={handleClick} style={{maxWidth: 100 + 'px'}}
                                 src={props.profile.photos.small ? props.profile.photos.small : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                                 alt="#"/>
                        <input type="file"
                               style={{display: 'none'}}
                               ref={hiddenFileInput}
                               onChange={handleChange}
                        /></figure> : <figure>
                        <img style={{maxWidth: 100 + 'px'}}
                             src={props.profile.photos.small ? props.profile.photos.small
                                 : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                             alt="#"/>
                    </figure>
            }


            <div className={s.titles}>
                <div>{props.profile.fullName}</div>
                <div>LastName</div>
            </div>
            <ul style={{maxWidth: 200 + 'px' }}>
                <li>{props.profile.aboutMe}</li>
                <li>{props.profile.lookingForAJob ? 'Looking for job' : 'already heave'}</li>
                <li>Job description: {props.profile.lookingForAJobDescription}</li>
            </ul>


        </div>

    );


}
export default Profile