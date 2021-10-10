import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <img className={s.avatar}
                src="https://images.pexels.com/photos/8078546/pexels-photo-8078546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt='avatar'/>

            <div className={s.descriptionBlock}>description</div>
        </div>

    )
}
export default ProfileInfo;