import React from "react";

import "./preloader.css";

const Preloader = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-spin"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
        </div>
    )
}

export default Preloader;