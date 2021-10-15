import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (p) => {

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;