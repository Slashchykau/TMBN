import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
const Profile = () => {
  return (
    <div>
      <div><img src="https://bigartshop.ru/sites/default/files/styles/art_page_image/public/product_images/%D0%9F%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6--1896_2.jpg?itok=9yA6CRo5" alt='asda' /></div>
      <div><img src="https://pickimage.ru/wp-content/uploads/2021/04/peizazh1.jpg" alt='asda' />
      </div>
      <div>description</div>
      <MyPosts />
    </div>
  )
}
export default Profile;