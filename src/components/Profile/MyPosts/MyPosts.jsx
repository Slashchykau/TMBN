import s from './MyPosts.module.css';
import Post from './Post/Post'
import React from "react";


const MyPosts = (p) => {

    const renderPosts = p.profilePage.postsData.map((p) => <Post message={p.message} likeCount={p.likeCount}/>
    );

    const onAddPost = () => {
        p.addPost();

    };
    const onChange = () => {
        const text = textArea.current.value;
        p.change(text);
    }
    const textArea = React.createRef();

    return (
        <div>
            <h2>My posts</h2>
            <div className={s.postsWrapper}>
                <textarea onChange={onChange} ref={textArea} value={p.profilePage.currentArea}/>
                <button className={s.btn} onClick={onAddPost}>add
                </button>
            </div>
            <div className={s.posts}>
                {renderPosts}
            </div>
        </div>
    );
};
export default MyPosts;