import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

import "./header.css";

const Header = (props) => {
    return (
        <header className="header">
            <div className="header-title">
                <h3>My network</h3>
                <HeaderSearchReduxForm/>
                {
                    props.isAuth 
                    ? <div>{props.login} - <button className="btn-logout" onClick={props.logout}>Log out</button> </div>  
                    : <Link className="btn btn-outline-dark" to="/login">Sign in</Link>
                }
            </div>
        </header>
    )
}

const HeaderSearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="input" name="headerSearch" placeholder="search..." className="header-search"/>
        </form>
    )
}

const HeaderSearchReduxForm = reduxForm({form: "headerSearchForm"})(HeaderSearchForm);

export default Header;