import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";


const Users = (props) => {
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
        return (
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p && s.current}
                        onClick={()=> props.onPageCanged(p) }>{p}</span>
                    })
                }
                {props.users.map(u => <div key={u.id}>
          <span>
            <div>

                <NavLink to={'/profile/' + u.id} ><img className={s.avatar} src={u.photos.small} alt="avatar"/></NavLink>
            </div>
              {u.followed ? <button onClick={() => props.toggleFollow(u.id)}>Unfollow</button> :
                  <button onClick={() => props.toggleFollow(u.id)}>Follow</button>
              }
          </span>
                        <span>
            <span><div>{u.name}</div><div>{u.status}</div></span>
                            {/*<span><div>{u.location.city}</div><div>{u.location.country}</div></span>*/}
          </span>
                    </div>
                )}
            </div>

        )

}

export default Users;
