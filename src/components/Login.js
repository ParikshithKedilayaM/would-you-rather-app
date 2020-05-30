import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authUser'

class Login extends Component {
    state = {
        uname : '',
        loginFailed : false
    }
    signIn = (event) => {
        event.preventDefault();
        const uid = this.props.users[this.state.uname]
        if (uid && uid !== null) {
            this.setState({
                loginFailed : false,
            })
            this.props.dispatch(setAuthedUser(uid))
        } else {
            this.setState({
                loginFailed : true,
            })
        }
        this.setState({
            uname : ''
        })
    }

    setUsername = (event) => {
        this.setState({
            uname :event.target.value,
        })
    }
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
                        {this.state.loginFailed && (
                            <div className="alert alert-danger flex">
                                <label>Login failed</label>
                            </div>
                        )}
                        <form>
                            <div className="form-group">
                                <input type="text" 
                                    placeholder="Enter User Name"
                                    className="form-control"
                                    value={this.state.uname}
                                    onChange={this.setUsername}
                                />
                            </div>
                            <button 
                                className="btn btn-primary btn-block" 
                                onClick={this.signIn}
                                >
                                Sign In
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(Login)
