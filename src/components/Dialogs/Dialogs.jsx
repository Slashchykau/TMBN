import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' +s.active}>
                    <NavLink to ="/dialogs/1">Vasa</NavLink> </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Sveta</NavLink> </div>
                <div className={s.dialog}>
                    <NavLink to ="/dialogs/3">Galya</NavLink> </div>
                <div className={s.dialog}>
                    <NavLink to ="/dialogs/4">Arnest</NavLink> </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>hello!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I am fine thanks!</div>
            </div>
        </div>
    )
}
export default  Dialogs;