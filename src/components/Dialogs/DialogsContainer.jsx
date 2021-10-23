import React from "react";
import {newMessage, updateNewMessageArea} from "../../redux/dialogs.reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../Hoc/WithAithRedirect";



const mapStateToProps = (state) => {

    return  {dialogsPage : state.dialogsPage,
    } ;

};
let AuthRedirectComponent = WithAuthRedirect(Dialogs)

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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;