import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import s from './Users.module.css'
import {
    setCurrent,
    setToggleFetching,
     setTotalCount,
    setUsers,
    toggleFollow
} from "../../redux/users.reducer";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";
import preloader from "../../assets/preloader/Spinner-1s-200px.svg";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
                this.props.setUsers([...response.data.items])
                this.props.setTotalCount(response.data.totalCount)
                this.props.setToggleFetching(false);


            }
        )}
    onPageCanged = (pageNumber) => {
        this.props.setToggleFetching(true);
        this.props.setCurrent(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
                this.props.setUsers([...response.data.items])
                this.props.setToggleFetching(false);
            }
        )
    }

    render() {
        return (
            <> {this.props.isFetching ? <Preloader/>: null}
            <Users totalUsersCount = {this.props.totalUsersCount} pageSize ={this.props.pageSize}
                   onPageCanged={this.onPageCanged } users={this.props.users} currentPage = {this.props.currentPage}
                   toggleFollow={ this.props.toggleFollow}/>
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
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {toggleFollow, setUsers, setCurrent, setTotalCount, setToggleFetching})(UsersContainer)

