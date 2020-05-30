import React, { Component } from 'react'

class Question extends Component {
    render() {
        return (
            <div className="card-body">
                <h2 className="card-title">Would You Rather...</h2>
                <div className="radio">
                    <label>
                        <input type="radio" name="option" value="OptionOne" />
                        Option 1
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="option" value="OptionTwo" />
                        Option 2
                    </label>
                </div>
                <button className="btn btn-primary btn-block">Submit</button>
            </div>
        )
    }
}

export default Question
