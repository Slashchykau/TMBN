import s from './Post.module.css';
const Post = () => {
  return (
    <div className={s.post}>
      <img src='https://previews.123rf.com/images/jemastock/jemastock1612/jemastock161200588/66481494-.jpg'  alt= 'avatar'/>
        <div className={s.item}>post1</div>
    <span>LIKE</span>
    </div>

  )
}
export default Post;