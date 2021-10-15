import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Users from "../Users/Users";

const Nav = (p) => {
    return (
        <nav className={s.navbar}>
            <NavLink className={`${s.item}`} to="/profile" alt="/profile" activeClassName={s.active}>Profile</NavLink>
            <NavLink className={s.item} to="/dialogs" alt="/dialogs" activeClassName={s.active}>Messages</NavLink>
            <NavLink className={s.item} to="/news" alt="/news" activeClassName={s.active}>News</NavLink>
            <NavLink className={s.item} to="/music" alt="/music" activeClassName={s.active}>Music</NavLink>
            <NavLink className={s.item} to="/settings" alt="/settings" activeClassName={s.active}>Settings</NavLink>
            <NavLink className={s.item + ' ' + s.friends} to="/users" alt="/users"
                     activeClassName={s.active}>Users</NavLink>
            <div>
                <Users state={p.state}/>
            </div>


        </nav>
    )
}
export default Nav; 