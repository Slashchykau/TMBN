import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsRedirect = state => ({isAuth: state.auth.isAuth})
  const WithAuthRedirect =(Component) =>{


    class RedirectComponent extends React.Component {

    render() {
        if(!this.props.isAuth) {
            return <Redirect to={'/login'}></Redirect>
        }
        return <Component {...this.props}></Component>
    }
    }
   let ConnectAuthRedirectComponent =  connect(mapStateToPropsRedirect)(RedirectComponent);
    return ConnectAuthRedirectComponent;
}
export default WithAuthRedirect;