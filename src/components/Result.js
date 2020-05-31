import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        const {optionOne, optionTwo, userSelection} = this.props
        const total = optionOne.votes.length + optionTwo.votes.length
        const optionOnePercentage = (optionOne.votes.length / total) * 100
        const optionTwoPercentage = (optionTwo.votes.length / total) * 100

        return (
            <div className="card-body">
                <h2 className="card-title">Results:</h2>
                    <div className="alert alert-info flex">
                        {userSelection==='optionOne' && (
                            <div className="badge" style={{float: 'right'}}>You answered</div>
                        )}
                        <label>
                            {optionOne.text}
                        </label>
                        <div className="progress">
                            <div className="progress-bar progress-bar-success" role="progressbar" 
                            aria-valuenow={optionOnePercentage}
                            aria-valuemin="0" aria-valuemax="100" style={{width:optionOnePercentage+'%'}}>
                                {optionOnePercentage}%
                            </div>
                        </div>
                        <label>{optionOne.votes.length} out of {total} votes</label>
                    </div>
                    <div className="alert alert-info">
                        {userSelection==='optionTwo' && (
                            <div className="badge" style={{float: 'right'}}>You answered</div>
                        )}
                        <label>
                            {optionTwo.text}
                        </label>
                        <div className="progress">
                            <div className="progress-bar progress-bar-success" role="progressbar" 
                            aria-valuenow={optionTwoPercentage}
                            aria-valuemin="0" aria-valuemax="100" style={{width:optionTwoPercentage+'%'}}>
                                {optionTwoPercentage}%
                        </div>
                    </div>
                    <label>{optionTwo.votes.length} out of {total} votes</label>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, authUser},props) {
    const {id} = props
    return {
        userSelection: authUser.answers[id],
        optionOne : questions[id].optionOne,
        optionTwo : questions[id].optionTwo,
    }
}

export default connect(mapStateToProps)(Result)
