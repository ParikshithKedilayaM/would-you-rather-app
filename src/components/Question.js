import React, { Component } from 'react'
import {connect} from 'react-redux'

class Question extends Component {
    render() {
        return (
            <div className="card-body">
                <h2 className="card-title">Would You Rather...</h2>
                <div className="radio">
                    <label>
                        <input type="radio" name="option" value="OptionOne" />
                            {this.props.question.optionOne.text}
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="option" value="OptionTwo" />
                        {this.props.question.optionTwo.text}
                    </label>
                </div>
                <button className="btn btn-primary btn-block">Submit</button>
            </div>
        )
    }
}

function mapStateToProps({users, questions}, props) {
    const { id } = props
    return {
        question : questions[id],
    }
}

export default connect(mapStateToProps)(Question)
