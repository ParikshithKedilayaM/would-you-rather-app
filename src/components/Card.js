import React, { Component } from 'react'
import Question from './Question'
import Result from './Result'

class Card extends Component {
    render() {
        return (
            <div>
                
                    <div className="panel-heading">
                        <b>
                            Tyler asks
                        </b>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-3" >
                            <img className="img-circle" width="100%" src="../../img_avatar.png" alt="User avatar" />
                        </div>
                        <div className="col-md-9 left" >
                            <Question />
                            <Result />
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default Card
