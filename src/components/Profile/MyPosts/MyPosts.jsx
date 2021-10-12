import s from './MyPosts.module.css';
import Post from './Post/Post'
import React from "react";
import {createChangeArea, createPostAction} from "../../../redux/State";

const MyPosts = (p) => {

    const renderPosts = p.postsData.map((p) => <Post message={p.message} likeCount={p.likeCount}/>
    );

    const addPost = () => {
        let action = createPostAction();
        p.dispatch(action);

    };
    const change = () => {
        const text = textArea.current.value;
        p.dispatch(createChangeArea(text));
    }
    const textArea = React.createRef();

    return (
        <div>
            <h2>My posts</h2>
            <div className={s.postsWrapper}>
                <textarea onChange={change} ref={textArea} value={p.currentArea}/>
                <button className={s.btn} onClick={addPost}>add
                </button>
            </div>
            <div className={s.posts}>
                {renderPosts}
            </div>
        </div>
    );
};
export default MyPosts;