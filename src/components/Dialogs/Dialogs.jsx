import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const DialogItem =(props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' +s.active}>
            <NavLink to ={path} >{props.name}</NavLink> </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={'Vasa'} id={'1'}/>
                <DialogItem name={'Sveta'} id={'2'}/>
                <DialogItem name={'Galya'} id={'3'}/>
                <DialogItem name={'Arnest'} id={'4'}/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='hello'/>
                <Message message='How are you?'/>
                <Message message='I am fine thanks!'/>
            </div>
        </div>
    )
}
export default  Dialogs;