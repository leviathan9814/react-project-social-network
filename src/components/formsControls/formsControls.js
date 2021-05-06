import React from "react";
import {Field} from "redux-form";

import styles from "./formsControls.module.css";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
           <div>
                {props.children}
           </div>
           {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createNewField = (component, name, validators, placeholder, props = {}, text = "") => {
    return (
        <div>
            <Field component={component} 
                name={name}
                validate={validators}
                placeholder={placeholder}
                {...props}/>
            {text}
        </div>
    )
}