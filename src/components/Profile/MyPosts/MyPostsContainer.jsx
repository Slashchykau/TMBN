import React from "react";
import MyPosts from "./MyPosts";
import {createChangeArea, createPostAction} from "../../../redux/profile.reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {profilePage : state.profilePage}
}
const mapDispatchToProps = (dispatch) => {
    return{
    addPost: () => {
        dispatch(createPostAction());

    },
        change: (text) => {
        dispatch(createChangeArea(text));
    }}
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;