import React from "react";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";
import {Template} from "../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth.reducer";
import {Redirect} from "react-router-dom";


const Input = Template('input')

let maxLength20 = maxLengthCreator(20);
let maxLength10 = maxLengthCreator(10);


let LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <div><Field component={Input} name={'email'} type="text" placeholder='login'
                            validate={[required, maxLength20]}/></div>
                <div><Field component={Input} name={'password'} type="password" placeholder='password'
                            validate={[required, maxLength10]}/></div>
                <div><Field component={Input} name={'rememberMe'} type="checkbox"
                            validate={[]}/></div>
                <button>login</button>
            </div>
        </form>
    )

}
LoginForm = reduxForm({form: 'Login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (dataFrom) => {

        props.login(dataFrom.email, dataFrom.password, dataFrom.rememberMe)
    }
    if(props.isAuth) {

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