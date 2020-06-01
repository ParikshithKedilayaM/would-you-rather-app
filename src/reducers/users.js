import { 
    RECEIVE_USERS, 
    ADD_USER_QUESTION, 
    ADD_USER_RESPONSE,
 } from '../actions/users'

export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS : 
            return {
                ...state, ...action.users
            }
        case ADD_USER_QUESTION:
            return {
                ...state,
            }
        case ADD_USER_RESPONSE:
            const {id, selectedOption, authUser} = action.info
            return {
                ...state,
                [authUser.id] : {
                    ...state[authUser.id],
                    answers: {
                        ...state[authUser.id].answers,
                        [id]:selectedOption
                    }
                }
            }
        default : return state
    }
}