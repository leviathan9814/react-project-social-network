import React from "react";
import {createNewField, Input, Textarea} from "../../formsControls/formsControls";
import {reduxForm} from "redux-form";

import style from "../../formsControls/formsControls.module.css";
import styles from "../descriptionUser/descriptionUser.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <b>Full name</b>: {createNewField(Input, "fullName", [], "Full name")}
            </div>
            <div>
            <b>Looking for a job</b>: { createNewField(Input, "lookingForAJob", [], "", {type: "checkbox"} )}
            </div>

            <div>
                <b>My professional skills</b>:
                { createNewField(Textarea, "lookingForAJobDescription", [], "My professional skills"  )}
            </div>


            <div>
                <b>About me</b>:
                { createNewField(Textarea, "aboutMe", [], "About me")}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={styles.contact}>
                <b>{key}: {createNewField(Input, "contacts." + key, [], key )}</b>
                </div>
            })}
            </div>
        </form>
    )
} 

const ProfileDataReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);

export default ProfileDataReduxForm;