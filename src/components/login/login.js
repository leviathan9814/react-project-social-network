import React from "react";
import {login} from "../../redux/authReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import {reduxForm } from "redux-form";
import {required} from "../../validators/validators";
import { createNewField, Input } from "../formsControls/formsControls";

import style from "../formsControls/formsControls.module.css";
import styles from "./login.module.css";

const Login = ({login, isAuth, captchaUrl}) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createNewField(Input, "email", [required], "email")}
            {createNewField(Input, "password", [required], "password", {type: "password"})}
            {createNewField(Input, "rememberMe", null, null, {type: "checkbox"}, "remember Me")}
            
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createNewField(Input, "captcha", [required], "Symbols from image")}
            
            {
                error && <div className={style.formSummaryError}>
                    {error}
                </div> 
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default connect(mapStateToProps, {login})(Login);