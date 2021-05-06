export const getProfile = (state) => {
    return state.profilePage.profile
}

export const getStatusProfile = (state) => {
    return state.profilePage.status
}

export const getAuthorizedUserId = (state) => {
    return state.auth.userId
}

export const getPosts = (state) => {
    return state.profilePage.posts
}

export const getNewPostText = (state) => {
    return state.profilePage.newPostText
}


