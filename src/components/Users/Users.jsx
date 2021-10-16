import React from "react";
import s from './Users.module.css'



const Users = (p) => {
debugger;


  return (
      <div >
        {p.users.map(u => <div key={u.id}>
          <span>
            <div><img className={s.avatar} src={u.photoURL} alt="avatar"/></div>
              { u.followed ? <button onClick={()=> p.toggleFollow(u.id)}>Unfollow</button> : <button onClick={()=> p.toggleFollow(u.id)} >Follow</button>
              }
          </span>
          <span>
            <span><div>{u.fullName}</div><div>{u.status}</div></span>
            <span><div>{u.location.city}</div><div>{u.location.country}</div></span>
          </span>
            </div>
        )}
      </div>

  )
}
export default Users;
