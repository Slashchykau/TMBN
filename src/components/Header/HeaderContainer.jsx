
import Header from "./Header";
import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import  {getLoginData} from "../../redux/auth.reducer";


class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getLoginData()
            }
    render() {

  return (
      <Header {...this.props}/>
  )
}}
const mapStateToProps =(state) =>  ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps,{getLoginData})(HeaderContainer) ;
