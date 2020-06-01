export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_USER_RESPONSE = 'ADD_USER_RESPONSE'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addUserQuestion(question) {
    return {
        type: ADD_USER_QUESTION,
        question
    }
}

export function addUserResponse(info) {
    return {
        type: ADD_USER_RESPONSE,
        info
    }
}