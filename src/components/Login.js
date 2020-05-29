import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div class="panel panel-default col-md-6 col-md-offset-3">
                <div class="panel-heading text-center">
                    <h3>Welcome to the Would You Rather App!</h3>
                    <h5>Please sign in to continue</h5>
                </div>
                <div class="panel-body text-center">
                    <div>
                        <img src="../../would-you-rather.png" width="40%" alt="" />
                    </div>
                    <div>
                        <label>
                            <h3>Sign In</h3>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
