import React from "react";

import "./dialogItems.css";

const DialogItems = (props) => {
    return (
        <div className="dialog-items">
            {props.text}
        </div>
    )
}

export default DialogItems;