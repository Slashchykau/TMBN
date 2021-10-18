import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {setCurrentAC, setTotalAC, setUsersAC, toggleFollowAC} from "../../redux/users.reducer";

const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrent: (currentPage) => {
            dispatch(setCurrentAC(currentPage))
        },
        setTotalCount: (totalUsersCount) => {
            dispatch(setTotalAC(totalUsersCount))
        }


    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;
