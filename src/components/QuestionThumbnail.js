import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

class QuestionThumbnail extends Component {
    
    render() {
        return (
            <div className="card-body">
                <h2 className="card-title">Would You Rather</h2>
                <label>{this.props.text} or </label>
                <Link to={`/poll/${this.props.id}`} >
                    <button className="btn btn-default btn-block">View Poll</button>
                </Link>

            </div>
        )
    }
}

function mapStateToProps({questions}, props) {
    const {id} = props
    return {
        text : questions[id].optionOne.text
    }
}

export default connect(mapStateToProps)(QuestionThumbnail)
