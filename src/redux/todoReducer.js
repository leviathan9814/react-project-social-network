const ADD_TODO = "ADD-TODO";


const initialState = {
    todoData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "I`m fine"},
        {id: 3, message: "Redux nice"}
    ]
}

export type InitialStateType = typeof initialState;

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: 
        return {
            ...state,
            todoData: [...state.todoData, {id: 4, message: action.newNote}]
        }
        default:
            return state;
    }
}

export const addTodo = (newNote) => ({type: ADD_TODO, newNote});

export default todoReducer;