
import Profile from "./Profile";
import React from "react";
import * as axios from "axios";

import {connect} from "react-redux";
import {getUserProfile, getUserStatus, upUserStatus} from "../../redux/profile.reducer";
import { withRouter} from "react-router-dom";

import WithAuthRedirect from "../Hoc/WithAithRedirect";
import {compose} from "redux";


class ProfileContainer extends  React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId =20281;
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} upUserStatus={this.props.upUserStatus}/>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

})

export default compose(connect(mapStateToProps, {getUserProfile,getUserStatus,upUserStatus}),
    withRouter,WithAuthRedirect )(ProfileContainer);