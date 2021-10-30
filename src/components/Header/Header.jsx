import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/750px-LEGO_logo.svg.png" alt="abrakadabra" />
        {props.isAuth ? <>props.login <button onClick={props.logout}>logout</button> </> :  <div className={s.loginForm}><NavLink  to='/login' className={s.link}>Login</NavLink></div>
        }
    </header>
  )
}
export default Header;
