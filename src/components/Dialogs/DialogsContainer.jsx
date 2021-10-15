
import React from "react";
import {newMessage, updateNewMessageArea} from "../../redux/dialogs.reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (p) => {
    const state = p.store.getState();
    const addMessage = () => {
        p.store.dispatch(newMessage());
    };

    const updateArea = (text) => {
        p.store.dispatch(updateNewMessageArea(text));
    };


    return (<Dialogs updateArea={updateArea} addMessage={addMessage} dialogsPage = {state.dialogsPage}/>);
}
export default DialogsContainer;