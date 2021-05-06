import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import TodoListItem from "./todoListItem/todoListItem";
import {createNewField, Input} from "../formsControls/formsControls";

const TodoList = ({todoData, addTodo}) => {

    let todoElem = todoData.map(item => {
        return <TodoListItem id={item.id} message={item.message} key={item.id}/>
    });

    let addNewNote = (values, dispatch) => {
        addTodo(values.newNote);
        dispatch(reset("addPost"));
    }

    return (
        <div className="todo">
            <h3>Todo List</h3>
            <AddTodoReduxForm onSubmit={addNewNote}/>
            {todoElem}
        </div>
    )
}

const AddTodoForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createNewField(Input, "newNote", null, "share your thoughts")}
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddTodoReduxForm = reduxForm({form: "addPost"})(AddTodoForm);

export default TodoList;