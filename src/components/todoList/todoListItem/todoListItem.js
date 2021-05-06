import React from "react";

const TodoListItem = (props) => {
    return (
        <div>
            {props.id}: {props.message}
        </div>
    )
}

export default TodoListItem;