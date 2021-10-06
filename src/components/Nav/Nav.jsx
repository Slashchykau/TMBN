import s from './Nav.module.css';
const Nav = () => {
  return (
    <nav className={s.navbar}>
      <a className={`${s.item} ${s.active}`} href="###" alt="abrak">Profile</a>
      <a className={s.item} href="###" alt="abrak">Messages</a>
      <a className={s.item} href="###" alt="abrak">News</a>
      <a className={s.item} href="###" alt="abrak">Music</a>
      <a className={s.item} href="###" alt="abrak">Settings</a>
    </nav>
  )
}
export default Nav; 