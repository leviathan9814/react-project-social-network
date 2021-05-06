import React from "react";

import "./todo-header.css";

const TodoHeader = ({liked, allPosts}) => {
    return (
        <div className="todo-header d-flex">
            <h1>My todo</h1>
            <h2>{allPosts} records, of which I liked {liked}</h2>
        </div>
    )
}

export default TodoHeader;