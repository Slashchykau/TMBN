import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (p) => {

    return (
        <div className={s.profile}>

            <ProfileInfo />
            <MyPosts  postsData ={p.state.postsData} newPost={p.newPost}/>
        </div>
    )
}
export default Profile;