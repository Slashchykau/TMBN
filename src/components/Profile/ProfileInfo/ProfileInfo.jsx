import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (

            <div className={s.profileInfo}>
                <div className={s.back}><img
                          src="https://bigartshop.ru/sites/default/files/styles/art_page_image/public/product_images/%D0%9F%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6--1896_2.jpg?itok=9yA6CRo5"
                          alt='asda'/></div>
                <div className={s.avatar}><img src="https://preview.redd.it/ho6bb3l1zs161.jpg?width=960&crop=smart&auto=webp&s=aebdf418ad4eff74e2735e36a0dc7db428ea4999" alt='avatar'/>
                </div>
                <div className={s.descriptionBlock}>description</div>
            </div>

    )
}
export default ProfileInfo;