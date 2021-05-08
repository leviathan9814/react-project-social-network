import React from "react";

import "./dialogItems.css";
import userPhoto from "../../../assets/images/user.png";

const DialogItems = (props) => {
    return (
        <div className="dialog-items">
            <div>
                <img src={userPhoto} className="user-photo-dialogs"/>
                <b>User Name</b>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default DialogItems;