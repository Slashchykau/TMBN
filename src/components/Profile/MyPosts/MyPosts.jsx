import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (p) => {

    const renderPosts = p.postsData.map((p) => <Post message={p.message} likeCount={p.likeCount}/>
    );
    return (
        <div>
            <h2>My posts</h2>
            <div className={s.postsWrapper}><textarea name="post" id="post" cols="30" rows="10">How are you?</textarea>
                <button className={s.btn}>add</button>
            </div>
            <div className={s.posts}>
                {renderPosts}
            </div>
        </div>
    )
}
export default MyPosts;