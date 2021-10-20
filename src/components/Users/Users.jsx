import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
              {u.followed ? <button onClick={() => {
                      axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,{
                          withCredentials: true,
                          headers: {
                              'API-KEY':  '97b7a772-1328-454b-bbe0-9a0b8deec16c'
                          }
                      }).then(response => {
                          console.log(response)
                          if(response.data.resultCode === 0) {
                              props.toggleFollow(u.id);
                          }
                      })
                  }
              }>Unfollow</button> :
                  <button onClick={() => {
                      axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,{},{
                          withCredentials: true,
                          headers: {
                            'API-KEY':  '97b7a772-1328-454b-bbe0-9a0b8deec16c'
                          }
                      }).then(response => {
                          if(response.data.resultCode === 0) {
                              props.toggleFollow(u.id);
                          }
                      })
                  }

                  }>Follow</button>
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
