import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (p) => {
    const renderFrends = p.state.map((f) =>  <Friend avatarLink = {f.avatarLink} name = {f.name}/>

        )

  return (
      <div className={s.friends}>
          {renderFrends}
      </div>
  )
}
export default Friends;
