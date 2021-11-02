import React from "react";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";
import {createField, Template} from "../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth.reducer";
import {Redirect} from "react-router-dom";
import s from '../Common/FormsControl/FormsControl.module.css'

const Input = Template('input')

let maxLength20 = maxLengthCreator(20);
let maxLength10 = maxLengthCreator(10);


let LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>

            <div className={error ? s.formsControl + ' ' + s.error : ''}>

                <div>{createField(Input, 'email', "text", 'login', [required, maxLength20])}</div>

                <div>  {createField(Input, 'password', "password", 'password', [required, maxLength10])} </div>

                <div>{createField(Input, 'rememberMe', "checkbox", 'checkbox', [],'remember me')}</div>
                {error && <div>{error}</div>}
                <button>login</button>
            </div>
        </form>
    )

}
LoginForm = reduxForm({form: 'Login'})(LoginForm)


const Login = ({login, isAuth}) => {
    const onSubmit = (dataFrom) => {

        login(dataFrom.email, dataFrom.password, dataFrom.rememberMe)
    }
    if (isAuth) {

        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)