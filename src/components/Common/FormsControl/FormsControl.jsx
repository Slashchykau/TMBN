import React from "react";
import s from './FormsControl.module.css'

export const Template = Template => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ s.formsControl + " " + (hasError ? s.error : "") }>
            <Template {...input} {...props} />
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};