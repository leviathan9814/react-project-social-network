import React from "react";
import { Link } from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";

import "./messageItems.css";

const MessageItems = (props) => {
    return (
        <div className="item">
            <div className="user-message-block">
                <img src={userPhoto} className="user-photo"/>
                <Link to={"/messages/" + props.id}>{props.name}</Link>
                <div className="line-message"></div>
            </div>
        </div>
    )
}

export default MessageItems;