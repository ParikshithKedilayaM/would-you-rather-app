import React, { Component } from 'react'
import Question from './Question'
import Result from './Result'

class Card extends Component {
    render() {
        return (
            <div class="panel panel-default col-md-6 col-md-offset-3">
                <div class="panel-heading">
                    <b>
                        Tyler asks
                    </b>
                </div>
                <div className="panel-body">
                    <div class="col-md-3" >
                        <img class="img-circle" width="100%" src="../../img_avatar.png" alt="User avatar" />
                    </div>
                    <div class="col-md-9 left" >
                        <Question />
                        <Result />
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
