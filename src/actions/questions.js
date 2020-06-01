import { addPoll, recordResponse } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { addUserQuestion, addUserResponse } from './users'

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
        dispatch(showLoading())
        console.log(optionTwo)
        return addPoll({
            optionOneText: optionOne, 
            optionTwoText: optionTwo,
            author: authUser.id,
        })
        .then((question) => dispatch(addQuestion(question)))
        .then((question) => dispatch(addUserQuestion(question)))
        .then(() => dispatch(hideLoading()))
        .catch((e) => {
            console.warn(e)
            alert('Error adding question!')
            dispatch(hideLoading())
        })
    }
}

export function handleAnswerQuestion(id, selectedOption) {
    return (dispatch, getState) => {
        const {authUser} = getState()
        dispatch(showLoading())
        return recordResponse({
            authedUser : authUser.id,
            qid : id, 
            answer : selectedOption,
        })
        .then(() => dispatch(answerQuestion({id, selectedOption, authUser})))
        .then(() => dispatch(addUserResponse({id, selectedOption, authUser})))
        .then(() => dispatch(hideLoading()))
        .catch((e) => {
            console.warn(e)
            alert('Error answering question!')
            dispatch(hideLoading())
        })
    }
}