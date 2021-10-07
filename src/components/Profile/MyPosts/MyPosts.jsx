// import s from './MyPosts.module.css';
import Post from './Post/Post'
const MyPosts = () => {
  return (

    <div>my posts
      <div>new posts</div>
      <div className='posts'>posts
        <Post message="I'm think that, react it nice framework!" likeCount='100500' />
        <Post message="I'm great. What you think about react?" likeCount='11' />
        <Post message="I'm fine thanks. And you?" likeCount='13' />
        <Post message="How, are you?" likeCount='10' />

      </div>
    </div>
  )
}
export default MyPosts;