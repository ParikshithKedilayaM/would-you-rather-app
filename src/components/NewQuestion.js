import React, { Component } from 'react'

class NewQuestion extends Component {
    render() {
        return (
            <div class="panel panel-default col-md-6 col-md-offset-3">
                <div class="panel-heading text-center"><h2>Create New Question</h2></div>
                <div class="panel-body">
                    <div>
                        <label className="">Complete the question.</label>
                    </div>
                    <div>
                        <h3>Would You Rather...</h3>
                    </div>
                    <div>
                        <form>
                        <div class="form-group">
                            <input type="text" 
                                placeholder="Enter Option One Text Here"
                                class="form-control"
                            />
                        </div>
                        <div className="text-center">
                            <label>OR</label>
                        </div>
                        <div class="form-group">
                            <input type="text" 
                                placeholder="Enter Option Two Text Here"
                                class="form-control"
                            />
                        </div>
                        <button class="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewQuestion
