import React, { useState } from "react";
import Preloader from "../../preloader/preloader";
import ProfileStatus from "../profileStatus/profileStatus";
import ProfileAvatar from "../profileAvatar/profileAvatar";
import ProfileDataForm from "../profileDataForm/profileDataForm";


import styles from "./descriptionUser.module.css";

const DescriptionUser = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    
    if (!profile) {
        return <Preloader />
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false)
            });
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <div className={styles.avatarBlock}>
                    <ProfileAvatar profile={profile} isOwner={isOwner} savePhoto={savePhoto}/>
                </div>
                <div className={styles.statusAndDataBlock}>
                    <div className={styles.statusBlock}>
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
                    </div>
                    <div>
                        { editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }
                    </div>
               </div>
            </div>
            
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div><button class="btn btn-outline-dark" onClick={goToEditMode}>Edit</button></div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default DescriptionUser;