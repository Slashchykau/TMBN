import React from "react";
import MyPosts from "./MyPosts";
import {createChangeArea, createPostAction} from "../../../redux/profile.reducer";


const MyPostsContainer = (p) => {

    const state = p.store.getState();

    const addPost = () => {
        p.store.dispatch(createPostAction());

    };
    const change = (text) => {
        p.store.dispatch(createChangeArea(text));
    }
    return (
        <MyPosts addPost={addPost} change={change} profilePage = {state.profilePage}/>
    )
}
export default MyPostsContainer;