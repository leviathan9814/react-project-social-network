import React from "react";
import { connect } from "react-redux";
import {addTodo} from "../../redux/todoReducer";
import TodoList from "./todoList";
import {getTodoData, getNewNote} from "../../redux/selectors/todoSelectors";

const mapStateToProps = (state) => {
    return {
        todoData: getTodoData(state),
        newNote: getNewNote(state)
    }
}

const TodoListContainer = connect(mapStateToProps, {addTodo})(TodoList);

export default TodoListContainer;