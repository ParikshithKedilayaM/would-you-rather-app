import React, { Component } from 'react'
import Header from './Header'
import { handleAddPoll } from '../actions/questions'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    state = {
        optionOne : '',
        optionTwo : '',
        success : false,
        errorField : false,
    }

    postNewQuestion = (event) => {
        event.preventDefault();
        if (this.state.optionOne.trim() === '' || this.state.optionTwo.trim() === '') {
            this.setState({
                errorField : true,
            })
        } else {
            const {dispatch} = this.props
            dispatch(handleAddPoll(this.state.optionOne, this.state.optionTwo))
            .then(() => {
                this.setState({
                    optionOne:'',
                    optionTwo:'',
                    success: true,
                    errorField: false,
                })}
            )
        }
    }

    setOptionOne = (event) => {
        this.setState({
            optionOne : event.target.value,
        })
    }

    setOptionTwo = (event) => {
        this.setState({
            optionTwo : event.target.value,
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="panel panel-default col-md-6 col-md-offset-3">
                    <div className="panel-heading text-center"><h2>Create New Question</h2></div>
                    {this.state.success && (
                        <div className="alert alert-success flex">
                            <label>Question posted successfully</label>
                        </div>
                    )}
                    {this.state.errorField && (
                        <div className="alert alert-danger flex">
                            <label>Please fill both the options to submit a poll!</label>
                        </div>
                    )}
                    <div className="panel-body">
                        <div>
                            <label className="">Complete the question.</label>
                        </div>
                        <div>
                            <h3>Would You Rather...</h3>
                        </div>
                        <div>
                            <form>
                            <div className="form-group">
                                <input type="text" 
                                    placeholder="Enter Option One Text Here"
                                    className="form-control"
                                    value={this.state.optionOne}
                                    onChange={this.setOptionOne}
                                />
                            </div>
                            <div className="text-center">
                                <label>OR</label>
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                    placeholder="Enter Option Two Text Here"
                                    className="form-control"
                                    value={this.state.optionTwo}
                                    onChange={this.setOptionTwo}
                                />
                            </div>
                            <button 
                                className="btn btn-primary btn-block"
                                onClick={this.postNewQuestion}
                                >
                                Submit
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(NewQuestion)
