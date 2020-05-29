import React, { Component } from 'react'
import Question from './Question'
import Result from './Result'

class Card extends Component {
    render() {
        return (
            <div class="card row align-items-center justify-content-center">
                <div class="well well-sm">
                    <b>
                        Tyler asks
                    </b>
                </div>
                <div class="col-md-2 col-md-offset-3" >
                    <img class="img-circle" src="../../logo192.png" alt="User avatar" />
                </div>
                <div class="col-md-4" >
                    <Question />
                    <Result />
                </div>
            </div>
        )
    }
}

export default Card
