import React, { Component } from 'react'
import UserBadge from './UserBadge'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <span className="navbar-brand" >Would You Rather</span>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/newquestion' exact activeClassName='active'>
                                New Question 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard' exact activeClassName='active'>
                                Leaderboard 
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/" className="disabled"> {<UserBadge />} </a></li>
                        <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Logout </a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header
