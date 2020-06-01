import React, { Component } from 'react'
import {connect} from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class Question extends Component {
    state = {
        optionOne : false,
        optionTwo : false,
    }

    answerQuestion = (event) => {
        event.preventDefault();
        const selectedOption = this.getSelectedOption()
        if (selectedOption !== null) { 
            const {dispatch} = this.props
            dispatch(handleAnswerQuestion(this.props.id, selectedOption))
        }

    }

    getSelectedOption () {
        return (this.state.optionOne || this.state.optionTwo) 
        ? (this.state.optionOne === true 
            ? 'optionOne' 
            : 'optionTwo')
        : null
    }
    
    setOptionOne = () => {
        this.setState({
            optionOne: true,
            optionTwo: false,
        })
    }

    setOptionTwo = () => {
        this.setState({
            optionOne: false,
            optionTwo: true,
        })
    }

    render() {
        return (
            <div className="card-body">
                <h2 className="card-title">Would You Rather...</h2>
                <form >
                    <div className="radio">
                        <label>
                            <input type="radio" name="option" value="OptionOne" 
                            onClick={this.setOptionOne} />
                                {this.props.question.optionOne.text}
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="option" value="OptionTwo" 
                            onClick={this.setOptionTwo} />
                            {this.props.question.optionTwo.text}
                        </label>
                    </div>
                    <button 
                        className="btn btn-primary btn-block"
                        onClick={this.answerQuestion}
                        >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({users, questions}, props) {
    const { id } = props
    return {
        id,
        question : questions[id],
    }
}

export default connect(mapStateToProps)(Question)
