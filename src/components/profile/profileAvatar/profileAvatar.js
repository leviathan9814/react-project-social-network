import React from "react";
import userPhoto from "../../../assets/images/user.png";

import styles from "./profileAvatar.module.css";

const ProfileAvatar = ({profile, isOwner, savePhoto}) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }


    return (
        <>
            <img className={styles.mainPhoto} src={profile.photos.large || userPhoto} />
            { isOwner && <div className={styles.inputWrapper}>
                            <label className={styles.customFileUpload}>
                            <input type="file" multiple onChange={onMainPhotoSelected} />
                            <i className="fa fa-cloud-upload" /> Сменить фото
                            </label>
                        </div>}
        </>
    )
}

export default ProfileAvatar;