
import {connect} from "react-redux";

import Users from "./Users";
import {setUsersAC, toggleFloow} from "../../redux/users.reducer";

const mapStateToProps = (state) => {
    return {state: state.users}
}
const mapDispatchToProps = (dispatch) => {
return {
    toggleFollow:(userId) => {
        dispatch(toggleFloow(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    }


}
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps) (Users)
export default UsersContainer;
