import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink></div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    const dialogsData = [{id: 1, name: 'Vasa'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Galya'},
        {id: 4, name: 'Arnest'}];

    const messageData = [{id: 1, message: 'Hi'},
        {id: 2, message: 'hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'I am fine thanks!'}];
    const renderDialogs = dialogsData.map((el) =>
        <DialogItem name={el.name} id={el.id}/>);
    const renderMessage = messageData.map((el) =>
        <Message message={el.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {renderDialogs}
            </div>
            <div className={s.messages}>
                {renderMessage}
            </div>
        </div>
    )
}
export default Dialogs;