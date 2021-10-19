import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import React from "react";
const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <span> {props.profile.fullName}</span>
                <img  className={s.avatar}  src={props.profile.photos.large} alt='avatar' />
            <div>Work status: {props.profile.lookingForAJobDescription} </div>
            <div className={s.descriptionBlock}>{props.profile.aboutMe}</div>
            <div className={s.social}> <div> My social:
                <div><a src={props.profile.contacts.facebook}>facebook</a></div>
                <div><a src={props.profile.contacts.website}>website</a></div>
                <div><a src={props.profile.contacts.vk}>vk</a></div>
                <div><a src={props.profile.contacts.twitter}>twitter</a></div>
                <div><a src={props.profile.contacts.instagram}>instagram</a></div>
                <div><a src={props.profile.contacts.youtube}>youtube</a></div>
                <div><a src={props.profile.contacts.github}>github</a></div>
                <div><a src={props.profile.contacts.mainLink}>mainLink</a></div></div></div>
        </div>

    )
}
export default ProfileInfo;