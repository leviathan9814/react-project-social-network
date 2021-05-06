import React from "react";
import Messages from "./messages";
import {sendMessage} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import {compose} from "redux";
import {getIsAuth} from "../../redux/selectors/authSelectors";
import {getDialogsPage} from "../../redux/selectors/dialogsSelectors";

const mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state),
        isAuth: getIsAuth(state)
    }
}

const MessagesContainer = compose(
    connect(mapStateToProps, {sendMessage}))
    (Messages);

export default MessagesContainer;