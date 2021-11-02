import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    getUsersData,
    setCurrent,
    setToggleFetching, setToggleFollowingProgress,
    setTotalCount,
    setUsers,
     followUnfollowFlow
} from "../../redux/users.reducer";

import Preloader from "../Common/Preloader/Preloader";
import WithAuthRedirect from "../Hoc/WithAithRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users.selectors";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersData(this.props.pageSize, this.props.currentPage);
    }

    onPageCanged = (pageNumber) => {
        this.props.getUsersData(this.props.pageSize, pageNumber);
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
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}


export default compose (connect(mapStateToProps, {followUnfollowFlow, setUsers, setCurrent, setTotalCount,
    setToggleFetching, setToggleFollowingProgress, getUsersData}),
        WithAuthRedirect
)(UsersContainer)

