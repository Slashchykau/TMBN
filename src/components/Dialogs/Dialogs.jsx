import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (p) => {

    const renderDialogs = p.dialogsData.map((el) =>
        <DialogItem name={el.name} id={el.id}/>);
    const renderMessage = p.messageData.map((el) =>
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