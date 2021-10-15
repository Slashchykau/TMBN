import s from './User.module.css';
const User = (p) => {

  return (
      <div className={s.user}>
          <img className={s.sideAvatar} src={p.avatarLink} alt="avatar"/>
          <div className={s.name}>{p.name} </div></div>
  )
}
export default User;
