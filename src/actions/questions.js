import { addPoll, recordResponse } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

function answerQuestion(info) {
    return {
        type: ANSWER_QUESTION,
        info
    }
}

export function handleAddPoll(optionOne, optionTwo) {
    return(dispatch, getState) => {
        const {authUser} = getState()
        return addPoll({
            optionOne, 
            optionTwo,
            authUser,
        })
        .then((question) => dispatch(addQuestion(question)))
    }
}

export function handleAnswerQuestion(id, selectedOption) {
    return (dispatch, getState) => {
        const {authUser} = getState()
        return recordResponse({
            authedUser : authUser.id,
            qid : id, 
            answer : selectedOption,
        })
        .then((info) => dispatch(answerQuestion(info)))
    }
}