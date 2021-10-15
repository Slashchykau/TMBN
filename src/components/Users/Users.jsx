import s from './Users.module.css';
// import User from "./User/User";


const Users = (p) => {



  return (
      <div className={s.friends}>
        {p.users.map(u => <div key={u.id}>
          <span>
            <div><img src="###" alt="###"/></div>
            <button>follow</button>
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
