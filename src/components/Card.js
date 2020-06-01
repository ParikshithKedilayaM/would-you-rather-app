import React, { Component } from 'react'
import Question from './Question'
import Result from './Result'
import QuestionThumbnail from './QuestionThumbnail'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Card extends Component {
state = {
    route: 0,
}
componentDidMount = () => {
    let option = 0;
    if (this.props.thumbnail === true) {
        option = 1;
    } else if (this.props.q === true){
        option = 2;
    } else if (this.props.result === true){
        option = 3;
    }
    this.setState({
        route: option, 
    })
}

    render() {
        if ( this.props.question === undefined) {
            return <Redirect to = "/404" />
        }
        const questionUser = this.props.users[this.props.question.author]
        return (
            <div className="panel panel-default">
                
                <div className="panel-heading">
                    <label>
                    {questionUser.name} asks
                    </label>
                </div>
                <div className="panel-body">
                    <div className="col-md-3" >
                        <img className="img-circle" width="100%" src={questionUser.avatarURL} alt="User avatar" />
                    </div>
                    <div className="col-md-9 left" >
                        {this.state.route===1 && (<QuestionThumbnail id={this.props.id} />)}
                        {this.state.route===2 && (<Question id={this.props.id} />)}
                        {this.state.route===3 && (<Result id={this.props.id} />)}
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps({users, questions, authUser}, props) {
    const { id } = props
    return {
        id, 
        authUser,
        users,
        question : questions[id],
    }
}
export default connect(mapStateToProps)(Card)
