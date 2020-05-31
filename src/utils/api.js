import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA.js'
  
export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
}

export function addPoll(question) {
  return _saveQuestion (question)
}

export function recordResponse(info) {
  return _saveQuestionAnswer(info)
}