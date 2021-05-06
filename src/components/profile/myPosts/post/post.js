import React from "react";

import "./post.css";

const Post = (props) => {
    return (
        <div className="post">
            <div class="post-item">
                <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
                <>{props.message}</>
            </div>
            <div>
                <span><i class="far fa-heart"></i> {props.count}</span>
                <span><i class="far fa-comment"></i></span>
                <span><i class="fas fa-share"></i></span>
            </div>
        </div>
    )
}

export default Post;