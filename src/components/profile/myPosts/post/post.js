import React from "react";

import "./post.css";

const Post = (props) => {
    return (
        <div className="post">
            <div>
                <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
                {props.message}
                <div>
                    <span>Like {props.count}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;