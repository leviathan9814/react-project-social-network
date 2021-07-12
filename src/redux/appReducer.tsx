import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type InitilStateType = {
    initialized: boolean
}

const initialState: InitilStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): InitilStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;