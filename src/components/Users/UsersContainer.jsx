import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {setCurrentAC, setTotalAC, setUsersAC, toggleFollowAC} from "../../redux/users.reducer";

import * as axios from "axios";


class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
                this.props.setUsers([...response.data.items])
                this.props.setTotalCount(response.data.totalCount)

            }
        )}
    onPageCanged = (pageNumber) => {
        this.props.setCurrent(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
                this.props.setUsers([...response.data.items])
            }
        )
    }

    render() {
        return (
            <Users totalUsersCount = {this.props.totalUsersCount} pageSize ={this.props.pageSize}
                   onPageCanged={this.onPageCanged } users={this.props.users} currentPage = {this.props.currentPage}
                   toggleFollow={ this.props.toggleFollow}/>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

