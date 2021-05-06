import React from "react";
import MyPostContainer from "./myPosts/MyPostContainer";
import DescriptionUser from "./descriptionUser/descriptionUser";
import ModalProfile from "../modal/modal";

import "./profile.css";

const Profile = (props) => {
    return (
        <div>
            <DescriptionUser isOwner={props.isOwner} 
                profile={props.profile} 
                status={props.status} 
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}/>
            <ModalProfile/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;