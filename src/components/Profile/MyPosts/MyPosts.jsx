import s from './MyPosts.module.css';
import Post from './Post/Post'
const MyPosts = () => {
  return (
<div>
  <h2>My posts</h2>
    <div className={s.postsWrapper}><textarea name="post" id="post" cols="30" rows="10">How are you?</textarea>
      <button className={s.btn}>add</button>
    </div>
      <div className={s.posts}>
        <Post message="I'm think that, react it nice framework!" likeCount='100500' />
        <Post message="I'm great. What you think about react?" likeCount='11' />
        <Post message="I'm fine thanks. And you?" likeCount='13' />
        <Post message="How, are you?" likeCount='10' />


    </div>
</div>
  )
}
export default MyPosts;