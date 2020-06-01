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
            console.log(action.question.author)
            let userUpdate = {}
            userUpdate = {
                [action.question.author] : {
                    ...state[action.question.author],
                    //questions : state[action.question.author].questions.concat([action.question.id])
                }
            }
            console.log(userUpdate)
            return {
                ...state, 
                [action.question.id] : action.question,
                ///...userUpdate,
            }
        case ANSWER_QUESTION:
            console.log(action)
            return {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    [action.selectedOption] : {
                        ...state[action.selectedOption],
                        votes : state[action.selectedOption].votes.concat([action.authUser.id])
                    }
                }
            }
        default : return state
    }
}