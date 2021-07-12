const SEND_MESSAGE = "SEND-MESSAGE";

type MessageType = {
    id: number,
    name: string
}

type DialogType = {
    id: number,
    text: string
}

let initialState = {
    messagesData: [
        {id: 1, name: "Yura"},
        {id: 2, name: "Masha"},
        {id: 3, name: "Christina"},
        {id: 4, name: "Roma"}
    ] as Array<MessageType>,
    dialogsData: [
        {id: 1, text: "Hi"},
        {id: 2, text: "I learning React"},
        {id: 3, text: "and Redux"},
        {id: 4, text: "I looking for a job"}
    ] as  Array<DialogType>
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body= action.newMessageBody;
            return {
                ...state,
                dialogsData: [...state.dialogsData, {id: 5, text: body}]
            };
        default:
            return state;
    }
}

type SendMessageType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}

export const sendMessage = (newMessageBody: string): SendMessageType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer;