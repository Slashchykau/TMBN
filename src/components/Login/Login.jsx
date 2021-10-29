import React from "react";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";

export default function Login(props) {
    const onSubmit = (dataFrom) => {
        console.log(dataFrom)
    }
    return (
        <div>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )

}

let LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <div><Field component="input" name={'login'} type="text" placeholder='login'/></div>
                <div><Field component="input" name={'password'} type="text" placeholder='password'/></div>
                <div><Field component="input" name={'rememberMe'} type="checkbox"/></div>
                <button>login</button>
            </div>
        </form>
    )

}
LoginForm = reduxForm({form: 'Login'})(LoginForm)