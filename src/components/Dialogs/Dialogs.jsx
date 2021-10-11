import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (p) => {

    const renderDialogs = p.state.dialogsData.map((el) =>
        <DialogItem name={el.name} id={el.id} avatarLink={el.avatarLink}/>);
    const renderMessage = p.state.messageData.map((el) =>
        <Message message={el.message}/>);
    const addPost = () => {
        const text = messageArea.current.value;
        alert(text)
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

            </div>
            <div className={s.addMassage}>
                <textarea ref={messageArea}></textarea>
                <button className={s.btn} onClick={addPost}>Send
                </button>
            </div>
            </div>
        </div>
    )
}
export default Dialogs;