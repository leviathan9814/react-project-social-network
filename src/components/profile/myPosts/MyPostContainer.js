import React from "react";
import MyPosts from "./myPosts";
import {addPost} from "../../../redux/profileReducer";
import { connect } from "react-redux";
import {getPosts, getNewPostText} from "../../../redux/selectors/profileSelectors";


const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        newPostText: getNewPostText(state)
    }
}

const MyPostContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostContainer;