import {AppStateType} from "../store";

export const getProfile = (state: AppStateType) => {
    return state.profilePage.profile
}

export const getStatusProfile = (state: AppStateType) => {
    return state.profilePage.status
}

export const getAuthorizedUserId = (state: AppStateType) => {
    return state.auth.userId
}

export const getPosts = (state: AppStateType) => {
    return state.profilePage.posts
}

export const getNewPostText = (state: AppStateType) => {
    return state.profilePage.newPostText
}


