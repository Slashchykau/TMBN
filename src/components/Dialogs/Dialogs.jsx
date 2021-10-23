import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    const renderDialogs = props.dialogsPage.dialogsData.map((el) =>
        <DialogItem name={el.name} id={el.id} avatarLink={el.avatarLink}/>);
    const renderMessage = props.dialogsPage.messageData.map((el) =>
        <Message message={el.message}/>);

    const onAddMessage = () => {
        props.addMessage();

    };
    const onUpdateArea = () => {
        const text = messageArea.current.value;
        props.updateArea(text);
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
                        <textarea ref={messageArea} onChange={onUpdateArea} value={props.dialogsPage.changeMessageArea}/>
                        <button className={s.btn} onClick={onAddMessage}>Send
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dialogs;