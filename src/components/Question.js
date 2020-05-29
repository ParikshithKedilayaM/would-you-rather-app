import React, { Component } from 'react'

class Question extends Component {
    render() {
        return (
            <div class="card-body">
                <h2 class="card-title">Would You Rather...</h2>
                <p className="class-body">
                    <div class="radio">
                        <label>
                            <input type="radio" name="option" value="Option 1" />
                            Option 1
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="option" value="Option 2" />
                            Option 2
                        </label>
                    </div>
                </p>
                <button style={{width: 18+'rem'}} class="btn btn-primary">Submit</button>
            </div>
        )
    }
}

export default Question
