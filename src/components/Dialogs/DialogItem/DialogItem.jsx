import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.avatarDialog} src={props.avatarLink} alt="avatar"/>
            <NavLink className={s.name} to={path}>{props.name}</NavLink></div>
    )
}
export default DialogItem;