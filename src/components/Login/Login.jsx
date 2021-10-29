import React from "react";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";
import {Template} from "../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";







const Input = Template('input')

let maxLength10 = maxLengthCreator(10);

let LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <div><Field component={Input} name={'login'} type="text" placeholder='login'
                            validate={[required,maxLength10]}/></div>
                <div><Field component={Input} name={'password'} type="text" placeholder='password'
                            validate={[required,maxLength10]}/></div>
                <div><Field component={Input} name={'rememberMe'} type="checkbox"
                            validate={[]}/></div>
                <button>login</button>
            </div>
        </form>
    )

}
LoginForm = reduxForm({form: 'Login'})(LoginForm)


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
