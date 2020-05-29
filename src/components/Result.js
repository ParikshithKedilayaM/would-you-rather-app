import React, { Component } from 'react'

class Result extends Component {
    render() {
        return (
            <div class="card-body">
                <h2 class="card-title">Results:</h2>
                <p className="class-body">
                    <div class="alert alert-success">
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                            aria-valuemin="0" aria-valuemax="100" style={{width:40+'%'}}>
                                40%
                            </div>
                        </div>
                        <label>
                            Would you rather
                        </label>
                    </div>
                    <div class="alert alert-info">
                        <div class="progress">
                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="40"
                            aria-valuemin="0" aria-valuemax="100" style={{width:40+'%'}}>
                                40%
                            </div>
                        </div>
                        <label>
                            Would you rather
                        </label>
                    </div>
                </p>
            </div>
        )
    }
}

export default Result
