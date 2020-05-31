import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserBadge extends Component {
    render() {
        console.log(this.props)
        return (
            <span>
                <img src={this.props.authUser.avatarURL} 
                    className="img-circle img-resize avatar"  
                    alt="Avatar" 
                    />
                <span> Hello {this.props.authUser.name} </span>
            </span>
        )
    }
}

function mapStateToProps({authUser}){
    return {
        authUser
    }
}
export default connect(mapStateToProps)(UserBadge) 
