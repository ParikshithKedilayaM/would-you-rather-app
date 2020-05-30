import React, { Component } from 'react'

class UserBadge extends Component {
    render() {
        return (
            <div>
                <span className="glyphicon glyphicon-user"></span>
                {
                //}<img src="" class="img-circle" alt="User avatar" />
                }
                <span> Hello {this.props.authUser} </span>
            </div>
        )
    }
}

export default UserBadge
