import React, { Component } from 'react'
import Card from './Card'
import Header from './Header'
import { connect } from 'react-redux'

class Poll extends Component {
    state = {
        answered : false,
    }
    componentDidMount =() => {
        const {authUser, id, users} = this.props
        if (Object.keys(users[authUser.id].answers).includes(id)) {
            this.setState({
                answered : true,
            })
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="col-md-6 col-md-offset-3">
                    {!this.state.answered &&(
                        <Card 
                        id={this.props.id}
                        q={true}
                        />
                    )}
                    
                    {this.state.answered &&(
                        <Card 
                        id={this.props.id}
                        result={true}
                        />
                    )}
                </div>
            </div>
        )
    }
}
function mapStateToProps({users, questions, authUser}, props) {
    const { id } = props.match.params
    return {
        id, 
        users,
        authUser,
    }
}
export default connect(mapStateToProps)(Poll)
