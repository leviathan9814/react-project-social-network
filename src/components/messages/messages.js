import React from "react";
import MessageItems from "./messageItems/messageItems";
import DialogItems from "./dialogItems/dialogItems";
import { reduxForm, reset} from "redux-form";
import {Redirect} from "react-router-dom";
import {required} from "../../validators/validators";
import { Textarea, createNewField } from "../formsControls/formsControls";


const Messages = (props) => {

    let state = props.dialogsPage;
    
    let messagesElem = state.messagesData.map(item => {
        return <MessageItems name={item.name} key={item.id} id={item.id}/>
    });    

    let dialogsElem = state.dialogsData.map(item => {
        return <DialogItems text={item.text} key={item.id}/>
    });

    const addNewMessage = (values, dispatch) => {
        props.sendMessage(values.newMessageBody);
        dispatch(reset("dialogAddMessageForm"));
    }

    if (!props.isAuth) return <Redirect to="/login"/>

    return (
        <div className="messages">
            <div className="messages-items">
                {messagesElem}
            </div>
            <div className="dialog-items">
                {dialogsElem}
            </div>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
            
        </div>
    )
}

const AddMessageForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createNewField(Textarea, "newMessageBody", [required], "Enter your message")}
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Messages;