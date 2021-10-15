import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (p) => {

    const renderDialogs = p.dialogsPage.dialogsData.map((el) =>
        <DialogItem name={el.name} id={el.id} avatarLink={el.avatarLink}/>);
    const renderMessage = p.dialogsPage.messageData.map((el) =>
        <Message message={el.message}/>);

    const onAddMessage = () => {
        p.addMessage();

    };
    const onUpdateArea = () => {
        const text = messageArea.current.value;
        p.updateArea(text);
    };
    const messageArea = React.createRef();
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {renderDialogs}
            </div>
            <div className={s.messagesWrapper}>
                <div className={s.messages}>
                    {renderMessage}
                    <div className={s.addMessage}>
                        <textarea ref={messageArea} onChange={onUpdateArea} value={p.dialogsPage.changeMessageArea}/>
                        <button className={s.btn} onClick={onAddMessage}>Send
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dialogs;