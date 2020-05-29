import React, { Component } from 'react'

class Result extends Component {
    render() {
        return (
            <div class="card-body">
                <h2 class="card-title">Results:</h2>
                <p className="class-body">
                    <div class="alert alert-success flex">
                        <div class="badge" style={{float: 'right'}}>You answered</div>
                        <label>
                            Would you rather do spend some money
                        </label>
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                            aria-valuemin="0" aria-valuemax="100" style={{width:40+'%'}}>
                                40%
                            </div>
                        </div>
                        <label>4 out of 10 votes</label>
                    </div>
                    <div class="alert alert-info">
                        <label>
                            Would you rather save some money for future
                        </label>
                        <div class="progress">
                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="40"
                            aria-valuemin="0" aria-valuemax="100" style={{width:60+'%'}}>
                                60%
                            </div>
                        </div>
                        <label>6 out of 10 votes</label>
                    </div>
                </p>
            </div>
        )
    }
}

export default Result
