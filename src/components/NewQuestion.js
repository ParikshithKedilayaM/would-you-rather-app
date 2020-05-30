import React, { Component } from 'react'
import Header from './Header'

class NewQuestion extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="panel panel-default col-md-6 col-md-offset-3">
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
                            <button className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewQuestion
