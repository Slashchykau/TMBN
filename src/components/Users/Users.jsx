import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import userAvatar from '../../assets/img/users/png-transparent-computer-icons-anonymous-anonymity-anonymous-face-monochrome-head.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers([...response.data.items])
            }
        )
    }

    render() {
        return (

            <div>
                {this.props.users.map(u => <div key={u.id}>
          <span>
            <div><img className={s.avatar} src={u.photoURL? u.photoURL: userAvatar} alt="avatar"/></div>
              {u.followed ? <button onClick={() => this.props.toggleFollow(u.id)}>Unfollow</button> :
                  <button onClick={() => this.props.toggleFollow(u.id)}>Follow</button>
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
}
export default Users;
