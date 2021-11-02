import React from "react";
import s from './FormsControl.module.css'
import {required} from "../../../utils/validators/validator";
import Field from "redux-form/lib/Field";

export const Template = Template => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ s.formsControl + " " + (hasError ? s.error : "") }>
            <Template {...input} {...props} />
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};

export const createField = (component,name,type, placeholder,validate, text = ' ') => {
    return <> <Field component={component} name={name} type={type} placeholder={placeholder}
                  validate={validate}/> {text}</>

}