import s from './Nav.module.css';
const Nav = () => {
  return (
    <nav className={s.navbar}>
      <a className={`${s.item} ${s.active}`} href="/profile" alt="/profile">Profile</a>
      <a className={s.item} href="/dialogs" alt="/dialogs">Messages</a>
      <a className={s.item} href="/news" alt="/news">News</a>
      <a className={s.item} href="/music" alt="/music">Music</a>
      <a className={s.item} href="/settings" alt="/settings">Settings</a>
    </nav>
  )
}
export default Nav; 