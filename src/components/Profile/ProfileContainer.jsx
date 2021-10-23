
import Profile from "./Profile";
import React from "react";
import * as axios from "axios";

import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile.reducer";
import {Redirect, withRouter} from "react-router-dom";
import {UsersApi} from "../Api/Api";
import WithAuthRedirect from "../Hoc/WithAithRedirect";
import {compose} from "redux";


class ProfileContainer extends  React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId =2;
        }
        this.props.getUserProfile(userId)
    }

    render () {
        return (
            <Profile {...this.props} />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,


})

export default compose(connect(mapStateToProps, {getUserProfile}),
    withRouter,WithAuthRedirect )(ProfileContainer);