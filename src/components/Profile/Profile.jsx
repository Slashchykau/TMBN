import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import React from "react";


const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile ={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;