import React, { Component } from 'react'

class UserBadge extends Component {
    render() {
        return (
            <span>
                <img src="../../img_avatar.png" 
                    className="img-circle img-resize"  
                    alt="User avatar" 
                    />
                <span> Hello {this.props.authUser} </span>
            </span>
        )
    }
}

export default UserBadge
