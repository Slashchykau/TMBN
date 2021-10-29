import s from './MyPosts.module.css';
import Post from './Post/Post'
import React from "react";
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/immutable/reduxForm";


let PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name={'newPost'} type="text" placeholder='New post...'></Field>
            <button>add</button>
        </form>
    )
}
PostForm = reduxForm({form: 'newPost'})(PostForm);

const MyPosts = (props) => {

    const renderPosts = props.profilePage.postsData.map((props) => <Post message={props.message} likeCount={props.likeCount}/>
    );


    const onSubmit = (value) => {
        props.addPost(value.newPost);
    }
    return (
        <div>
            <h2>My posts</h2>
            <div className={s.postsWrapper}>
                <PostForm onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {renderPosts}
            </div>
        </div>
    );
};
export default MyPosts;