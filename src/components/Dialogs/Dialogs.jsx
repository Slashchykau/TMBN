import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import {Template} from "../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";

let maxLength50 = maxLengthCreator(50);

const Textarea = Template('textarea')
let DialogsForm = (props) => {
    return (

            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} name={'newMessageBody'} type="text" placeholder='message...'
                    validate={[required,maxLength50]}
                ></Field>
                <button>Submit</button>
            </form>

    )
}
DialogsForm = reduxForm({form: 'newMessageBody'})(DialogsForm)


const Dialogs = (props) => {

    const renderDialogs = props.dialogsPage.dialogsData.map((el) =>
        <DialogItem name={el.name} id={el.id} avatarLink={el.avatarLink}/>);
    const renderMessage = props.dialogsPage.messageData.map((el) =>
        <Message message={el.message}/>);


    const onSubmit = (value) => {
       return  props.addMessage(value.newMessageBody);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {renderDialogs}
            </div>
            <div className={s.messagesWrapper}>
                <div className={s.messages}>
                    {renderMessage}
                    <div className={s.addMessage}>
                        <DialogsForm onSubmit={onSubmit}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dialogs;