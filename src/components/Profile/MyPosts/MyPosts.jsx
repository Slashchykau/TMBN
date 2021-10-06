// import s from './MyPosts.module.css';
import Post from './Post/Post'
const MyPosts = () => {
  return (

    <div>my posts
      <div>new posts</div>
      <div className='posts'>posts
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      </div>
    </div>
  )
}
export default MyPosts;