import { ADD_QUESTION_ID } from './questionTypes';

export const addQuestionId = (question_id) => {
    return {
        type: ADD_QUESTION_ID,
        payload: question_id
    }
}

