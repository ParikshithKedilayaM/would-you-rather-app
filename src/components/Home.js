import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'
import Result from './Result'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="panel panel-default col-md-6 col-md-offset-3">
                    <div className="panel-heading">
                        <ul className="nav nav-tabs nav-justified">
                            <li className="active"><a data-toggle="tab" href="#unanswered">Unanswered Questions</a></li>
                            <li><a data-toggle="tab" href="#answered">Answered Questions</a></li>
                        </ul>
                    </div>
                    <div className="panel-body tab-content">
                        <div id="unanswered" className="tab-pane fade in active">
                            <Card />
                        </div>
                        <div id="answered" className="tab-pane fade">
                            Answered
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
