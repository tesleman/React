import React from 'react';
import s from './Profile.module.css'
import Preloader from "../Preloader/Preloader";


const Profile = (props) => {


    const hiddenFileInput = React.useRef(null);
    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };
    if (!props.profile) {

        return <Preloader/>
    }
    return (
        <div className={s.card}>
            {

                +props.match.params.userId === +props.userId ?
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
            <ul>
                <li>{props.profile.aboutMe}</li>
                <li>{props.profile.lookingForAJob ? 'Looking for job' : 'alreader geave'}</li>
                <li>Job descr:{props.profile.lookingForAJobDescription}</li>
            </ul>


        </div>

    );


}
export default Profile