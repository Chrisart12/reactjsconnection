import { ADD_QUESTION_ID } from './questionTypes'

const initialState = {
    questionIds: [],
}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION_ID:
            return {
                ...state,
                questionIds: state.questionIds.concat(action.payload)
            }
            
            break;
    
        default:
            return state;
            break;
    }
}

export default questionReducer;