import React from "react";
import { Link } from "react-router-dom";

import "./messageItems.css";

const MessageItems = (props) => {
    return (
        <div className="item">
            <Link to={"/messages/" + props.id}>{props.name}</Link>
        </div>
    )
}

export default MessageItems;