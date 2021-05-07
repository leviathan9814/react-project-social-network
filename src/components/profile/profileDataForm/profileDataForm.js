import React from "react";
import {createNewField, Input, Textarea} from "../../formsControls/formsControls";
import {reduxForm, Field} from "redux-form";

import style from "../../formsControls/formsControls.module.css";
import styles from "../descriptionUser/descriptionUser.module.css";
import "./profileDataForm.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div><button class="btn btn-outline-dark">Save</button></div>
                {error && <div className={style.formSummaryError}>{error}</div>}
            </div>
            <div className="full-name">
                <b>Full name</b>: 
                    <Field component="input"
                        name="fullName" 
                        validate={[]} 
                        placeholder="Full name"/>
                    
                     {/* {createNewField(Input, "fullName", [], "Full name")} */}
            </div>
            <div>
                <b>Looking for a job</b>:
                    <Field component="input"
                            name="lookingForAJob" 
                            validate={[]} 
                            type="checkbox"/>
                
                {/* { createNewField(Input, "lookingForAJob", [], "", {type: "checkbox"} )} */}
            </div>

            <div>
                <b>My professional skills</b>:
                    <Field component="textarea"
                            name="lookingForAJobDescription" 
                            validate={[]} 
                            placeholder="My professional skills"/>
                    
                {/* { createNewField(Textarea, "lookingForAJobDescription", [], "My professional skills"  )} */}
            </div>


            <div>
                <b>About me</b>:
                    <Field component="textarea"
                            name="aboutMe" 
                            validate={[]} 
                            placeholder="About me"/>
                
                {/* { createNewField(Textarea, "aboutMe", [], "About me")} */}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={styles.contact}>
                <b>{key}:
                    <Field component="input"
                            name={"contacts" + key} 
                            validate={[]} 
                            placeholder={key}/>
                    </b>
                    {/* {createNewField(Input, "contacts." + key, [], key )} */}
                </div>
            })}
            </div>
        </form>
    )
} 

const ProfileDataReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);

export default ProfileDataReduxForm;