import React, { Component } from 'react'
import Header from './Header'
import { handleAddPoll } from '../actions/questions'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    state = {
        optionOne : '',
        optionTwo : '',
        success : false,
    }
    postNewQuestion = (event) => {
        event.preventDefault();
        const {dispatch} = this.props
        dispatch(handleAddPoll(this.state.optionOne, this.state.optionTwo))
        this.setState({
            optionOne:'',
            optionTwo:'',
            success: true,
        })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="panel panel-default col-md-6 col-md-offset-3">
                    {this.state.success && (
                        <div className="alert alert-success flex">
                            <label>Question posted successfully</label>
                        </div>
                    )}
                    <div className="panel-heading text-center"><h2>Create New Question</h2></div>
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
                                />
                            </div>
                            <div className="text-center">
                                <label>OR</label>
                            </div>
                            <div className="form-group">
                                <input type="text" 
                                    placeholder="Enter Option Two Text Here"
                                    className="form-control"
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
