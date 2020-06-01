import { 
    RECEIVE_QUESTIONS,
    ADD_QUESTION,
    ANSWER_QUESTION,
 } from '../actions/questions'

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS : 
            return {
                ...state, ...action.questions
            }
        case ADD_QUESTION :
            return {
                ...state, 
                [action.question.id] : action.question,
            }
        case ANSWER_QUESTION:
            const {id, selectedOption, authUser} = action.info
            return {
                ...state,
                [id] : {
                    ...state[id],
                    [selectedOption] : {
                        ...state[id][selectedOption],
                        votes : state[id][selectedOption].votes.concat([authUser.id])
                    }
                },
            }
        default : return state
    }
}