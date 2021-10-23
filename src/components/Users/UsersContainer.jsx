import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    getUsers,
    setCurrent,
    setToggleFetching, setToggleFollowingProgress,
    setTotalCount,
    setUsers,
    follow
} from "../../redux/users.reducer";

import Preloader from "../Common/Preloader/Preloader";
import WithAuthRedirect from "../Hoc/WithAithRedirect";
import {compose} from "redux";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageCanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber);
    }

    render() {
        return (
            <> {this.props.isFetching ? <Preloader/>: null}
            <Users {...this.props } onPageCanged =  {this.onPageCanged}
            />
                </>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}


export default compose (connect(mapStateToProps, {follow, setUsers, setCurrent, setTotalCount,
    setToggleFetching, setToggleFollowingProgress, getUsers}),
        WithAuthRedirect
)(UsersContainer)

