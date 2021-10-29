import React from "react";
import MyPosts from "./MyPosts";
import {createChangeArea, createPostAction} from "../../../redux/profile.reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {profilePage : state.profilePage}
}
const mapDispatchToProps = (dispatch) => {
    return{
    addPost: (newPost) => {
        dispatch(createPostAction(newPost));

    }}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);