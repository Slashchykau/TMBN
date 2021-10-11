import s from './MyPosts.module.css';
import Post from './Post/Post'
import React from "react";

const MyPosts = (p) => {

    const renderPosts = p.postsData.map((p) => <Post message={p.message} likeCount={p.likeCount}/>
    );
    const addPost = () => {
        console.log(p.newPost)
        const text = textArea.current.value;
        p.newPost(text)
        console.log(text)

    };
    const textArea = React.createRef();

    return (
        <div>
            <h2>My posts</h2>
            <div className={s.postsWrapper}>
                <textarea ref={textArea}>How are you?</textarea>
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