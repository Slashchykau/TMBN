import React from "react";
import MyPosts from "./MyPosts";
import {createChangeArea, createPostAction} from "../../../redux/profile.reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {postsData : state.profilePage.postsData,

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
    addPost: (newPost) => {
        dispatch(createPostAction(newPost));

    }}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);