import React, { Component } from 'react'
import UserBadge from './UserBadge'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <span className="navbar-brand" >Would You Rather</span>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/newquestion"> New Question </a></li>
                        <li><a href="/leaderboard"> Leaderboard </a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/" className="disabled"> {<UserBadge />} </a></li>
                        <li><a href="/logout"><span className="glyphicon glyphicon-log-in"></span> Logout </a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header
