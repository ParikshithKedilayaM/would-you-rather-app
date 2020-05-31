import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class QuestionThumbnail extends Component {
    
    render() {
        return (
            <div className="card-body">
                <h2 className="card-title">Would You Rather</h2>
                
                <Link to={`/poll/${this.props.id}`} >
                    <button className="btn btn-primary btn-block">View Poll</button>
                </Link>

            </div>
        )
    }
}

export default QuestionThumbnail
