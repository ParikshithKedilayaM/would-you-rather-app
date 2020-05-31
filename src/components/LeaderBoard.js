import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.users.map(user => (
                <div key={user.id} className="panel panel-default col-md-6 col-md-offset-3">
                    <div className="panel-body">
                    <i className="fa" style={{fontSize:20+'px',color:'#DAA520'}}>&#xf091;</i>
                            <div>
                                <div className="col-md-3" >
                                    <img className="img-circle" width="100%" src={user.avatarURL} alt="User avatar" />
                                </div>
                                <div className="col-md-6 left right" >
                                    <h3>{user.name}</h3>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-9">
                                            <label>Answered Questions</label> 
                                        </div>
                                        <div className="col-md-3 text-right">
                                            <label>{Object.keys(user.answers).length}</label>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-9">
                                            <label>Created Questions</label>
                                        </div>
                                        <div className="col-md-3 text-right">
                                            <label>{user.questions.length}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="panel panel-default" >
                                        <div className="panel-heading text-center">
                                            <label>Score</label>    
                                        </div>
                                        <div className="panel-body">
                                            <div className="custom-circle">
                                            {Object.keys(user.answers).length + user.questions.length}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
                ))}
            </div>
        )
    }
}


function mapStateToProps({users}) {
    return {
        users: Object.values(users)
    }
}
export default connect(mapStateToProps)(LeaderBoard)
