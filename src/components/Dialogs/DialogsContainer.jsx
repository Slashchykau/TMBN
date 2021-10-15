import React from "react";
import {newMessage, updateNewMessageArea} from "../../redux/dialogs.reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



const mapStateToProps = (state) => {

    return  {dialogsPage : state.dialogsPage} ;

};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage : () => {
            dispatch(newMessage());
        },
        updateArea : (text) => {

            dispatch(updateNewMessageArea(text));
        }
    }

}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;