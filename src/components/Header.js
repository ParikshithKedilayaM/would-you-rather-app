import React, { Component } from 'react'
import UserBadge from './UserBadge'

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <span class="navbar-brand" >Would You Rather</span>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/newquestion"> New Question </a></li>
                        <li><a href="/leaderboard"> Leaderboard </a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/Login"> {<UserBadge />} </a></li>
                        <li><a href="/logout"><span class="glyphicon glyphicon-log-in"></span> Logout </a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header
