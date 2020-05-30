import React, { Component } from 'react'
import Card from './Card'
import Header from './Header'

class Poll extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="panel panel-default col-md-6 col-md-offset-3">
                    <Card />
                </div>
            </div>
        )
    }
}

export default Poll
