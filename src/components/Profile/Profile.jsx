import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (p) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts  postsData ={p.profilePage.postsData} currentArea={p.profilePage.currentArea} dispatch={p.dispatch} />
        </div>
    )
}
export default Profile;