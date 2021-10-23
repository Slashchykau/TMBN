import React from "react";
import {newMessage, updateNewMessageArea} from "../../redux/dialogs.reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../Hoc/WithAithRedirect";
import {compose} from "redux";



const mapStateToProps = (state) => {

    return  {dialogsPage : state.dialogsPage,
    } ;

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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)