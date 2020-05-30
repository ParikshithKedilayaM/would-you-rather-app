import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="panel panel-default col-md-6 col-md-offset-3">
                <div className="panel-heading text-center">
                    <h3>Welcome to the Would You Rather App!</h3>
                    <h5>Please sign in to continue</h5>
                </div>
                <div className="panel-body text-center">
                    <div>
                        <img src="../../would-you-rather.png" width="40%" alt="" />
                    </div>
                    <div>
                        <label>
                            <h3>Sign In</h3>
                        </label>
                        <form>
                            <div className="form-group">
                                <input type="text" 
                                    placeholder="Enter User Name"
                                    className="form-control"
                                />
                            </div>
                            <button className="btn btn-primary btn-block" >Sign In</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
