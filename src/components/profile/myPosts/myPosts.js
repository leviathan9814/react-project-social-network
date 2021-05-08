import React from "react";
import Post from "./post/post";
import { Field, reduxForm, reset } from "redux-form";
import {required } from "../../../validators/validators";
import { Textarea, createNewField } from "../../formsControls/formsControls";

import "./myPosts.css";


const MyPosts = React.memo(props => {

    let postElem = props.posts.map(item => <Post key={item.id} message={item.message} count={item.count}/>);

    const addNewPost = (values, dispatch) => {
        props.addPost(values.newPostText);
        dispatch(reset("ProfileAddPost"));
    }

    return (
       <>
        <div className="my-posts">
            <h3>My Posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
        </div>
        <div>
            {postElem}
        </div>
       </>
    )
})

const AddPostForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component="textarea"
                    name="newPostText" 
                    validate={[required]} 
                    placeholder="What's new?"
                    className="add-post-textarea"/>
            </div>
            {/* {createNewField(Textarea, "newPostText", [required], "Add post")} */}
            <div>
                <button className="btn btn-outline-dark add-post">Add Post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: "ProfileAddPost"})(AddPostForm);

export default MyPosts;