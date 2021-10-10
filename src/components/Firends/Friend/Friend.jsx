import s from './Friend.module.css';
const Friend = (p) => {

  return (
      <div className={s.user}>
          <img className={s.sideAvatar} src={p.avatarLink} alt="avatar"/>
          <div className={s.name}>{p.name} </div></div>
  )
}
export default Friend;
